import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import '../Carousel/SliderSizes.css';

const stages = [100,88.88,77.77,66.66,55.55,44.44,33.33,22.22,11.11,0];
const backgroundColors = [
  'linear-gradient(180deg, rgba(43,43,43,1) 0%, rgba(43,43,43,1) 35%, rgba(240,240,240,1) 100%)',
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 33.33%, rgba(240,240,240,1) 100%)', 
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 66.66%, rgba(240,240,240,1) 100%)',
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 66.66%, rgba(43,43,43,1) 100%)', 
  'linear-gradient(180deg, rgba(43,43,43,1) 0%, rgba(43,43,43,1) 35%, rgba(240,240,240,1) 100%)',
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 33.33%, rgba(240,240,240,1) 100%)', 
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 66.66%, rgba(240,240,240,1) 100%)',
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 66.66%, rgba(43,43,43,1) 100%)', 
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 66.66%, rgba(43,43,43,1) 100%)', 
  'linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(43,43,43,1) 66.66%, rgba(43,43,43,1) 100%)',
];

const getCurrentBackground = (currentValue) => {
  const index = stages.indexOf(currentValue);
  return backgroundColors[index];
};

const GradientSliders = styled(Slider)(({ background }) => ({
  color: 'transparent',
  height: 300,
  padding: '10px 0',
  background: background,
  '& .MuiSlider-thumb': {
    backgroundColor: '#fff',
    border: '3px solid #000',
    
  },
  
  '& .MuiSlider-mark': {
    display: 'none', 
  },
  '@media screen and (min-width:1600px) and  (max-width: 2000px)': {
    height: 450, // Adjust the height for mobile view
    padding: '9px 0',
    width:'6px',
    '& .MuiSlider-thumb': {
    backgroundColor: '#fff',
    border: '5px solid #000',
    height:'28px',
    width:'28px'
    
  }, // Adjust padding if needed
  },
  
  '@media screen and (min-width:2000px) and  (max-width: 2240px)': {
    height: 450, // Adjust the height for mobile view
    padding: '9px 0',
    width:'7px',
    '& .MuiSlider-thumb': {
    backgroundColor: '#fff',
    border: '5px solid #000',
    height:'30px',
    width:'30px'
    
  }, // Adjust padding if needed
  },
  
  '@media screen and (min-width:550px) and  (max-width: 900px)': {
    height: 250,
    width:'4px', // Adjust the height for mobile view
    padding: '8px 0',
     // Adjust padding if needed
  },
  
  '@media (max-width: 550px)': {
    height: 180,
    width:'3px', // Adjust the height for mobile view
    padding: '8px 0',
    '& .MuiSlider-thumb': {
    backgroundColor: '#fff',
    border: '3.5px solid #000',
    height:'17px',
    width:'17px'
    
  }, // Adjust padding if needed
  },
}));

 function SliderSizes({ currentValue, onSliderChange }) {
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

  const currentBackground = getCurrentBackground(currentValue);

  return (
    <div className='container' >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 300,
          width: '100%',
          position: 'sticky', // Sticky position
          top: 0, // Stick to the top of the view
          '@media (max-width: 600px)': {
            height: '200px', // Adjust height for mobile
          },
        }}
      >
        <GradientSliders
          orientation="vertical"
          value={currentValue}
          aria-label="Default"
          step={null}
          marks={stages.map(stage => ({ value: stage }))}
          onChange={handleChange}
          background={currentBackground}
        />
      </Box>
    </div>
  );
}
export default SliderSizes



