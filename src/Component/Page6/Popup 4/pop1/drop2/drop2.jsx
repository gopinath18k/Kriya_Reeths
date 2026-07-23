import { useState } from 'react';
import './drop2.css'; // Make sure to name the CSS file accordingly

const Dropdown2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Areas of Interest ');

  const options = [
    'SEO',
    'PPC',
    ' Social Media Marketing',
    'Email Marketing',
    'Content Marketing',
    'Analytics'
    
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
      <div className={`option-container2 ${isActive ? 'active' : ''}`}>
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

export default Dropdown2;
