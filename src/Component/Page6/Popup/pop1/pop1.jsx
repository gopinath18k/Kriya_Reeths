import { useState, useEffect } from "react";
import "./pop1.css";
import "../../Service-carousel/esxample.css";
import "../pop1/drop1/drop1.css";
import "../pop1/drop2/drop2.css";

const RegisterButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [isFocusedName, setIsFocusedName] = useState(false);
  const [inputValueName, setInputValueName] = useState('');
  const [isFocusedNumber, setIsFocusedNumber] = useState(false);
  const [inputValueNumber, setInputValueNumber] = useState('');
  const [isFocusedMessage, setIsFocusedMessage] = useState(false);
  const [inputValueMessage, setInputValueMessage] = useState('');

  const [isActive1, setIsActive1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("Mode of Training ");
  const options1 = ["Online", "In-Person"];

  const [isActive2, setIsActive2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("Areas of Interest");
  const options2 = ["SEO", "PPC", "Social Media Marketing", "Email Marketing", "Content Marketing", "Analytics"];

  const [isActive3, setIsActive3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState("Current Role ");
  const options3 = ["Freelancing", "Student", "Business Owner"];

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    setInputValueName("");
    setInputValueNumber("");
    setInputValueMessage("");

    const formData = new FormData(event.target);

    fetch(event.target.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSuccessMessage("Submitted successfully!");
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowPopup(false); // Close the popup after 3 seconds
          setShowSuccessPopup(false); // Hide success message
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSuccessMessage("Submission failed. Please try again.");
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowPopup(false); // Close the popup after 3 seconds
          setShowSuccessPopup(false); // Hide success message
        }, 3000);
      });
  };

  const togglePopup = () => setShowPopup(!showPopup);

  const handleFocusName = () => setIsFocusedName(true);
  const handleBlurName = () => {
    if (inputValueName === '') setIsFocusedName(false);
  };
  const handleChangeName = (e) => setInputValueName(e.target.value);

  const handleFocusNumber = () => setIsFocusedNumber(true);
  const handleBlurNumber = () => {
    if (inputValueNumber === '') setIsFocusedNumber(false);
  };
  const handleChangeNumber = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue) && newValue.length <= 11) {
        setInputValueNumber(newValue);
    }
  };

  const handleFocusMessage = () => setIsFocusedMessage(true);
  const handleBlurMessage = () => {
    if (inputValueMessage === '') setIsFocusedMessage(false);
  };
  const handleChangeMessage = (e) => setInputValueMessage(e.target.value);

  const toggleDropdown1 = () => setIsActive1(!isActive1);
  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
    setIsActive1(false);
  };

  const toggleDropdown2 = () => setIsActive2(!isActive2);
  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsActive2(false);
  };

  const toggleDropdown3 = () => setIsActive3(!isActive3);
  const handleOptionClick3 = (option) => {
    setSelectedOption3(option);
    setIsActive3(false);
  };

  return (
    <div>
      <div className="career-but" onClick={togglePopup}>
        Register
      </div>

      {showPopup && !showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-popup-digi" onClick={togglePopup}>
              &times;
            </span>
            <div className="section-content">
              <h2 className="digital-head">Digital Marketing <br /> Training:</h2>
              <form method="post" action="https://script.google.com/macros/s/AKfycby-P0MYEV0dy6X1dp0DTkjlje3r88RrskrAIDQ6Wc7UVZ3E2Yprxwjwf9M3i_-TRVjj/exec" name="contact-form" onSubmit={handleSubmit}>
                <div className="input-head">
                  <div className='main-input'>
                    <div className='input-one'>
                      <div className={`floating-label-input ${isFocusedName || inputValueName ? 'focused' : ''}`}>
                        <label className="floating-label">Full Name</label>
                        <input
                          type="text"
                          name="your-name"
                          value={inputValueName}
                          onFocus={handleFocusName}
                          onBlur={handleBlurName}
                          onChange={handleChangeName}
                          required
                        />
                        <div className='bottom-line'></div>
                      </div>
                      <div className={`floating-label-input ${isFocusedNumber || inputValueNumber ? 'focused' : ''}`}>
                        <label className="floating-label">Mobile Number</label>
                        <input
                          type="text" // Changed to text for custom validation
                          name="your-number"
                          value={inputValueNumber}
                          onFocus={handleFocusNumber}
                          onBlur={handleBlurNumber}
                          onChange={handleChangeNumber}
                          maxLength="11"
                          required
                        />
                        <div className='bottom-line'></div>
                      </div>
                    </div>
                    <div className='input-2'>
                      <div className={`floating-label-input ${isFocusedMessage || inputValueMessage ? 'focused' : ''}`}>
                        <label className="floating-label">Email Address</label>
                        <input
                          type='email'
                          name="your-mail"
                          value={inputValueMessage}
                          onFocus={handleFocusMessage}
                          onBlur={handleBlurMessage}
                          onChange={handleChangeMessage}
                          required
                        />
                        <div className='bottom-line-mess'></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="drop-head">
                  <div>
                    <div className={`select-container ${isActive1 ? "active" : ""}`}>
                      <div className="select" onClick={toggleDropdown1}>
                        <input type="text" name="mode-of-training" id="input" value={selectedOption1} readOnly />
                      </div>
                      <div className={`option-container ${isActive1 ? "active" : ""}`}>
                        {options1.map((option, index) => (
                          <div key={index} className={`option ${selectedOption1 === option ? "selected" : ""}`} onClick={() => handleOptionClick1(option)}>
                            <label>{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={`select-container ${isActive2 ? "active" : ""}`}>
                      <div className="select" onClick={toggleDropdown2}>
                        <input type="text" id="input" name="area-of-intrest" value={selectedOption2} readOnly />
                      </div>
                      <div className={`option-container2 ${isActive2 ? "active" : ""}`}>
                        {options2.map((option, index) => (
                          <div key={index} className={`option ${selectedOption2 === option ? "selected" : ""}`} onClick={() => handleOptionClick2(option)}>
                            <label>{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={`select-container ${isActive3 ? "active" : ""}`}>
                      <div className="select" onClick={toggleDropdown3}>
                        <input type="text" id="input" name="current-role" value={selectedOption3} readOnly />
                      </div>
                      <div className={`option-container ${isActive3 ? "active" : ""}`}>
                        {options3.map((option, index) => (
                          <div key={index} className={`option ${selectedOption3 === option ? "selected" : ""}`} onClick={() => handleOptionClick3(option)}>
                            <label>{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button-container">
                <input
                  type="submit"
                  id="submit"
                  value="Submit"
                  className="submit-button"
                />
              </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="sucessed-popup-content">
          
            <div className="success-message">
              {successMessage}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterButton;
