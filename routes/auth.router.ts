const express = require('express')
import { Router, Request, Response } from "express"
const jwt = require('jsonwebtoken')
const router:Router = express.Router()
import { userModel} from "../model/user.model"
import { comparePassword, hashPassword } from "../config/bcryptConfig"
router.post('/createUser', async (req: Request,  res: Response)=>{
    try{
        const name = req.body.email.split('@')[0]
        const hashedPassword = hashPassword(req.body.password.toString())
        const resp = await userModel.create({
            
            email:req.body.email,
            password:hashedPassword,
            name:name
        })
        console.log(resp)
        res.status(200).json({message:"user created"})
    }
    catch(e:any){
        if(e.code == 11000){
            res.json({error:"user already exists"})
        }
        else
        {res.json({error:e.message})}
    }
   
})

router.post('/authenticate',async (req: Request,  res: Response)=>{
    try{
        // console.log(res.locals.email)
        const user = await userModel.findOne({email:req.body.email}).exec()
        console.log(req.body)
        if(user){
            const bool = comparePassword(req.body.password.toString(), user.password)
            if(!bool){
                throw new Error("Incorrect password")
            }
            else{{const token = jwt.sign({ email: req.body.email, rand: Math.random() }, process.env.JWT_SECRET, { expiresIn: 60*60 })
             res.json({token:token})}}
        }
        else{
            throw new Error("user not available")
        }
        
    }
    catch(err:any){
        res.json({error: err.message})
    }
})


export default router