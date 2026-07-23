import { useState } from 'react';
import './drop3.css'; // Make sure to name the CSS file accordingly

const Dropdown3 = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Current Role ');

  const options = [
    'Freelancing',
    'Student',
    'Business Owner',
   
    
  ];

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsActive(false);
  };

  return (
    <div className={`select-container ${isActive ? 'active' : ''}`}>
      <div className="select" onClick={toggleDropdown}>
        <input type="text" id="input" value={selectedOption} readOnly />
      </div>
      <div className={`option-container ${isActive ? 'active' : ''}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown3;
