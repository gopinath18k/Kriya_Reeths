import React, { useState } from 'react';
import './Lplacehold.css';

const FloatingLabelInputl = () => {
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
    <div className='main-input-container-new'>
      <div className='input-group-new'>
        <div className={`floating-label-input-name ${isFocusedName || inputValueName ? 'focused-name' : ''}`}>
          <label className="floating-label-name">Name</label>
          <input
            type="text"
            value={inputValueName}
            onFocus={handleFocusName}
            onBlur={handleBlurName}
            onChange={handleChangeName}
            className="input-name"
          />
          <div className='bottom-line-name'></div>
        </div>
        <div className={`floating-label-input-number ${isFocusedNumber || inputValueNumber ? 'focused-number' : ''}`}>
          <label className="floating-label-number">Number</label>
          <input
            type="text"
            value={inputValueNumber}
            onFocus={handleFocusNumber}
            onBlur={handleBlurNumber}
            onChange={handleChangeNumber}
            className="input-number"
            maxLength="11"
          />
          <div className='bottom-line-number'></div>
        </div>
      </div>

      <div className='message-input-container-new'>
        <div className={`floating-label-input-message ${isFocusedMessage || inputValueMessage ? 'focused-message' : ''}`}>
          <label className="floating-label-message">Message</label>
          <input
            type="text"
            value={inputValueMessage}
            onFocus={handleFocusMessage}
            onBlur={handleBlurMessage}
            onChange={handleChangeMessage}
            className="input-message"
          />
          <div className='bottom-line-message'></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingLabelInputl;
