// import express from 'express'
// import { UserModel } from '../database/schemas/user'

// export default (app) => {
//     const router = express.Router()

//     router.post("/", async (req, res) => {
//         const {
//             username,
//             password,
//             email,
//             image
//         } = req.body

//         const user = new UserModel({
//             username,
//             password,
//             email,
//             image
//         })
//         try {
//             await user.save()
//             res.send(user)
//         } catch (err) {
//             res.status(500).send("Internal Server Error")
//         }
//     })

//     router.put("/", async (req, res) => {
//         // Update user image
//         const user = await UserModel.findOneAndUpdate()
//     })

//     app.use("/users", router)
// }