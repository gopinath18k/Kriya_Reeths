import React, { useEffect } from 'react';
import HorizontalSlider from './Carouselee/examplee'
import Footerel from '../Page2/Lfooter/Lfooter'
import "../Page4/Portfolio.css"
import bg1 from '../../images/bg-text1.svg'

const Portfolioo = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='container-fluid navmain'>
         <div className='ab-section1'>
          <h1 className='head2'>Portfolio</h1>

          <p className='head3-p'>Our portfolio showcases our creative and strategic capabilities through a diverse range of projects. Discover our work in graphic design, web development, digital marketing, event management, and photography/videography. Each project reflects our commitment to innovation, creativity, and client satisfaction. </p>
        </div>

       
        <div className="ab-section4">
          <div className='bg1-cont'>
            <img className='bg-txt11' src={bg1} alt="" />
          </div>
          
          <div className='creativ-head'>
            <h1 >Our Visual Gallery</h1>
            <p>Witness the magic of our creativity across diverse platforms. We create impactful designs, effective marketing campaigns, and unforgettable events. 
            </p>
          </div>
          <div className='tslider'>
          <HorizontalSlider/>
          
          </div>
        </div>
    </div>
  )
}

export default Portfolioo