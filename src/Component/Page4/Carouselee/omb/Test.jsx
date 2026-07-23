import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const FullscreenImageCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: 'path/to/image1.jpg', alt: 'Image 1' },
    { src: 'path/to/image2.jpg', alt: 'Image 2' },
    { src: 'path/to/image3.jpg', alt: 'Image 3' },
    // Add more images here
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Lock the page scroll
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Unlock the page scroll
  };

  const gotoPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const gotoNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      {/* Trigger Image */}
      <img
        src="path/to/trigger-image.jpg" // Replace with your trigger image
        alt="Trigger Image"
        onClick={() => openLightbox(0)} // Open lightbox with the first image
        className="pay-per-img2"
      />

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={images[currentIndex].src}
          nextSrc={images[(currentIndex + 1) % images.length].src}
          prevSrc={images[(currentIndex - 1 + images.length) % images.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={gotoPrevious}
          onMoveNextRequest={gotoNext}
        />
      )}
    </div>
  );
};

export default FullscreenImageCarousel;
