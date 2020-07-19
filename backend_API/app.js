import express, { response } from 'express'
import cors from 'cors'
import { connectDB } from './database/connect'
import path from 'path'
import { UserModel } from './database/schemas/user'
import { GroupModel } from './database/schemas/group'
import jwt from 'jsonwebtoken'
import bycrpt, { hash } from 'bcrypt'

// Start App
const app = express()
const port = process.env.PORT || 4000
const CURRENT_SERVER_DIRECTORY = path.resolve(path.dirname("."))
const STATIC_DIRECTORY = path.resolve(CURRENT_SERVER_DIRECTORY, "backend_API", "public")
const JWT_SECRET = process.env.JWT_SECRET

// Connect to DB
connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(STATIC_DIRECTORY))
app.use(cors({ origin: true }))

// Get All users
app.get('/api/users', async (req, res) => {
    try {
        await UserModel.find((err, users) => {
            if (err) {
                res.status(500).send("Internal Server Error")
            }
            res.send(users)
        })
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})

// Register User
app.post("/api/users/register", async (req, res) => {
    const {
        username,
        password,
        email,
        image
    } = req.body
    console.log(req.body)
    const hash = await bycrpt.hash(password, 8)

    try {
        await UserModel.findOne({ username }, async (err, user) => {
            if (!user) {
                const jsonToken = jwt.sign(
                    { payload: { username } },
                    JWT_SECRET,
                    { expiresIn: '1 days' }
                )
                const newUser = new UserModel({
                    username,
                    password: hash,
                    email,
                    image,
                    token: jsonToken
                })
                await newUser.save()
                res.send(newUser)

            } else {
                res.json({ message: "User already exists" })
            }
        })
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})

// Login
app.post('/api/auth/login', async (req, res, next) => {
    const { username, password } = req.body

    await UserModel.findOne({ username }, async (err, user) => {
        // Hashed password
        const hash = await bycrpt.hash(password, 8)
        bycrpt.compare(password, hash, (err, same) => {
            // Authentication 
            const jsonToken = jwt.sign(
                { payload: { username } },
                JWT_SECRET,
                { expiresIn: '1 days' }
            )
            res.send({ token: jsonToken, username })
        })
    })
})

// Logout
app.get('/api/auth/logout', (req, res, next) => {
    res.json({ message: "Logged out", auth: false, token: false })
})

// Get user
app.get('/api/users/:username', async (req, res) => {
    const token = req.headers["authorization"]
    if (!token) {
        return res.send('Not authorized')
    }
    try {
        jwt.verify(token, JWT_SECRET, async function (err, decoded) {
            await UserModel.findOne({ username: req.params.username }, (err, user) => {
                res.send(user)
            })
        })
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})

// Add user picture
app.put("/api/users/:username/picture", async (req, res) => {
    // Update user image
    try {
        await UserModel.findOneAndUpdate(
            { username: req.params.username },
            { image: req.body.image },
            { new: true },
            (err, user) => {
                if (err) {
                    res.status(500).send("Internal Server Error")
                }
                res.send(user)
            }
        )
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})

// Delete user
app.delete('/api/users/:username', async (req, res) => {
    try {
        await UserModel.findOneAndDelete({ username: req.params.username }, (err, user) => {
            if (err) {
                res.status(500).send("Internal Server Error")
            }
            if (!user) {
                res.json({ message: "Issue with request" })
            }
            res.json({ message: "Account Deleted" })
        })
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})

// Group Routes

// Get groups
app.get("/api/groups", async (req, res) => {
    try {
        await GroupModel.find(
            // use location to get groups in area
            req.body.location ? req.body : null,
            // { location: req.body.location },
            function (err, groups) {
                if (err) {
                    res.send('Internal Server Error')
                }
                res.send(groups)
            })
    } catch (err) {
        res.send('Internal Server Error')
    }
})

// Get one group
app.get("/api/groups/:groupName", async (req, res) => {
    try {
        await GroupModel.find(
            req.params ? req.params : null,
            function (err, group) {
                if (err) {
                    res.send('Internal Server Error')
                }
                if (!group) {
                    res.send('Issue with request')
                }
                res.send(group)
            })
    } catch (err) {
        res.send('Internal Server Error')
    }
})

// Make group
app.post("/api/groups", async (req, res) => {
    const {
        groupName,
        location,
        image,
        about,
        eventList
    } = req.body

    const group = new GroupModel({
        groupName,
        location,
        image,
        about,
        eventList
    })

    try {
        await group.save()
        res.send(group)
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})

// App Listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})