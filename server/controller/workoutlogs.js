const workout_detailsModel=require("../database/models/workout_details")
const workoutlogsModel=require("../database/models/workoutlogs")
const mongoose=require("mongoose");

const workoutDisplayDate=async(req,res)=>{
    try{
        let specificDate=new Date(req.body.date );
        let nextDay=new Date(req.body.next_date );
        specificDate.setHours(0, 0, 0, 0);
        nextDay.setHours(0, 0, 0, 0);
        let data= await workoutlogsModel.find({userId:new mongoose.Types.ObjectId(req.userId),createdAt: { $gte: specificDate, $lt: nextDay}},{workout_detailsId:1,_id:0})
       
        if(data.length==0)
        {
            res.status(400);
            res.json({message:"No  workouts done"});
            return;
        }
        let ids=[]
        for(i=0;i<data.length;i++)
        {
            ids.push(data[i].workout_detailsId);
        }
        //finding the details of unique workouts
        // and store it to the corresponding  workout also duplicate. in this case duplicate is also seen
        let uniqueWorkouts= await workout_detailsModel.find({_id:{$in:ids}}).populate({path:"workoutId",select:"workout_type workout_name"});   
        let workouts = ids.map(id => uniqueWorkouts.find(workout => workout._id.toString() === id.toString()));
        res.status(200);
        res.json({message:"data",data:workouts});
        return;
    }
    catch(err){
        
        res.status(500);
        res.json({message:"server error"});
    }
}

const caleoriesChart= async(req,res)=>{
    try{
        let specificDate=new Date(req.body.date );
        let nextDay=new Date(req.body.next_date );
        specificDate.setHours(0, 0, 0, 0);
        nextDay.setHours(0, 0, 0, 0);
        let data= await workoutlogsModel.find({userId:new mongoose.Types.ObjectId(req.userId),createdAt: { $gte: specificDate, $lt: nextDay}},{workout_detailsId:1,_id:0})

        if(data.length==0)
        {
            res.status(400);
            res.json({message:"No  workouts done"});
            return;
        }
        let ids=[]
        for(i=0;i<data.length;i++)
        {
            ids.push(data[i].workout_detailsId);
        }
        let uniqueWorkouts= await workout_detailsModel.find({_id:{$in:ids}}).populate({path:"workoutId",select:"workout_type workout_name"});   
        let workoutSummary={};
        let workouts = ids.map(id => uniqueWorkouts.find(workout => workout._id.toString() === id.toString()));
        for(let i=0;i<workouts.length;i++)
        {
            let workoutType=workouts[i].workoutId.workout_type;
            let caleories=workouts[i].caleories_burn;
            if(workoutSummary[workoutType])
                workoutSummary[workoutType]+=caleories;
            else
                workoutSummary[workoutType]=caleories;
        }
        res.status(200);
        res.json({message:"data",data:workoutSummary});
        return;
    }
    catch(err){   
        //console.log(err)
        res.status(500);
        res.json({message:"server error"});
    }
}

const totalCaleories=async(req,res)=>{
    try{
        let specificDate=new Date(req.body.date );
        let nextDay=new Date(req.body.next_date );
        specificDate.setHours(0, 0, 0, 0);
        nextDay.setHours(0, 0, 0, 0);
        let data= await workoutlogsModel.find({userId:new mongoose.Types.ObjectId(req.userId),createdAt: { $gte: specificDate, $lt: nextDay}},{workout_detailsId:1,_id:0})
        
        if(data.length==0)
        {
            res.status(400);
            res.json({message:"No  workouts done",data:{ "Total Calories Burnt": 0, "Avg Calories Burnt":0, "Workouts Done":0}});
            return;
        }
        let ids=[]
        let workouts=[]
        let totalCalories = 0;
        let workoutsDone = 0;
        
        for(let i=0;i<data.length;i++)
        {
            ids.push(data[i].workout_detailsId);
            let res=await workout_detailsModel.findById(data[i].workout_detailsId)
            totalCalories += res?res.caleories_burn:0; 
            workoutsDone++; 
            //console.log(totalCalories,i);
        }
        //let workoutDetails = await workout_detailsModel.find({_id: {$in: ids.map(id =>new mongoose.Types.ObjectId(id))}});
        const avgCalories = workoutsDone > 0 ?(totalCalories / workoutsDone).toFixed(2): 0;
        let result = { "Total Calories Burnt": totalCalories, "Avg Calories Burnt": avgCalories, "Workouts Done": workoutsDone};       
        res.status(200);
        res.json({message:"data",data:result});
        return;
    }
    catch(err){
        
        res.status(500);
        res.json({message:"server error"});
    }
}

module.exports={workoutDisplayDate,totalCaleories,caleoriesChart};