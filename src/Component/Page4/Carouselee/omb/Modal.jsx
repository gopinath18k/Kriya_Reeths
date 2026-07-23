import { useState } from 'react';
import ModalCarousel from './Omb_cr';
import './Modal.css';
import cr1 from '../../../../images/sl-1.webp';
import cr2 from '../../../../images/sl-2.webp';
import cr3 from '../../../../images/sl-3.webp';

const Appe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    cr1,
    cr2,
    cr3,
    // Add more images as needed
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {/* Default image */}
      <img
        className='default-image'
        
        src={cr1}
        alt="Default"
        onClick={handleOpenModal}
        style={{ cursor: 'pointer' }}
      />
      
      {/* Modal with carousel */}
      <ModalCarousel 
        images={images}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Appe;
