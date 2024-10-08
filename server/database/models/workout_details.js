const mongoose=require("mongoose");

const workout_detailsSchema=mongoose.Schema({
    workoutId:{
        type:mongoose.Schema.ObjectId,
        ref:"workout",
        require:true
    },
    duration:{
        type:Number,
        require:true,
        min:1
    },
    caleories_burn:{
        type:Number,
        require:true,
        min:10,
        default:50
    },
    distance:{
        type:Number,
        default:0
    },
    count:{
        type:Number,
        default:0
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        default:null
    }
})

const model=mongoose.model("workout_details",workout_detailsSchema,"workout_details");

module.exports=model;