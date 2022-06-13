'use strict';
const base64 = require('base-64');
const bcrypt = require("bcrypt");

const {User} = require('../models/index');

const basicAuth = (async(req,res,next)=>{
    if(req.headers.authorization){
        //basc  lkasjdflkjdfl;
        const secondPart = req.headers.authorization.split(" "); // if I have error please check tow lines
        const hashed  = secondPart[1]
       const decode = base64.decode(hashed)

    const userNameAndPassWord = decode.split(':')
    const Username = userNameAndPassWord[0];
    
    const password = userNameAndPassWord[1];

    const check = await User.findOne({where:{username:Username}})
    const validPassword = await bcrypt.compare(password,(check.password))



    if(validPassword  ){
        res.status(200).json(check)
     next()
    }else{
        res.status(500).send('Wrong password or username!')
        next()
    }
    }
})

module.exports=basicAuth;