import { Typography ,Box ,Button ,Dialog ,DialogTitle ,DialogContent ,DialogActions ,TextField} from "@mui/material"
import { WorkoutCards } from "../component/WorkoutCards";
import { useGetApi, usePostApi } from "../hooks/useApi";
import { StatesCards } from "../component/StatesCards";
import { useState, useEffect } from "react";

export const Dashboard=()=>{
    let [defaultdata, changeInput] = useGetApi("/api/workout/default", {user:true});
    let [data,setInput] = usePostApi("/api/workout/",{user:true});
    let date=new Date();
    let nextdate=new Date();
    nextdate.setDate(date.getDate() + 1); 
    let [workoutsDate,setworkoutsDate]= usePostApi("/api/workout/date",{date:date,next_date:nextdate});
    let [caleories,setCaleories]=usePostApi("/api/workout/caleories",{date:date,next_date:nextdate});
    let [addworkout,setAddworkout]=usePostApi("/api/workout/add",null);

    const [open, setOpen] = useState(false); 
    const [customWorkout, setCustomWorkout] = useState({ workout_type:"" ,workout_name: "", duration: "", caleories_burn: "", count: "", distance: "" });
    const [errors, setErrors] = useState({workout_type: false, workout_name: false, duration: false, caleories_burn: false, distance_count: false });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange=(e)=>{
        setCustomWorkout({ ...customWorkout, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
    };

    const handleSubmit=()=> {
        const { workout_type, workout_name, duration, caleories_burn, count, distance } = customWorkout;

        const newErrors = { workout_type: workout_type === '', workout_name: workout_name === '', duration: duration === '', caleories_burn: caleories_burn === '', distance_count: !count && !distance };
        
        setErrors(newErrors);
        if (Object.values(newErrors).some((error) => error)) {
            return;
        }
        setAddworkout(customWorkout)        
    }

    useEffect(()=>{
        if(addworkout && addworkout.message=="data added")
        {
            alert("sucessfully completed one workout");
            setOpen(false)
        // console.log(addworkout)
        setworkoutsDate({date:date,next_date:nextdate});
        setCaleories({date:date,next_date:nextdate});
        setInput({user:true})
        }
    },[addworkout])

    return (
        <>
        <Box sx={{marginTop:"2rem",marginRight:"2rem",marginLeft:"2rem"}}>
            {caleories && caleories.data && <StatesCards data={caleories.data}/>}
            <Typography sx={{color:"gold.main",marginBlock:"1rem"}} variant="h5">Workouts</Typography>
            <Box sx={{display:"flex",gap:"1.5rem",flexWrap:"wrap"}}>
                {defaultdata && defaultdata.data.map((ele,index)=>(
                    <WorkoutCards ele={ele} key={index}/>
                ))}
                {data && data.data.map((ele,index)=>(
                    <WorkoutCards ele={ele} key={index}/>
                ))}
            </Box>
            <Typography sx={{color:"gold.main",marginBlock:"1rem"}} variant="h5">Today's workouts</Typography>
            <Box sx={{display:"flex",gap:"1.5rem",flexWrap:"wrap",paddingBottom:"1rem",alignItems:"center"}}>
                {workoutsDate && workoutsDate.data && workoutsDate.data.map((ele,index)=>(
                    <WorkoutCards ele={ele} key={index}/>
                ))}
            <Button variant="contained" onClick={handleOpen} sx={{width:"10rem",height:"2rem",backgroundColor:"gold.main",color:"primary.main"}}>Add Workout</Button>
            </Box> 
        </Box>
        <Dialog open={open} onClose={handleClose} sx={{"& .MuiDialog-paper": {width: "40%", minWidth: "100px", padding: "1rem"}}}>
                <DialogTitle color="primary">Add Custom Workout</DialogTitle>
                <DialogContent sx={{paddingBlock:0}}>
                    <TextField  margin="dense" label="Workout Type" name="workout_type" fullWidth size="small" sx={{marginBottom: "0.7rem"}} variant="outlined" value={customWorkout.workout_type} onChange={handleInputChange} required error={errors.workout_type} helperText={errors.workout_type && "Workout Type is required"}/>
                    <TextField autoFocus margin="dense" label="Workout Name" name="workout_name" size="small" sx={{marginBottom: "0.7rem"}} fullWidth variant="outlined" value={customWorkout.workout_name} onChange={handleInputChange} required error={errors.workout_name} helperText={errors.workout_name && "Workout Name is required"}/>
                    <TextField  margin="dense" label="Duration (mins)" name="duration" fullWidth size="small" sx={{marginBottom: "0.7rem"}} variant="outlined" value={customWorkout.duration} onChange={handleInputChange} required error={errors.duration} helperText={errors.duration && "Duration is required"}/>
                    <TextField margin="dense" label="Calories Burnt (kcal)" name="caleories_burn" fullWidth size="small" sx={{marginBottom: "0.7rem"}} variant="outlined" value={customWorkout.caleories_burn} onChange={handleInputChange} required error={errors.caleories_burn} helperText={errors.caleories_burn && "Calories Burnt is required"}/>
                    <TextField margin="dense" label="Count (reps)" name="count" fullWidth size="small" sx={{marginBottom: "0.7rem"}} variant="outlined" value={customWorkout.count} onChange={handleInputChange} error={errors.distance_count} />
                    <TextField margin="dense" label="Distance (km)" name="distance" fullWidth size="small" sx={{marginBottom: "0.7rem"}} variant="outlined" value={customWorkout.distance} onChange={handleInputChange}  error={errors.distance_count} helperText={errors.distance_count && "Either Count or Distance must be filled"} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}  sx={{backgroundColor:"primary.main",color:"white.main"}}>Cancel</Button>
                    <Button onClick={handleSubmit}  sx={{backgroundColor:"primary.main",color:"white.main"}}>Submit</Button>
                </DialogActions>
            </Dialog>
            
        </>
    )
}