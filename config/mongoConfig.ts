import mongoose from "mongoose";
require('dotenv').config()
const mongoConnect = async()=>{
    mongoose.set('strictQuery', false)
    const mongoURI:string = `mongodb+srv://Rajesh:${process.env.MONGO_URI_PASS}@users.skowpam.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(mongoURI!)
        console.log("MongoDBconnected")
    }
    catch(e){
        console.log(e)
    }
}

export {mongoConnect}