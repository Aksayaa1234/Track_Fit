import { Typography ,Box} from "@mui/material"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const WorkoutCards=({ele})=>{
    return(
        <>{ele?
            <Box sx={{borderRadius:5,width:280,height:170,padding:"1rem",display:"flex",flexDirection:"column",gap:"3px",backgroundColor:"primary.light",marginBottom:"10px",boxShadow:"5px 5px 15px #0b0f14","&:hover":{transform:"scale(1.08)"}}}>
                <Typography sx={{color:"gold.main"}}>{ele.workoutId.workout_type}</Typography> 
                <Typography sx={{color:"white.main",fontWeight:700}} variant="h5">{ele.workoutId.workout_name}</Typography>
                <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
                    <AccessAlarmIcon color="white"/>
                    <Typography sx={{color:"white.main"}} variant="p">{ele.duration} mins</Typography>                    
                </div>
                { ele.count ?
                <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
                    <Typography sx={{color:"white.main"}} variant="p">count : </Typography>                    
                    <Typography sx={{color:"white.main"}} variant="p">{ele.count} reps</Typography>                    
                </div>:<></>
                }
                { ele.distance ?
                <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
                    <Typography sx={{color:"white.main"}} variant="p">distance : </Typography>                    
                    <Typography sx={{color:"white.main"}} variant="p">{ele.distance} km</Typography>                    
                </div>:<></>
                }
                <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
                    <Typography sx={{color:"white.main"}} variant="p">caleories : </Typography>                    
                    <Typography sx={{color:"white.main"}} variant="p">{ele.caleories_burn} kcal</Typography>                    
                </div>
            </Box>:<></>}
        </>
    )
}