import { useState, useEffect } from 'react';
import './pop1.css';
import '../../Service-carousel/esxample.css';
import Poplabe from '../Label-popup/Poplabel';
import Dropdown1 from './drop1/drop1';
import Dropdown2 from './drop2/drop2';
import Dropdown3 from './drop3/drop3';

const RegisterButton2 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    if (showPopup) {
      // Disable scroll on the body
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scroll on the body
      document.body.style.overflow = 'auto';
    }

    // Cleanup on component unmount or when popup closes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopup]);

  return (
    <div>
      <div className='career-but' onClick={togglePopup}>
        Register
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-popup" onClick={togglePopup}>
              &times;
            </span>
            <div className="section-content">
              
              <h2 className='digital-head'>Digital Marketing <br />Training:</h2>
              <Poplabe/>
              <div className='drop-head'>
              <Dropdown1/><Dropdown2/><Dropdown3/>
              </div>
              <div className='cbi-cont'><div className='career-but-in'>Register</div></div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default RegisterButton2;
