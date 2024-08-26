import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
const app = express();
dotenv.config();
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoose")
    } catch (error) {
        handleError(error);
    }  
}

app.listen(8000,()=>{
    connect()
    console.log("8000 server is running")
})