import { Schema, model } from 'mongoose'

const groupSchema = Schema({
    groupName: String,
    location: String,
    about: String,
    image: String,
    eventList: [String]
})

export const GroupModel = model('Group', groupSchema)