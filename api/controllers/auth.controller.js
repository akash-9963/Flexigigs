import User from '../models/user.model.js'
export const register=async (req,res)=>{
    try{
        const newUser=new User(req.body)
        await newUser.save();
        res.status(201).send("User has been created");
    }catch(err){
        res.status(500).send("Something went wrong!!")
    }
}
export const login=(req,res)=>{
    
}
export const logout=(req,res)=>{
    
}