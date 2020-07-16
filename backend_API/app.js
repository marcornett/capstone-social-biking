import express, { response } from 'express'
import { Schema } from 'mongoose'
import { connectDB } from './database/connect'
import user from './routes/users'
import group from './routes/groups'

// Start App
const port = process.env.PORT || 5000
const CURRENT_SERVER_DIRECTORY = path.resolve(path.dirname("."))
const STATIC_DIRECTORY = path.resolve(CURRENT_SERVER_DIRECTORY, "backend_API", "public")

// Connect to DB
connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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