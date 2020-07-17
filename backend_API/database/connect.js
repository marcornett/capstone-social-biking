import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const URL = process.env.DB_CONNECTION

export const connectDB = async () => {
    mongoose.connect(
        URL,
        { useUnifiedTopology: true, useNewUrlParser: true },
        () => {
            console.log(`Connected to DB /`)
        }
    )
}
