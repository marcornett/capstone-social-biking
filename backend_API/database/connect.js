import mongoose from 'mongoose'

const URI = "mongodb+srv://marcornett:r6CqDCV2fYOiE1uM@cluster0.rofev.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.set('useFindAndModify', false)

export const connectDB = async () => {
    mongoose.connect(
        URI,
        { useUnifiedTopology: true, useNewUrlParser: true },
        () => {
            console.log(`Connected to DB /`)
        }
    )
}
