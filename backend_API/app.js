import express from 'express'
import mongoose from 'mongoose'
import { Schema } from 'mongoose'

// Start App
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Capstone Backend')
})

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// App Listening
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})