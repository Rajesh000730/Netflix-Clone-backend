import mongoose , {Schema}from "mongoose";
import { HashOptions } from "crypto";
const userSchema = new Schema({
    email:{
        type:String, 
        required:  true,
        unique:true,
    }
        ,
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }
})

const userModel = mongoose.model('users', userSchema)

export {userModel}