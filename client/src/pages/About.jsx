import { Typography, keyframes } from '@mui/material';
import Box from '@mui/material/Box';

// Floating animation for the text box
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

export default function About() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },  
                justifyContent: 'center',  
                alignItems: 'center',  
                padding: { xs: '20px', md: '40px' },  
                gap: '5rem',  
            }}
        >

            <Box
                sx={{
                    padding: '20px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(6px)',  
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',  
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',  
                    animation: `${float} 2s ease-in-out infinite`,  
                    maxWidth: '600px',  
                    textAlign: 'center',  
                }}
            >
                <Typography
                    sx={{
                        color: '#fff',  
                        fontFamily: 'monospace, sans-serif',  
                        fontWeight: 700,  
                        fontSize: { xs: '18px', md: '22px' },  
                    }}
                >
                    TrackFit helps you stay fit by customizing workouts and tracking calories. It's easy, effective, and designed for your fitness goals!
                </Typography>
            </Box>

            <Box
                component="img"
                src="../images/about page.svg"
                alt="workout image"
                loading="lazy"
                sx={{
                    width: { xs: '80%', md: '40%' }, 
                    height: 'auto',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                }}
            />
        </Box>
    );
}