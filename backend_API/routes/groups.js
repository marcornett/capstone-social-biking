import express from 'express'
import { GroupModel } from '../database/schemas/group'

export default (app) => {
    const router = express.Router()

    router.get("/", async (req, res) => {
        try {
            await GroupModel.find(
                // use location to get groups in area
                req.body.location ? req.body : null,
                // { location: req.body.location },
                function (err, groups) {
                    res.send(groups)
                })
        } catch (err) {
            res.send('Internal Server Error')
        }
    })

    router.get("/:groupName", async (req, res) => {
        try {
            await GroupModel.find(
                req.params ? req.params : null,
                function (err, groups) {
                    res.send(groups)
                })
        } catch (err) {
            res.send('Internal Server Error')
        }
    })

    // Makes a group but front-end won't use until we include a make group component
    router.post("/", async (req, res) => {
        const {
            groupName,
            location,
            image,
            about,
            eventList
        } = req.body

        const group = new GroupModel({
            groupName,
            location,
            image,
            about,
            eventList
        })

        try {
            await group.save()
            res.send(group)
        } catch (err) {
            res.status(500).send("Internal Server Error")
        }
    })

    app.use("/groups", router)
}