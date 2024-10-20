import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { usePostApi } from "../hooks/useApi";
import { WorkoutCards } from "../component/WorkoutCards";
import { PieChart } from "@mui/x-charts/PieChart";

export const Tracker=()=>{
  const [date, setDate] = useState("");
  let [workoutsDate,setworkoutsDate]= usePostApi("/api/workout/date",null);
  let [caleoriesDate,setCaleoriesDate]= usePostApi("/api/workout/date/caleories",null);

  const pieChartData = Object.entries(caleoriesDate?.data || {}).map(([workoutType, totalCalories], index) => ({
    id:index,
    label: workoutType, 
    value: totalCalories, 
  }));

  useEffect(() => {
      if(date!="")
      {
          let current_date=new Date(date);
          let nextdate=new Date(date);
          nextdate.setDate(current_date.getDate() + 1); 
          setworkoutsDate({date:current_date,next_date:nextdate});
          setCaleoriesDate({date:current_date,next_date:nextdate});
      }
    }, [date]);


  return(
      <>
      <Box sx={{width:"95%",marginLeft:"5%"}}>
      <Typography sx={{color:"gold.main",marginBlock:"1rem"}} variant="h5">Workouts</Typography>
      <div style={{display:"flex", marginBottom:"3rem"}}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <Box sx={{backgroundColor:"white.main",borderRadius: "10px",width:"20rem"}}>
              <DateCalendar onChange={(e) => setDate(`${e.$M + 1}/${e.$D}/${e.$y}`)}/>
          </Box>
        </LocalizationProvider>
        <div style={{display:"flex",width:"60%",alignItems:"center"}}>
          {pieChartData?.length > 0 && (
              <PieChart series={[{ data: pieChartData,innerRadius: 4,outerRadius: 100, paddingAngle: 5, cornerRadius: 5}]}  width={350} height={300} sx={{'& .MuiChartsLegend-series text': {fill: '#EEEDEB !important'}}}/>
          )}
          </div>
      </div>
        <div style={{display:"flex",flexDirection:"row",width:"100%",gap:"5rem"}}>
              
          {workoutsDate && workoutsDate.data && workoutsDate.data.map((ele,index)=>(
              <WorkoutCards ele={ele} key={index}/>
          ))}
        </div>
              
      </Box>
      </>
  )
}