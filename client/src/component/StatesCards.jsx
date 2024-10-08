import { Typography ,Box} from "@mui/material"

export const StatesCards=({data})=>{
    return(
        <>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
        {Object.keys(data).filter(key => key!='_id').map((key, index) => (
            <Box sx={{borderRadius:5,width:280,height:100,padding:"1rem",display:"flex",flexDirection:"column",gap:"3px",backgroundColor:"secondary.main",marginBottom:"10px"}}>
                <Typography sx={{color:"primary.main",fontWeight:700}} variant="h5">{key}</Typography>
                <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
                    <Typography sx={{color:"primary.main"}} variant="p">{data[key]}</Typography>                    
                    <Typography sx={{color:"primary.main"}} variant="p">{key === "Workouts Done" ? "" : "kcal"}</Typography>                 
                </div>
            </Box>
        ))}
        </div>
        </>
    )
}