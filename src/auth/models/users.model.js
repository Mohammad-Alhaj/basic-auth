'use strict';

const USER = (sequelize,DataType)=>
sequelize.define("users",{
    username:{
        type:DataType.STRING,
        allowNull:false,
        unique: true
    },
    password:{
        type:DataType.STRING,
        allowNull:false
    }

})

module.exports=USER;