import * as React from 'react';
import { Menu, MenuItem} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie'; // Assuming you are using js-cookie for cookie management

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorElUser, setAnchorElUser]=useState(null);
  let navigate=useNavigate();

  useEffect(() => {
  
    const token = Cookies.get('key'); 
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    
    Cookies.remove('key'); 
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
            href="/home"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: { xs: '.2rem', sm: '.3rem' },
              color: 'white.main',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            <Box component="span" sx={{ color: "gold.main" }}>TRACK</Box>FIT
          </Typography>
          <Button component={Link} to="/" color="inherit">
            <Typography
              sx={{
                display: { xs: 'none', sm: 'inline' },
                "&:hover": { color: 'gold.main' },
                fontFamily: 'monospace',
                letterSpacing: '.3rem',
                fontWeight: 700,
                color: "white.main"
              }}>
              Home
            </Typography>
          </Button>
          {isLoggedIn &&
          <div>
          <Button component={Link} to="/dashboard" color="inherit">
            <Typography
              sx={{
                display: { xs: 'none', sm: 'inline' },
                "&:hover": { color: 'gold.main' },
                fontFamily: 'monospace',
                letterSpacing: '.3rem',
                fontWeight: 700,
                color: "white.main"
              }}>
              Dashboard
            </Typography>
          </Button>
          <Button component={Link} to="/tracker" color="inherit">
            <Typography
              sx={{
                display: { xs: 'none', sm: 'inline' },
                "&:hover": { color: 'gold.main' },
                fontFamily: 'monospace',
                letterSpacing: '.3rem',
                fontWeight: 700,
                color: "white.main"
              }}>
              Tracker
            </Typography>
          </Button>
          </div>
          }
          <Button component={Link} to="/about" color="inherit">
            <Typography
              sx={{
                display: { xs: 'none', sm: 'inline' },
                "&:hover": { color: 'gold.main' },
                fontFamily: 'monospace',
                letterSpacing: '.3rem',
                fontWeight: 700,
                color: "white.main"
              }}>
              ABOUT
            </Typography>
          </Button>
          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
            <Avatar onClick={handleOpenUserMenu} sx={{ cursor: 'pointer', bgcolor: 'gold.main' }}>
              A
            </Avatar>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: 'center' }}>Profile</Typography>
              </MenuItem>
              <MenuItem  onClick={handleLogout}>
                <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
              </MenuItem>
            </Menu>
            </Box>
          ) : (
            <Button component={Link} to="/sign-in" color="inherit">
              <Typography
                sx={{
                  "&:hover": { color: 'gold.main' },
                  fontFamily: 'monospace',
                  letterSpacing: '.3rem',
                  fontWeight: 700,
                  color: "white.main"
                }}>
                Login
              </Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
