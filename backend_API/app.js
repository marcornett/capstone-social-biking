import express, { response } from 'express'
import cors from 'cors'
import { Schema } from 'mongoose'
import { connectDB } from './database/connect'
import path from 'path'
import { UserModel } from './database/schemas/user'
// import user from './routes/users'
// import group from './routes/groups'

// Start App
const app = express()
const port = process.env.PORT || 5000
const CURRENT_SERVER_DIRECTORY = path.resolve(path.dirname("."))
const STATIC_DIRECTORY = path.resolve(CURRENT_SERVER_DIRECTORY, "backend_API", "public")

// Connect to DB
connectDB()

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
        UserModel.find((err, users) => {

            res.send(users)
        })
    } catch (err) {
        res.send("Internal Server Error")
    }
})

app.get('/users/:username', async (req, res) => {
    console.log(req.params.username)
    try {
        UserModel.findOne({ username: req.params.username }, (err, user) => {
            res.send(user)
        })
    } catch (err) {
        res.send("Internal Server Error")
    }
})

app.post("/users", async (req, res) => {
    const {
        username,
        password,
        email,
        image
    } = req.body

    const user = new UserModel({
        username,
        password,
        email,
        image
    })
    try {
        await user.save()
        res.send(user)
    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})

app.put("/users/:username/picture", async (req, res) => {
    // Update user image
    const user = await UserModel.findOneAndUpdate()
})

// App Listening
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})