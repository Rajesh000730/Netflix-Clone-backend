const express = require('express')
import { Router, Request, Response } from "express"
const jwt = require('jsonwebtoken')
const router:Router = express.Router()

router.get('/getuser', (req: Request,  res: Response)=>{
    res.json({students:["rajesh", "rajubhai"]})
})

export default router