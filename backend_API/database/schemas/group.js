import { Schema, model } from 'mongoose'

const groupSchema = Schema({
    groupName: String,
    location: String,
    image: {
        data: Buffer,
        contentType: String
    },
    eventList: [String]
})

export const GroupModel = model('Group', groupSchema)