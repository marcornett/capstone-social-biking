import express, { response } from 'express'
import cors from 'cors'
import { connectDB } from './database/connect'
import path from 'path'
import { UserModel } from './database/schemas/user'
import { GroupModel } from './database/schemas/group'
import jwt from 'jsonwebtoken'

// Start App
const app = express()
const port = process.env.PORT || 5000
const CURRENT_SERVER_DIRECTORY = path.resolve(path.dirname("."))
const STATIC_DIRECTORY = path.resolve(CURRENT_SERVER_DIRECTORY, "backend_API", "public")
const JWT_SECRET = process.env.JWT_SECRET

// Connect to DB
connectDB()

const users = [{ username: "John", password: "password1", id: 3 }]


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(STATIC_DIRECTORY))
app.use(cors({ origin: true }))

// routes
// user(app)
// app.use('/users', user)

// group(app)
// app.use('/groups', group)

// User Routes

// Login
// Working with token
app.post('/api/auth/login', async (req, res, next) => {
    const { username, password } = req.body

    await UserModel.findOne({ username }, (err, user) => {
        // Authentication 
        if (user.username === username && user.password === password) {
            const jsonToken = jwt.sign(
                { payload: { username } },
                JWT_SECRET,
                { expiresIn: '1 days' }
            )
            res.send({ auth: true, token: jsonToken, username })
        }
    })
})

// Get user
// Working with token
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

// Get All users
// Working
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
// Working with token
app.post("/api/users/register", async (req, res) => {
    const {
        username,
        password,
        email,
        image
    } = req.body

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
                    password,
                    email,
                    image,
                    token: jsonToken
                })
                await newUser.save()
                res.send(newUser)

            } else {
                console.log(user)
                // TODO: Send plain message if user exists
                res.format({
                    'text/plain': function () {
                        res.send('User already exists');
                    }
                })
            }
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
            res.send(user)
        })
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})


// Group Routes

app.get("/api/groups", async (req, res) => {
    try {
        await GroupModel.find(
            // use location to get groups in area
            req.body.location ? req.body : null,
            // { location: req.body.location },
            function (err, groups) {
                res.send(groups)
            })
    } catch (err) {
        res.send('Internal Server Error')
    }
})

app.get("/api/groups/:groupName", async (req, res) => {
    try {
        await GroupModel.find(
            req.params ? req.params : null,
            function (err, groups) {
                res.send(groups)
            })
    } catch (err) {
        res.send('Internal Server Error')
    }
})

// Makes a group but front-end won't use until we include a make group component
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
    console.log(`Listening on localhost:${port}`)
})