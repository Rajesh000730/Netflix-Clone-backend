const jwt = require('jsonwebtoken')
require('dotenv').config()
import { NextFunction, Request, Response } from "express"
const verify = (req: Request, res: Response,next:NextFunction)=>{
     try{
        var token = req.headers.authorization
        var token1 = token?.split(' ')
        
       
    if(!token1){
        throw new Error("not authorised")
    }
        jwt.verify(token1[1], process.env.JWT_SECRET, function(err:Error,  decoded:string){
            if(err){
                err={
                   name:"Token expired error", 
                   message:"jwt expired", 
                }
                throw new Error("jwt expired")
            }
            res.locals.email = decoded
        })
        
        next();
     }
     catch(e:any){
        res.json({error:e.message})
     }

   
}

export {verify}