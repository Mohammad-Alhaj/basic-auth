'use strict';
const server = require('./src/server');
require('dotenv').config();
const PORT = process.env.PORT ||3001;

const {dataBase}=require('./src/auth/models/index')


dataBase.sync().then(()=>{
    server.start(PORT);

}).catch(console.error)

