'use strict';
require('dotenv').config();
const { Sequelize,DataTypes } = require('sequelize');
const user =require('./users.model')

const POSTGRES_URI = process.env.DATABASE_URL;

let sequelize = new Sequelize(POSTGRES_URI);



module.exports={
    dataBase:sequelize,
    User:user(sequelize,DataTypes)
}


