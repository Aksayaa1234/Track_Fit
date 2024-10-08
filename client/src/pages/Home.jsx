import TypewriterComponent from "../component/TypewriterComponent"
import { Box } from '@mui/material';

export default function Home() {
    return (
        <Box component="div" style={{ "display" : "flex", "alignItems" : "center",  "marginTop": "6rem", "marginLeft" : "5%"}}
        sx={{"flexDirection" : {xs : "column", md : "row"}, "gap" : {xs : "3rem"}}}>
            <img
            src="../images/bg.svg"
            alt="workout image"
            loading="lazy"
            width="50%"
            />
            <div>
            <TypewriterComponent/>
            </div>
        </Box>
    )
}