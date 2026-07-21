import React from 'react';
import './Slides.css';
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


const Slidesnew = () => {
  const images = [sl22, sl23, sl24, sl1, sl2, sl3, sl4, sl5, sl6, sl7, sl8, sl9, sl1, sl2, sl3, sl4, sl5, sl6, sl7, sl8, sl9,sl1, sl2, sl3, sl4, sl5, sl6, sl7, sl8, sl9, ];
  
  return (
    <div className="center">
      <div className="slider">
        <div className="items">
          {images.map((src, index) => (
            <img key={index} src={src} className="item" alt={`Slide ${index + 1}`} />
          ))}
          {/* Duplicate images for continuous loop */}
          {images.map((src, index) => (
            <img key={index + images.length} src={src} className="item" alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slidesnew;
