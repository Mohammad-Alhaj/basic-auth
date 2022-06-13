"use strict";

const express = require("express");
const {User} = require("../models/index");
const UserRouter = express.Router();
const bcrypt = require("bcrypt");
const basicAuth = require("../middleware/ basic");
UserRouter.post("/signup", async (req, res) => {

    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, 10);
    const record = await User.create({
      username: username,
      password: password,
    });
    res.status(201).json(record);
 
});

UserRouter.post("/signin",basicAuth, async(req, res) => {
   
    })

module.exports = UserRouter;

