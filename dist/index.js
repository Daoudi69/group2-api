"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
// read .env file before everything else
dotenv.config();
// import my services afterwards
//import { Config, DB } from "./service"
//import { UserRepository } from "./repository/user.repository"
const app = express();
app.get('/', (req, res) => {
    res.send({ message: "Ok: group 2" });
});
app.get('/users', (req, res) => {
    const limit = req.query.limit;
    res.send([]);
    //UserRepository.getUsers(limit)
    //    .then((users: any) => {
    //        res.send(users)
    //    }).catch(e => {
    //        // logs?
    //        res.send(500, { error: e.toString() })
    //    })
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
