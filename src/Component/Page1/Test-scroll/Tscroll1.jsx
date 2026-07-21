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
import sl10 from "../../../images/sl-10.jpeg";
import sl11 from "../../../images/sl-11.jpeg";
import sl12 from "../../../images/sl-12.jpeg";
import sl13 from "../../../images/sl-13.jpeg";
import sl14 from "../../../images/sl-14.jpeg";
import sl15 from "../../../images/sl-15.jpeg";
import sl16 from "../../../images/sl-16.jpeg";
import sl17 from "../../../images/sl-17.jpeg";
import sl18 from "../../../images/sl-18.webp";
import sl19 from "../../../images/sl-19.webp";
import sl20 from "../../../images/sl-20.webp";
import sl21 from "../../../images/sl-21.webp";



import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { height } from '@mui/system';
// Define the style for the images in the carousel
const screenWidth = window.innerWidth;
const imageStyle = {
    width: '100%',
    height: '270px',
    borderRadius: '10px',
    border: '1px solid #FFFFFF33',
    objectFit: 'cover', // Ensures the image covers the container without stretching
    objectPosition: 'center', // Centers the image within the container
  
    ...(screenWidth <= 440 && { height: '130px' }), // Applied if screenWidth is 440px or less
    ...(screenWidth > 440 && screenWidth <= 768 && { height: '200px' }), // Applied if screenWidth is between 441px and 768px
    ...(screenWidth > 2000 && screenWidth <= 2250 && { height: '350px' }), // Applied if screenWidth is between 2000px and 2250px
  };

function Tscroll1() {
    return (
        <div className="relative flex h-full Tscroll">
            <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden">
                <Splide
                    options={{
                        type: "loop", // Loop back to the beginning when reaching the end
                        autoScroll: {
                            pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
                            pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                            rewind: false, // Rewind to start when the end is reached
                            speed: 1 ,// Scrolling speed
                            direction: 'forward',
                            // Scroll direction
                        },
                        arrows: false, // Hide navigation arrows
                        pagination: false, // Hide pagination dots
                        fixedWidth: 'auto', // Fixed width for each slide
                        gap: '8px', // Gap between slides
                        drag:false 
                    }}
                    extensions={{ AutoScroll }} // Use the AutoScroll extension
                >   
                    <SplideSlide>
                        <img src={sl18} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={sl19} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={sl20} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={sl21} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    
                    <SplideSlide>
                        <img src={sl10} className='sl-img' alt="Poster Brooklyn" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={sl11} className='sl-img' alt="Poster Macao" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={sl12} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={sl13} className='sl-img' alt="Poster Brooklyn" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={sl14} className='sl-img' alt="Poster Macao" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={sl15} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={sl16} className='sl-img' alt="Poster Navada" style={imageStyle} loading="lazy"/>
                    </SplideSlide>
                    
                </Splide>
            </div>
        </div>
    );
}

export default Tscroll1;