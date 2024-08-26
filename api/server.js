import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoute from "./routes/user.route"
import gigRoute from "./routes/gig.route"
import orderRoute from "./routes/order.route"
import conversationRoute from "./routes/converstation.route"
import messageRoute from "./routes/message.route"
import reviewRoute from "./routes/review.route"
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

app.use("/api/users",userRoute)
app.use("/api/gigs",gigRoute);
app.use("/api/orders",orderRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/messages",messageRoute);
app.use("/api/reviews",reviewRoute);
app.listen(8000,()=>{
    connect()
    console.log("8000 server is running")
})