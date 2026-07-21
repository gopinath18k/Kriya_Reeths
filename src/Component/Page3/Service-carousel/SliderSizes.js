import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import '../Service-carousel/SsliderSizes.css';


const stages = [100, 80, 60, 40, 20, 0];
const labels = ["1", "2", "3", "4", "5", "6"];

const gradients = [
  'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(232,232,232,1) 9%, rgba(46,45,45,1) 100%)', 
  'linear-gradient(180deg, rgba(46,45,45,1) 0%, rgba(255,255,255,1) 20%, rgba(46,45,45,1) 100%)', 
  'linear-gradient(180deg, rgba(46,45,45,1) 0%, rgba(232,232,232,1) 40%, rgba(46,45,45,1) 100%)', 
  'linear-gradient(180deg, rgba(46,45,45,1) 0%, rgba(255,255,255,1) 60%, rgba(46,45,45,1) 100%)', 
  'linear-gradient(180deg, rgba(46,45,45,1) 0%, rgba(255,255,255,1) 80%, rgba(46,45,45,1) 100%)', 
  'linear-gradient(180deg, rgba(46,45,45,1) 0%, rgba(215,214,214,1) 92%, rgba(255,255,255,1) 97%)', 
];

const getCurrentGradient = (currentValue) => {
  const index = stages.indexOf(currentValue);
  return gradients[index];
};

const GradientSlider = styled(Slider)(({ background }) => ({
  color: 'transparent',
  height: 300,
  padding: '10px 0',
  background: background,
  '& .MuiSlider-thumb': {
    backgroundColor: '#2B2B2B',
    border:'solid 3px white'
  }
  ,
  '& .MuiSlider-mark': {
    display: 'none', 
  },
  '@media screen and (min-width:2000px) and  (max-width: 2240px)': {
    height: 450, // Adjust the height for mobile view
    padding: '9px 0',
    width:'7px',
    '& .MuiSlider-thumb': {
    backgroundColor: '#2B2B2B',
    border: '5px solid white',
    height:'30px',
    width:'30px'
    
  }, // Adjust padding if needed
  },
  '@media screen and (min-width:1600px) and  (max-width: 2000px)': {
    height: 370, // Adjust the height for mobile view
    padding: '9px 0',
    width:'6px',
    '& .MuiSlider-thumb': {
    backgroundColor: '#2B2B2B',
    border: '5px solid white',
    height:'28px',
    width:'28px'
    
  }, // Adjust padding if needed
  },
  '@media screen and (min-width:550px) and  (max-width: 900px)': {
    height: 300,
    width:'4px', // Adjust the height for mobile view
    padding: '0px 0',
     // Adjust padding if needed
  },
  '@media (max-width: 550px)': {
    height: 200, // Adjust the height for mobile view
    padding: '8px 0',
    '& .MuiSlider-thumb': {
    backgroundColor: '#2B2B2B',
    border: '3px solid white',
    
  }, // Adjust padding if needed
  },
}));

function ValueLabelComponent(props) {
  const { children, value, currentValue } = props;
 
  const isCurrentValue = value === currentValue;
  return (
    <span className={`MuiSlider-valueLabel ${isCurrentValue ? '' : 'hidden'}`}>
      {isCurrentValue && <span className="label-white ">{labels[stages.indexOf(value)]}</span>}
      {children}
    </span>
  );
}

export default function SliderSizes({ currentValue, onSliderChange }) {
  const handleScroll = (event) => {
    event.preventDefault(); 
  };

  const handleChange = (event, newValue) => {
    onSliderChange(newValue);
  };

  const currentGradient = getCurrentGradient(currentValue);

  const marks = stages.map(stage => ({
    value: stage,
    label: stage === currentValue ? <span className="label-white">{labels[stages.indexOf(stage)]}</span> : null,
  }));

  return (
    <div className='Vertical-scrollcontainer' onWheel={handleScroll}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 300,
          width: '100%',
          marginLeft:"20px",
        }}
      >
        <GradientSlider
          orientation="vertical"
          value={currentValue}
          aria-label="Default"
          step={null}
          marks={marks}
          onChange={handleChange}
          background={currentGradient}
          // valueLabelDisplay="on"
          ValueLabelComponent={(props) => <ValueLabelComponent {...props} currentValue={currentValue} />}
        />
      </Box>
    </div>
  );
}