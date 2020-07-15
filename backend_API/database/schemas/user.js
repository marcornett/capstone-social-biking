import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const userSchema = Schema({
    username: String,
    password: String,
    email: String,
    groups: [String]
})

export const UserModel = mongoose.model('User', userSchema)