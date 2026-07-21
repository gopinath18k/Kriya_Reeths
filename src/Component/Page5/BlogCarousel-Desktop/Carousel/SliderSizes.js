import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import '../Carousel/SliderSizes.css';

const stages = [100, 75, 50,25,0];

const gradients = [
  'linear-gradient(180deg, rgba(46,45,45,1) 0%, rgba(215,214,214,1) 89%, rgba(255,255,255,1) 97%)', 
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 25%, rgba(255,255,255,1) 97%)', 
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 50%, rgba(240,240,240,1) 100%)', 
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 75%, rgba(240,240,240,1) 100%)', 
  'linear-gradient(180deg, rgba(240,240,240,1) 12%, rgba(43,43,43,1) 94%, rgba(43,43,43,1) 100%)',
];

const getCurrentGradient = (currentValue) => {
  const index = stages.indexOf(currentValue);
  return gradients[index];
};

const GradientSlider = styled(Slider)(({ background }) => ({
  color: 'transparent',
  height: 300,
  width:"6px",
  padding: '10px 0',
  background: background,
  '& .MuiSlider-thumb': {
    backgroundColor: '#FFFFFF',
    border:'solid 3px #2B2B2B'
  },
  '& .MuiSlider-mark': {
    display: 'none', 
  },
  '@media screen and (min-width:2000px) and  (max-width: 2240px)': {
    height: 450, // Adjust the height for mobile view
    padding: ' 0',
    width:'7px',
    '& .MuiSlider-thumb': {
    backgroundColor: '#fff',
    border: '5px solid #000',
    height:'30px',
    width:'30px'
    
  }, // Adjust padding if needed
  },
  '@media screen and (min-width:550px) and  (max-width: 900px)': {
    height: 300,
    width:'4px', // Adjust the height for mobile view
    padding: '0px 0',
     // Adjust padding if needed
  },
  '@media (max-width: 2500px)': {
    // height: '6px',
    padding:'0',
    // '& .MuiSlider-thumb': {
    //   width: 14,
    //   height: 14,
    // },
  }
}));

export default function BlogsSliderSizes({ currentValue, onSliderChange }) {
  const handleScroll = (event) => {
    event.preventDefault();
    const deltaY = event.deltaY;
    const currentIndex = stages.indexOf(currentValue);
    let newIndex = currentIndex;

    if (deltaY > 0) {
      newIndex = (currentIndex + 1) % stages.length;
    } else {
      newIndex = (currentIndex - 1 + stages.length) % stages.length;
    }

    onSliderChange(stages[newIndex]);
  };

  const handleChange = (event, newValue) => {
    onSliderChange(newValue);
  };

  const currentGradient = getCurrentGradient(currentValue);

  return (
    <div className='Blogs-scrollcontainer' onWheel={handleScroll}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 300,
          width: '100%',
        }}
      >
        <GradientSlider
          orientation="vertical"
          value={currentValue}
          aria-label="Default"
          step={null}
          marks={stages.map(stage => ({ value: stage }))}
          onChange={handleChange}
          background={currentGradient}
        />
      </Box>
    </div>
  );
}
