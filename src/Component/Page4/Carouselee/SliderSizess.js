import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import './SliderSizesse.css';

const stages = [0, 25, 50, 75, 100];
const labels = [
  'Graphic Design',
  'Web Development',
  'Pay-per-click',
  'Event Management',
  'Photo/Video'
];

const gradients = [
  'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(43,43,43,1) 100%)', 
  'linear-gradient(90deg, rgba(43,43,43,1) 0%, rgba(255,255,255,1) 25%, rgba(43,43,43,1) 100%)',
  'linear-gradient(90deg, rgba(43,43,43,1) 0%, rgba(255,255,255,1) 50%, rgba(43,43,43,1) 100%)',
  'linear-gradient(90deg, rgba(43,43,43,1) 0%, rgba(255,255,255,1) 75%, rgba(43,43,43,1) 100%)',
  'linear-gradient(90deg, rgba(43,43,43,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100%)'
];

const GradientSliders = styled(Slider)(({ background }) => ({
  color: 'transparent',
  height: '5px',
  width: '100%', 
  padding: '0 10px',
  background: background, 
  '& .MuiSlider-thumb': {
    backgroundColor: '#2b2b2b',
    border: '3px solid white',
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .MuiSlider-mark': {
    display: 'none', 
  },
  
  '@media (min-width: 2000px) and (max-width: 2250px)': {
    height: '9px',
    '& .MuiSlider-thumb': {
      backgroundColor: '#2b2b2b',
      border: '6px solid white',
    width: 35,
    height: 35,
  }, // Adjust height for medium screens
          },
          '@media (max-width: 850px)': {
    height: 0, // Adjust the height for mobile view
    padding: '2px 0',
    '& .MuiSlider-thumb': {
    backgroundColor: '#2b2b2b',
    border: '5px solid white',
    
  }},
          
  '@media (max-width: 550px)': {
    height: 0, // Adjust the height for mobile view
    padding: '2px 0',
    '& .MuiSlider-thumb': {
    backgroundColor: '#2b2b2b',
    border: '5px solid white',
    
  },
    
    '& .MuiSlider-thumb': {
    backgroundColor: '#2b2b2b',
    border: '3px solid white',
    
  }, // Adjust padding if needed
  },
  
}));

 function SliderLine({ currentValue, onSliderChange }) {
  const handleScroll = (event) => {
    event.preventDefault();
    const deltaX = event.deltaX; 
    const currentIndex = stages.indexOf(currentValue);
    let newIndex = currentIndex;

    if (deltaX > 0) {
      newIndex = (currentIndex + 1) % stages.length;
    } else {
      newIndex = (currentIndex - 1 + stages.length) % stages.length;
    }

    onSliderChange(stages[newIndex]);
  };

  const handleChange = (event, newValue) => {
    onSliderChange(newValue);
  };

  const getLabelPosition = (value) => {
    const percentage = (value - stages[0]) / (stages[stages.length - 1] - stages[0]);
    return `${percentage * 100}%`;
  };

  const currentIndex = stages.indexOf(currentValue);
  const currentGradient = gradients[currentIndex];

  return (
    <div className='scroll-container' style={{ position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,  
          width: '100%',
          position: 'relative',
          '@media (min-width: 1600px) and (max-width: 2000px)': {
            height:40 , 
            width: '130%',// Adjust height for medium screens
          },
          '@media (min-width: 2000px) and (max-width: 2250px)': {
            height:40 , 
            width: '150%',// Adjust height for medium screens
          },
        }}
      >
        <GradientSliders
          orientation="horizontal"
          value={currentValue}
          aria-label="Default"
          step={null}
          marks={stages.map((stage) => ({ value: stage }))}
          onChange={handleChange}
          valueLabelDisplay="off" 
          background={currentGradient}
        />
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`scroll-label ${index === currentIndex ? 'current' : ''}`}
            style={{
              position: 'absolute',
              left: `calc(${getLabelPosition(stage)} - 90px)`,
              top: '0px',
              transform: 'translateY(-100%)',
            }}
          >
            {labels[index]}
          </div>
        ))}
      </Box>
    </div>
  );
}
export default SliderLine