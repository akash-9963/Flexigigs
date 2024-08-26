import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
   gigId:{
    type:String,
    required:true
   },
   img:{
    type:String,
    required:flase
   },
   price:{
    type:Number,
    required:true,
   },
   title:{
    type:String,
    required:true
   },
   sellerId:{
    type:String,
    required:true
   },
   buyerId:{
    type:String,
    required:true
   },
   isCompleted:{
    type:Boolean,
    default:false
   },
   payment_intent:{
    type:String,
    required:true
   },
},{
    timestamps:true
});
const Order=mongoose.model('Order',OrderSchema);
export default Order;