import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { Box } from "@mui/material";

export const Tracker=()=>{
    return(
        <>
        <Box sx={{margin:"1.5rem"}}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Box sx={{backgroundColor:"white.main",borderRadius: "10px",width:"20rem"}}>
                <DateCalendar/>
            </Box>
          </LocalizationProvider>
          </Box>
        </>
    )
}