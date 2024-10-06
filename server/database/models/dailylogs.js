const mongoose=require("mongoose")

const dailylogsSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        require:true,
        ref:"user"
    },
    sleep:{
        type:Number,
        min:0,
        max:15,
        default:0
    },
    water:{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    steps:{
        type:Number,
        min:0,
        default:0
    }
},{timestamps:true})

const model=mongoose.model("dailylogs",dailylogsSchema,"dailylogs");

module.exports=model;