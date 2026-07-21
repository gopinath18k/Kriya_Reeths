import React, { useState } from 'react';
import './Gallery.css'; // Import your CSS file here

// Importing images
import r1 from '../../images/rr-42.jpg';
import r2 from '../../images/rr-2.webp';
import r3 from '../../images/rr-3.webp';
import r4 from '../../images/rr-4.webp';
import r5 from '../../images/rr-5.webp';
import r6 from '../../images/rr-6.png';
import r7 from '../../images/rr-7.png';
import r8 from '../../images/rr-8.webp';
import r9 from '../../images/rr-59.webp';
import r10 from '../../images/rr-52.jpg';
import r11 from '../../images/rr-60.webp';
import r12 from '../../images/rr-41.jpg';
import r13 from '../../images/rr-57.jpg';
import r14 from '../../images/rr-30.webp';
import r15 from '../../images/rr-33.webp';
import r16 from '../../images/rr-20.webp';
import r17 from '../../images/rr-21.webp';
import r18 from '../../images/rr-22.webp';
import r19 from '../../images/rr-23.webp';
import r20 from '../../images/rr-51.webp';
import r21 from '../../images/rr-61.webp';
import r22 from '../../images/rr64.jpg';
import r23 from '../../images/rr-40.jpg';
import r24 from '../../images/rr-61.webp';
import r25 from '../../images/rr-67.jpg';
import r26 from '../../images/rr-68.webp';
import r27 from '../../images/rr-68.webp';
import r29 from '../../images/rr-65.webp';
import r30 from '../../images/rr-36.jpg';
import prev from '../../images/prev.png';
import next from '../../images/next.png';

// Define the image array
const images = [
  r1, r2, r3, r4, r5, r6, r7, r8, r9, r10,
  r11, r12, r13, r14, r15, r16, r17, r18, r19, r20,
  r21, r22, r23, r24, r25, r26, r27, r29, r30
];

const Gallery = () => {
  // State to manage the currently viewed image in the modal
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Handler to open the modal with the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
  };

  // Handler to close the modal
  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  // Handler to show the previous image
  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Handler to show the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container-fluid gal-container" id="main-content">
      <div className="row gal-row">
        <div className="column gal-column">
          <div className='main1 mt-5 mb-5 p-0 p-sm-3' data-aos="fade-up" data-aos-duration="2000">
            <h2 className='gal-h2'>Showcase</h2>
            <p className='gallery-p'>Our gallery showcases stunning visuals of the transformation of our spaces for weddings, corporate events, and a variety of other occasions.</p>
          </div>
          <img src={r4} data-aos="fade-right" data-aos-duration="2000" alt="r4" onClick={() => openModal(3)} />
          <img src={r7} data-aos="fade-right" data-aos-duration="2000" alt="r7" onClick={() => openModal(6)} />
          <img src={r2} data-aos="fade-right" data-aos-duration="2000" alt="r2" onClick={() => openModal(1)} />
          <img src={r15} data-aos="fade-right" data-aos-duration="2000" alt="r2" onClick={() => openModal(14)} />
          <img src={r14} data-aos="fade-right" data-aos-duration="2000" alt="pexels-2" onClick={() => openModal(13)} />
          <img src={r16} data-aos="fade-right" data-aos-duration="2000" alt="pexels-2" onClick={() => openModal(15)} />
          <img src={r19} data-aos="fade-right" data-aos-duration="2000" alt="pexels-2" onClick={() => openModal(18)} />
          <img src={r24} data-aos="fade-right" data-aos-duration="2000" alt="pexels-2" onClick={() => openModal(23)} />
          <img src={r25} data-aos="fade-right" data-aos-duration="2000" alt="pexels-2" onClick={() => openModal(24)} />
        </div>
        <div className="column gal-column">
          <img src={r1} data-aos="fade-up" data-aos-duration="2000" alt="r1" onClick={() => openModal(0)} />
          <img src={r5} data-aos="fade-up" data-aos-duration="2000" alt="r5" onClick={() => openModal(4)} />
          <img src={r8} data-aos="fade-up" data-aos-duration="2000" alt="r8" onClick={() => openModal(7)} />
          <img src={r9} data-aos="fade-up" data-aos-duration="2000" alt="pexels-3" onClick={() => openModal(8)} />
          <img src={r13} data-aos="fade-up" data-aos-duration="2000" alt="pexels-3" onClick={() => openModal(12)} />
          <img src={r17} data-aos="fade-up" data-aos-duration="2000" alt="pexels-3" onClick={() => openModal(16)} />
          <img src={r23} data-aos="fade-up" data-aos-duration="2000" alt="pexels-3" onClick={() => openModal(22)} />
          <img src={r30} data-aos="fade-up" data-aos-duration="2000" alt="pexels-3" onClick={() => openModal(28)} />
        </div>
        <div className="column gal-column">
          <img src={r3} data-aos="fade-left" data-aos-duration="2000" alt="r3" onClick={() => openModal(2)} />
          <img src={r6} data-aos="fade-left" data-aos-duration="2000" alt="r6" onClick={() => openModal(5)} />
          <img src={r10} data-aos="fade-left" data-aos-duration="2000" alt="pexels-4" onClick={() => openModal(9)} />
          <img src={r11} data-aos="fade-left" data-aos-duration="2000" alt="pexels-5" onClick={() => openModal(10)} />
          <img src={r12} data-aos="fade-left" data-aos-duration="2000" alt="pexels-6" onClick={() => openModal(11)} />
          <img src={r18} data-aos="fade-left" data-aos-duration="2000" alt="pexels-6" onClick={() => openModal(17)} />
          <img src={r20} data-aos="fade-left" data-aos-duration="2000" alt="pexels-6" onClick={() => openModal(19)} />
          <img src={r21} data-aos="fade-left" data-aos-duration="2000" alt="pexels-6" onClick={() => openModal(20)} />
          <img src={r22} data-aos="fade-left" data-aos-duration="2000" alt="pexels-6" onClick={() => openModal(21)} />
          <img src={r27} data-aos="fade-left" data-aos-duration="2000" alt="pexels-6" onClick={() => openModal(26)} />
          <img src={r29} data-aos="fade-left" data-aos-duration="2000" alt="pexels-6" onClick={() => openModal(28)} />
        </div>
      </div>

      {currentImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <span className="gal-close" onClick={closeModal}>&times;</span>
          <img
            className="modal-content"
            src={images[currentImageIndex]}
            alt={`modal-img-${currentImageIndex}`}
          />
          <a className="prev" onClick={(e) => { e.stopPropagation(); showPrevImage(); }}><img className='prv' src={prev} alt="previous"/></a>
          <a className="next" onClick={(e) => { e.stopPropagation(); showNextImage(); }}><img className='nxt' src={next} alt="next"/></a>
        </div>
      )}
    </div>
  );
};

export default Gallery;