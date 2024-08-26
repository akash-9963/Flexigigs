import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    // isSeller:{
    //     type:Boolean,
    //     default:false
    // },
    // img:{
    //     type:String,
    //     required:true
    // },
    // phone:{
    //     type:String,
    //     required:false
    // },
    // desc:{
    //     type:String,
    //     required:false
    // },
},{
    timestamps:true
});
const User=mongoose.model('User',userSchema);
export default User;