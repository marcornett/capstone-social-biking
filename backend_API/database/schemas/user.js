import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

const userSchema = Schema({
    username: String,
    password: String,
    email: String,
    groups: [],
    image: {
        data: Buffer,
        contentType: String
    },
    token: String
})

export const UserModel = model('User', userSchema)