const mongoose=require("mongoose")

const workoutlogsSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        require:true,
        ref:"user"
    },
    workout_detailsId:{
        type:mongoose.Schema.ObjectId,
        require:true,
        ref:"workout_details"
    } 
},{ timestamps: true } )

const model=mongoose.model("workoutlogs",workoutlogsSchema,"workoutlogs");

module.exports=model;