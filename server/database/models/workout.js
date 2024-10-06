const mongoose=require("mongoose")

const workoutSchema=mongoose.Schema({
    workout_type:{
        type:String,
        trim:true,
        require:true
    },
    workout_name:{
        type:String,
        trim:true,
        require:true
    }
})

const model=mongoose.model("workout",workoutSchema,"workout");

module.exports=model;