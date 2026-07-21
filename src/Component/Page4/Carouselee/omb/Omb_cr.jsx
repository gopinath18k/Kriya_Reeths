import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Modal.css';

const ModalCarousel = ({ images, isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <button onClick={onClose} className="close-btn">X</button>
          <Swiper navigation>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img className='imgee' src={image} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
  );
};

export default ModalCarousel;
