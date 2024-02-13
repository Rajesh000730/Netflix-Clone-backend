const express = require('express')
import { Router, Request, Response } from "express"
import { instance1 } from "../config/axiosconfig"
const router:Router = express.Router()

router.get('/:id', async(req :Request, res:Response)=>{
    const resp = await instance1.get(`/products/${req.params.id}`)
    res.json({data : resp.data})

})

export default router