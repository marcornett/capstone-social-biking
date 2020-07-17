import mongoose from 'mongoose'

const URL = process.env.DB_CONNECTION

mongoose.set('useFindAndModify', false)

export const connectDB = async () => {
    mongoose.connect(
        URL,
        { useUnifiedTopology: true, useNewUrlParser: true },
        () => {
            console.log(`Connected to DB /`)
        }
    )
}
