'use strict';
const express = require('express');
const app = express();
const UserRouter = require('./auth/router.js/users.router')

app.get("/",(req,res)=>{
    res.status(200).send("HI!")
})







app.use(express.json());
app.use(UserRouter);
function start(PORT){
    app.listen(PORT,()=>{
        console.log(`lessening in PORT ${PORT}`)
    })
}
module.exports = {
    app:app,
    start:start
}