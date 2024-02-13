import { HashOptions } from "crypto"

const  bcrypt  = require('bcrypt')
const saltrounds:Number = 10
const hashPassword = (password:string):string =>{
    const hashedPassword = bcrypt.hashSync(password ,  saltrounds)
    return hashedPassword
}

const comparePassword = (password:string, hashedPassword:string):Boolean=>{
    const bool = bcrypt.compareSync(password, hashedPassword)
    return bool;
}

export {hashPassword, comparePassword}