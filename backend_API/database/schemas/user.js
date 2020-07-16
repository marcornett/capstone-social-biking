import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

const userSchema = Schema({
    username: String,
    password: String,
    email: String,
    groups: [String],
    image: {
        data: Buffer,
        contentType: String
    }
})

export const UserModel = model('User', userSchema)