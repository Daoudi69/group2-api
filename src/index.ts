import * as dotenv from "dotenv"
import * as express from "express"
// read .env file before everything else
dotenv.config()
// import my services afterwards
import { Config, DB } from "./service"
import { UserRepository } from "./repository/user.repository"

const app = express()

app.get('/', (req: any, res: any) => {
    res.send({ message: "Ok: Groupe 2 hihihihihi" })
})

app.get('/users', (req: any, res: any) => {
    const limit = req.query.limit
    res.send([])
    //UserRepository.getUsers(limit)
    //    .then((users: any) => {
    //        res.send(users)
    //    }).catch(e => {
    //        // logs?
    //        res.send(500, { error: e.toString() })
    //    })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})