import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FitnessCenterIcon />
            </IconButton>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="#Home"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white.main',
                textDecoration: 'none',
                flexGrow: 1
            }}
            >
            TRACKFIT
            </Typography>
            <Button href="#" underline="hover" color='inherit'>
                Home
            </Button>
            <Button 
            sx={{
                "&:hover": {textDecorationStyle:"solid"}
            }}
            color="white.main">
                Login
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}