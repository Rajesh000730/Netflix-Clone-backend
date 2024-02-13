const express = require('express')
import { Request,  Response, Express } from "express"
import userRouter from './routes/user.router'
import authRouter from './routes/auth.router'
import productsRouter from './routes/products.router'
import { configDotenv } from "dotenv"
import { mongoConnect } from "./config/mongoConfig"
const bodyParser = require("body-parser")
import { verify } from "./config/jwtconfig"
const cors = require('cors')

//mongodb conection
mongoConnect()

//dotenv
configDotenv()
//app
const app:Express = express()
//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cors
app.use(cors({
  origin:'*'
}))

//allow access control origin

//root request
app.get('/', (req  : Request, res : Response)=>{
    res.json({data : 'hello fromserver'})
})

//routes
app.use('/api/v1/user',verify)
app.use('/api/v1/products',verify)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/products', productsRouter)
app.use('/api/v1/user', userRouter)

//port
const port:Number = 3000

app.listen(port, ()=>{console.log('server is running at http://localhost:3000')})