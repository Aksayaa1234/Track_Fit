const mongoose=require("mongoose")
require("../connect");

 const userSchema=mongoose.Schema({
    user_name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        require:true
    },
    password:{
        type:String,
        trim:true,
        require:true
    },
    age:{
        type:Number,
        min:0,
        default:0
        
    },
    weight:{
        type:Number,
        min:0,
        default:0
        
    },
    height:{
        type:Number,
        min:0,
        default:0
        
    }
 })

 const model=mongoose.model("user",userSchema,"user");
 
 module.exports=model;