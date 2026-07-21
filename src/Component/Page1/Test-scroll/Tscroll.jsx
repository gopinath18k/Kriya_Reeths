import React from 'react';
import './Tscroll.css';
import sl1 from "../../../images/sl-1.webp";
import sl2 from "../../../images/sl-2.webp";
import sl3 from "../../../images/sl-3.webp";
import sl4 from "../../../images/sl-4.webp";
import sl5 from "../../../images/sl-5.webp";
import sl6 from "../../../images/sl-6.webp";
import sl7 from "../../../images/sl-7.webp";
import sl8 from "../../../images/sl-8.webp";
import sl9 from "../../../images/sl-9.jpeg";
import sl22 from "../../../images/sl-22.webp";
import sl23 from "../../../images/sl-23.webp";
import sl24 from "../../../images/sl-24.webp";




import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
// import { height } from '@mui/system';
// Define the style for the images in the carousel
const screenWidth = window.innerWidth;
const imageStyle = {
  width: '100%',
  height: '270px',
  borderRadius: '10px',

  ...(screenWidth <= 440 && { height: '130px',width: '100%', }), // Applied if screenWidth is 440px or less
  ...(screenWidth > 440 && screenWidth <= 850 && { height:'250px',width:'100%', }),
  ...(screenWidth > 2000 && screenWidth <= 2250 && { height: '350px' }),  // Applied if screenWidth is between 441px and 768px
  
};


function Tscroll() {
  return (
    <div className="relative flex h-full scroll-cont Tscroll">
      <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden">
        <Splide
          options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
              pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
              pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
              rewind: false, // Rewind to start when the end is reached
              speed: -1,// Scrolling speed
              // Scroll direction
            },
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: 'auto', // Fixed width for each slide
            gap: '8px', // Gap between slides
            drag: false
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
             <SplideSlide>
            <img src={sl22} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
          </SplideSlide>
          <SplideSlide>
            <img src={sl23} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
          </SplideSlide>
          <SplideSlide>
            <img src={sl24} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
          </SplideSlide>
          
          <SplideSlide>
            <img src={sl1} className='sl-img' alt="Poster Brooklyn" style={imageStyle} loading="lazy" />
          </SplideSlide>
          <SplideSlide>
            <img src={sl2} className='sl-img' alt="Poster Macao" style={imageStyle} loading="lazy" />
          </SplideSlide>
          <SplideSlide>
            <img src={sl3} className='sl-img' alt="Poster Navada" style={imageStyle}  loading="lazy"/>
          </SplideSlide>
          <SplideSlide>
            <img src={sl4} className='sl-img' alt="Poster Brooklyn" style={imageStyle} loading="lazy" />
          </SplideSlide>
          <SplideSlide>
            <img src={sl5} className='sl-img' alt="Poster Macao" style={imageStyle}  loading="lazy"/>
          </SplideSlide>
          <SplideSlide>
            <img src={sl6} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy" />
          </SplideSlide>
          <SplideSlide>
            <img src={sl7} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
          </SplideSlide>
          <SplideSlide>
            <img src={sl8} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
          </SplideSlide>
          <SplideSlide>
            <img src={sl9} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
          </SplideSlide>
         
        </Splide>
      </div>
    </div>
  );
}

export default Tscroll;