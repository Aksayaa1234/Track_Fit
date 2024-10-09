const workoutModel=require("../database/models/workout")
const workout_detailsModel=require("../database/models/workout_details")
const workoutlogsModel=require("../database/models/workoutlogs")
const mongoose=require("mongoose");

const addWorkoutDefault=async(req,res)=>{
    try{
        let data=await workoutModel.findOne({workout_name:req.body.workout_name});
        let workoutId;
        if(!data)
        {
            let d1=new workoutModel({workout_name:req.body.workout_name,workout_type:req.body.workout_type});
            let workoutData=await d1.save();
            workoutId= workoutData._id;
        }
        else{
            workoutId=data._id;
        }
        let filter={"workoutId":workoutId,"duration":parseInt(req.body.duration),"caleories_burn":parseInt(req.body.caleories_burn)};
        if(req.body.count)
        {
            filter["count"]=parseInt(req.body.count);
        }
        else
        {
            filter["distance"]=parseInt(req.body.distance);
        }
        // console.log(filter)
        let details= await workout_detailsModel.findOne(filter);
        if(!details)
        {
            let workoutdata=new workout_detailsModel(filter);
            let data=await workoutdata.save();
            res.status(200);
            res.json({message:"data added"});
            return;
        }
        res.status(400);
        res.json({message:"already added"});
        return;        
    }
    catch(err){
        res.status(500);
        res.json({message:"server error"});
    }
}

const addWorkout=async(req,res)=>{
    try{
        let data=await workoutModel.findOne({workout_name:req.body.workout_name});
        let workoutId;
        if(!data)
        {
            let d1=new workoutModel({workout_name:req.body.workout_name,workout_type:req.body.workout_type});
            let workoutData=await d1.save();
            workoutId= workoutData._id;
        }
        else{
            workoutId=data._id;
        }
        let filter={"workoutId":workoutId,"duration":parseInt(req.body.duration),"caleories_burn":parseInt(req.body.caleories_burn)};
        if(req.body.count)
        {
            filter["count"]=parseInt(req.body.count);
        }
        else
        {
            filter["distance"]=parseInt(req.body.distance);
        }
        filter["$or"]=[ { userId:new mongoose.Types.ObjectId(req.userId)}, { userId: null } ];
        //console.log(filter);
        let details= await workout_detailsModel.findOne(filter);
        let workout_detailsId;
        if(!details)
        {
            let workoutdata=new workout_detailsModel(filter);
            let data=await workoutdata.save();
            workout_detailsId=data._id;
        }
        else{
            workout_detailsId=details._id;
        }
        let workoutlogs=new workoutlogsModel({userId:req.userId,workout_detailsId:workout_detailsId});
        await workoutlogs.save();
        res.status(200);
        res.json({message:"data added"});
        return;
    }
    catch(err){
        //console.log(err);
        res.status(500);
        res.json({message:"server error"});
    }
}


const workoutDisplay=async(req,res)=>{
    try{
        let filter={userId:new mongoose.Types.ObjectId(req.userId)};
        let data= await workout_detailsModel.find(filter).populate({path:"workoutId",select:"workout_type workout_name"});
        res.status(200);
        res.json({message:"data",data:data});
        return;
    }
    catch(err){
        //console.log(err);
        res.status(500);
        res.json({message:"server error"});
    }
}

const workoutDisplayDefault=async(req,res)=>{
    try{
        let filter={userId:null};
        let data= await workout_detailsModel.find(filter).populate({path:"workoutId",select:"workout_type workout_name"});
        res.status(200);
        res.json({message:"data",data:data});
        return;
    }
    catch(err){
        res.status(500);
        res.json({message:"server error"});
    }
}


module.exports={addWorkout,workoutDisplay,workoutDisplayDefault,addWorkoutDefault};