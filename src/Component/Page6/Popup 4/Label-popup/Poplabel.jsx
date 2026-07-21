import React, { useState } from 'react';
import './Poplabel.css';

const Poplabe = () => {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [inputValueName, setInputValueName] = useState('');

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

  return (
    <div className='main-input'>
      <div className='input-one'>
        <div className={`floating-label-input ${isFocusedName || inputValueName ? 'focused' : ''}`}>
          <label className="floating-label">Full Name</label>
          <input
            type="text"
            value={inputValueName}
            onFocus={handleFocusName}
            onBlur={handleBlurName}
            onChange={handleChangeName}
          />
          <div className='bottom-line'></div>
        </div>
        <div className={`floating-label-input ${isFocusedNumber || inputValueNumber ? 'focused' : ''}`}>
          <label className="floating-label">Mobile Number</label>
          <input
            type="text"
            value={inputValueNumber}
            onFocus={handleFocusNumber}
            onBlur={handleBlurNumber}
            onChange={handleChangeNumber}
          />
          <div className='bottom-line'></div>
        </div>
      </div>

      <div className='input-2'>
        <div className={`floating-label-input ${isFocusedMessage || inputValueMessage ? 'focused' : ''}`}>
          <label className="floating-label">Email Address</label>
          <input
            type="text"
            value={inputValueMessage}
            onFocus={handleFocusMessage}
            onBlur={handleBlurMessage}
            onChange={handleChangeMessage}
          />
          <div className='bottom-line-mess'></div>
        </div>
      </div>
    </div>
  );
};

export default Poplabe;
