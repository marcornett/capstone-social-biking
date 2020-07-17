import express, { response } from 'express'
import cors from 'cors'
import { connectDB } from './database/connect'
import path from 'path'
import jwt from 'jsonwebtoken'

// Start App
const app = express()
const port = process.env.PORT || 5000
const CURRENT_SERVER_DIRECTORY = path.resolve(path.dirname("."))
const STATIC_DIRECTORY = path.resolve(CURRENT_SERVER_DIRECTORY, "backend_API", "public")

// Connect to DB
connectDB()

// Authentication 
app.post('/login', (req, res, next) => {
    const { username, password } = req.body
    // TODO: work in progress
    if (users[0].username === username && users[0].password === password) {
        res.send({ auth: true, token: process.env.NODE_AUTH_TOKEN })
    }
})


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

app.get('/users', async (req, res) => {
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

app.get('/users/:username', async (req, res) => {
    try {
        await UserModel.findOne({ username: req.params.username }, (err, user) => {
            if (err) {
                res.status(500).send("Internal Server Error")
            }
            res.send(user)
        })
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})

app.post("/users", async (req, res) => {
    try {
        await UserModel.findOne({ username: req.body.username }, async (err, user) => {
            if (user) {
                console.log(user)
                // TODO: Send plain message if user exists
                res.format({
                    'text/plain': function () {
                        res.send('hey');
                    }
                })
            } else {
                const {
                    username,
                    password,
                    email,
                    image
                } = req.body

                const newUser = new UserModel({
                    username,
                    password,
                    email,
                    image
                })

                await newUser.save()
                res.send(newUser)
            }
        })
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})

app.put("/users/:username/picture", async (req, res) => {
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

app.delete('/users/:username', async (req, res) => {
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

// App Listening
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})