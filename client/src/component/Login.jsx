import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SignIn() {
  return (
    <div style={{ "display" : "flex", "alignItems" : "center",  "marginTop": "6rem", "marginLeft" : "5%"}}>
      <img
        src="../images/signin image.svg"
        alt="workout image"
        loading="lazy"
        width="50%"
      />
      <div style={{"width" : "50%"}}>
        <Box component="form" action="" style={{"display": "flex", "flexDirection" : "column", "gap" : "2rem", "justifyContent" : "center", "alignItems" : "center"}}>
          <Typography variant='h5' sx={{color : "white.main"}}>LOGIN</Typography>
          <TextField id="email" label="Email" variant="filled" type='email' required
            sx={{
              backgroundColor: "white.main",
              width : "50%"
          }} />
          <TextField id="password" label="Password" variant="filled" type='password' required
            sx={{
              backgroundColor: "white.main",
              width: "50%"
          }} />
          <Button 
            component="a" 
            href="/home"
            sx={{
              borderRadius: '12px',  // Make the button more rounded
              backgroundColor: "white.main",
              padding: "0.5rem",
              textTransform: "none",  // Disable the uppercase text
            }}
          >
            <Typography 
              sx={{
                fontFamily: 'monospace',
                letterSpacing: '.3rem',
                fontWeight: 800,  // Increase the font weight
              }}>
              Login
            </Typography>
          </Button>
        </Box>
      </div>
    </div>
  )
}
