import React from 'react';
import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  const stringToType = "PUSH TRACK TRIUMPH";
  const splitString = stringToType.split(" "); // Split string by spaces

  return (
    <Box 
      sx={{
        marginLeft: { xs: '1rem', sm: '2rem', md: '6rem' }, // Responsive margins
        display: 'flex',
        flexDirection: 'column', // Ensures words are displayed in a column
        justifyContent: 'center',
        alignItems: 'flex-start', // Align to start for responsiveness
        // height: '100vh', // Ensure the container covers full height
      }}
    >
      
      <Typography
        variant="h1"
        component="div"
        sx={{
          color: 'white',
          textAlign: "start",
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '6rem' }, // Responsive font sizes
          fontFamily: 'monospace',
          letterSpacing: '.1rem'
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 150,
            deleteSpeed: 50,
            cursor: "",
          }}
          onInit={(typewriter) => {
              // Start typing the words, loop, and delete
              typewriter
                .typeString(`<span style="color: white;">${splitString[0]}</span>`)
                // .pauseFor(1000)
                .start() // Starts the typewriter effect with the same 
            }}
            
        />
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 250,
            deleteSpeed: 50,
            cursor : ""
        }}
        onInit={(typewriter) => {
            // Start typing the words, loop, and delete
            typewriter
            // .pauseFor(500)
            .typeString(`<span style="color: #f0c451;">${splitString[1]}</span>`)
            .start(); // Starts the typewriter effect with the same pattern
        }}
        />
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 120,
            deleteSpeed: 50,
            pauseFor: 1000,
            cursor : ""
          }}
          onInit={(typewriter) => {
              // Start typing the words, loop, and delete
              typewriter
                // .pauseFor(1000)
                .typeString(`<span style="color: white;">${splitString[2]}</span>`)
                .start(); // Starts the typewriter effect with the same pattern
            }}
        />
      </Typography>
    </Box>
  );
};

export default TypewriterComponent;