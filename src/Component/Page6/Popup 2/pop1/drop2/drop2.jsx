import React, { useState, useEffect } from 'react';
import './pop2.css';
import '../../Service-carousel/esxample.css';
import '../Label-popup/Poplabel.css';

const RegisterButton2 = () => {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [inputValueName, setInputValueName] = useState(''); 

  const [isFocusedInst, setIsFocusedInst] = useState(false);
  const [inputInstName, setInputInstName] = useState('');

  const [isFocusedNumber, setIsFocusedNumber] = useState(false);
  const [inputValueNumber, setInputValueNumber] = useState('');

  const [isFocusedMessage, setIsFocusedMessage] = useState(false);
  const [inputValueMessage, setInputValueMessage] = useState('');

  const handleFocusName = () => setIsFocusedName(true);
  const handleBlurName = () => {
    if (inputValueName === '') setIsFocusedName(false);
  };
  const handleChangeName = (e) => setInputValueName(e.target.value);

  const handleFocusNumber = () => setIsFocusedNumber(true);
  const handleBlurNumber = () => {
    if (inputValueNumber === '') setIsFocusedNumber(false);
  };
  const handleChangeNumber = (e) => setInputValueNumber(e.target.value);

  const handleFocusMessage = () => setIsFocusedMessage(true);
  const handleBlurMessage = () => {
    if (inputValueMessage === '') setIsFocusedMessage(false);
  };
  const handleChangeMessage = (e) => setInputValueMessage(e.target.value);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Separate states for each dropdown
  const [isActiveDropdown1, setIsActiveDropdown1] = useState(false);
  const [isActiveDropdown2, setIsActiveDropdown2] = useState(false);
  const [isActiveDropdown3, setIsActiveDropdown3] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('Mode of Training');
  const [selectedOption2, setSelectedOption2] = useState('Select Internship');
  const [selectedOption3, setSelectedOption3] = useState('Year of Study');

  const options1 = ['Yes', 'No'];
  const options2 = [
    'Graphic Design Intern',
    'Web Development Intern',
    'Business Development Intern',
    'Digital Marketing Intern',
  ];

  const toggleDropdown1 = () => {
    setIsActiveDropdown1(!isActiveDropdown1);
    setIsActiveDropdown2(false); // Close the second dropdown if it's open
    setIsActiveDropdown3(false); // Close the third dropdown if it's open
  };

  const toggleDropdown2 = () => {
    setIsActiveDropdown2(!isActiveDropdown2);
    setIsActiveDropdown1(false); // Close the first dropdown if it's open
    setIsActiveDropdown3(false); // Close the third dropdown if it's open
  };
  
  const toggleDropdown3 = () => {
    setIsActiveDropdown3(!isActiveDropdown3);
    setIsActiveDropdown1(false); // Close the first dropdown if it's open
    setIsActiveDropdown2(false); // Close the second dropdown if it's open
  };

  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
    setIsActiveDropdown1(false);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsActiveDropdown2(false);
  };
  const handleOptionClick3 = (option) => {
    setSelectedOption3(option);
    setIsActiveDropdown3(false);
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
        <div className="overlay-container">
          <div className="popup-box">
            <span className="close-button" onClick={togglePopup}>
              &times;
            </span>
            <div className="content-section">
              <h2 className='title-text'>Internship <br />opportunities:</h2>
              <div className='input-container'>
                <div className='input-group'>
                  <div className={`input-wrapper ${isFocusedName || inputValueName ? 'input-focused' : ''}`}>
                    <label className="input-label">Full Name</label>
                    <input
                      type="text"
                      value={inputValueName}
                      onFocus={handleFocusName}
                      onBlur={handleBlurName}
                      onChange={handleChangeName}
                    />
                    <div className='underline'></div>
                  </div>
                  <div className={`input-wrapper ${isFocusedNumber || inputValueNumber ? 'input-focused' : ''}`}>
                    <label className="input-label">Mobile Number</label>
                    <input
                      type="text"
                      value={inputValueNumber}
                      onFocus={handleFocusNumber}
                      onBlur={handleBlurNumber}
                      onChange={handleChangeNumber}
                    />
                    <div className='underline'></div>
                  </div>
                </div>

                <div className='single-input'>
                  <div className={`input-wrapper ${isFocusedMessage || inputValueMessage ? 'input-focused' : ''}`}>
                    <label className="input-label">Email Address</label>
                    <input
                      type="text"
                      value={inputValueMessage}
                      onFocus={handleFocusMessage}
                      onBlur={handleBlurMessage}
                      onChange={handleChangeMessage}
                    />
                    <div className='underline-long'></div>
                  </div>
                </div>
              </div>

              <div className='dropdown-container'>
                <div className={`select-container ${isActiveDropdown1 ? 'active' : ''}`}>
                  <div className="select" onClick={toggleDropdown1}>
                    <input type="text" id="input" value={selectedOption1} readOnly />
                  </div>
                  <div className={`option-container ${isActiveDropdown1 ? 'active' : ''}`}>
                    {options1.map((option, index) => (
                      <div
                        key={index}
                        className={`option ${selectedOption1 === option ? 'selected' : ''}`}
                        onClick={() => handleOptionClick1(option)}
                      >
                        <label>{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`select-container ${isActiveDropdown2 ? 'active' : ''}`}>
                  <div className="select" onClick={toggleDropdown2}>
                    <input type="text" id="input" value={selectedOption2} readOnly />
                  </div>
                  <div className={`option-container2 ${isActiveDropdown2 ? 'active' : ''}`}>
                    {options2.map((option, index) => (
                      <div
                        key={index}
                        className={`option ${selectedOption2 === option ? 'selected' : ''}`}
                        onClick={() => handleOptionClick2(option)}
                      >
                        <label>{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='mt-4 mb-4'>
                <h5 className='labeltxt-color'>Are you a
                Student : &nbsp; <span className='light-txt'>Graduate/ Post Graduate</span></h5>
                <div className='labeltxt-color'><h5>(If student)</h5></div>
              </div>
              <div className='edu-details labeltxt-color'>
                <h5>Education Details:</h5>
                <div className='flex-row'>
                <div className='mt-4'><h5>Current Educational Institution:</h5></div> 
                  <div className={`input-wrapper ${isFocusedName || isFocusedInst ? 'input-focused' : ''}`}>

                
                    <label className="input-label">Institution Name</label>
                    <input
                      type="text"
                      value={inputValueName}
                      onFocus={handleFocusName}
                      onBlur={handleBlurName}
                      onChange={handleChangeName}
                    />
                    <div className='underline'></div>
                  </div>
                  </div>

                  <div className='flex-row'>
                <div className='mt-4'><h5>Degree Program</h5></div> 
                  <div className={`input-wrapper ${isFocusedName || isFocusedInst ? 'input-focused' : ''}`}>

                
                    <label className="input-label">Degree</label>
                    <input
                      type="text"
                      value={inputValueName}
                      onFocus={handleFocusName}
                      onBlur={handleBlurName}
                      onChange={handleChangeName}
                    />
                    <div className='underline'></div>
                  </div>
                  </div>
              </div>

              <div className='flex-row mt-4 mb-4'>
                <div className='select-container year-studying'>
                  <div className={`select-container ${isActiveDropdown3 ? 'active' : ''}`}>
                    <div className="select" onClick={toggleDropdown3}>
                      <input type="text" id="input" value={selectedOption3} readOnly />
                    </div>
                    <div className={`option-container ${isActiveDropdown3 ? 'active' : ''}`}>
                      {options1.map((option, index) => (
                        <div
                          key={index}
                          className={`option ${selectedOption3 === option ? 'selected' : ''}`}
                          onClick={() => handleOptionClick3(option)}
                        >
                          <label>{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterButton2;
