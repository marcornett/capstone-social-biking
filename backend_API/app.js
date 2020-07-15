import express, { response } from 'express'
import { Schema } from 'mongoose'
import { connectDB } from './database/connect'
import user from './routes/users'
import group from './routes/groups'

// Start App
const app = express()
const port = 3000

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