const userModel=require("../database/models/user");
const jwt = require("jsonwebtoken")
const bcrypt=require("bcrypt");

const signup=async(req,res)=>{
    try{
        let data=await userModel.findOne({email:req.body.email});
        if(data)
        {
            res.status(400);
            res.json({message:"email already exist"});
            return;
        }
        let password= await bcrypt.hash(req.body.password,10);
        let user=new userModel({user_name:req.body.name,email:req.body.email,password:password});
        await user.save();
        res.status(200);
        res.json({message:"user added"});
    }
    catch(err){
        res.status(500);
        res.json({message:"server error"});
    }
}

const login=async(req,res)=>{
    try{
        let data= await userModel.findOne({email:req.body.email})
        if(!data)
        {
            res.status(400);
            res.json({message:"invalid email"});
            return;
        }
        if(await bcrypt.compare(req.body.password,data.password))
        {
            let token=jwt.sign({userId:data._id,name:data.user_name},process.env.SECRET_KEY);
            res.cookie("key",token);
            res.status(200);
            res.json({message:"valid user"});
            return;
        }
        else{
            res.status(400);
            res.json({message:"invalid password"});
            return;
        }
    }
    catch(err){
        res.status(500);
        res.json({message:"server error"});
    }
}

const health_check=(req,res)=>{
    try{
        res.status(200);
        res.json({message:"server is running in good health"});
        return;
    }
    catch(err){
        res.status(500);
        res.json({message:"server error"});
    }
}

const logout=(req,res)=>{
    try{
        res.clearCookie("key");
        res.status(200);
        res.json({message:"sucessfully logout"});
        return;
    }
    catch(err){
        res.status(500);
        res.json({message:"server error"});
    }
}

module.exports={signup,login,health_check,logout};