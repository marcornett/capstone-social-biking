import express, { response } from 'express'
import { Schema } from 'mongoose'
import { connectDB } from './database/connect'
import user from './routes/users'
import group from './routes/groups'
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

// routes
user(app)
app.use('/users', user)

group(app)
app.use('/groups', group)

app.get('/', (req, res) => {
    res.send('Capstone Backend')
})

// App Listening
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})