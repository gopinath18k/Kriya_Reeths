import { useState, useEffect } from 'react';
import './Pop3.css';
import '../../Service-carousel/esxample.css';
import '../Label-popup/Poplabel.css';




const RegisterButton3 = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to show success popup
  const [successMessage, setSuccessMessage] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    // Clear the input fields immediately
    event.target.reset();
  
    // Optionally, reset your input state variables if you're using state
    setInputValueName('');
    setInputValueNumber('');
    setInputValueMail('');
    setInputValueLoc('');

  




    
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
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const [selectedDate, setSelectedDate] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [inputValueName, setInputValueName] = useState('');


  const [isFocusedNumber, setIsFocusedNumber] = useState(false);
  const [inputValueNumber, setInputValueNumber] = useState('');

  const [isFocusedLoc, setIsFocusedLoc] = useState(false);
  const [inputValueLoc, setInputValueLoc] = useState('');

  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const [inputValueMail, setInputValueMail] = useState('');

  const [isFocusedExp, setIsFocusedExp] = useState(false);
  const [inputValueExp, setInputValueExp] = useState('');



 

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
    // Ensure the value is numeric and limited to 11 digits
    if (/^\d*$/.test(newValue) && newValue.length <= 11) {
        setInputValueNumber(newValue);
    }
};

  const handleFocusLoc = () => setIsFocusedLoc(true);
  const handleBlurLoc = () => {
    if (inputValueNumber === '') setIsFocusedLoc(false);
  };
  const handleChangeLoc = (e) => setInputValueLoc(e.target.value);

  const handleFocusMail = () => setIsFocusedMail(true);
  const handleBlurMail = () => {
    if (inputValueNumber === '') setIsFocusedMail(false);
  };
  const handleChangeMail = (e) => setInputValueMail(e.target.value);

  const handleFocusExp = () => setIsFocusedExp(true);
  const handleBlurExp = () => {
    if (inputValueNumber === '') setIsFocusedExp(false);
  };
  const handleChangeExp = (e) => setInputValueExp(e.target.value);


  // Separate states for each dropdown
  const [isActiveDropdown1, setIsActiveDropdown1] = useState(false);
  const [isActiveDropdown2, setIsActiveDropdown2] = useState(false);
  const [isActiveDropdown3, setIsActiveDropdown3] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('Workshop Options');
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

 

  return (
    <div>
      <div className='career-but' onClick={togglePopup}>
        Register
      </div>

      {showPopup && (
        <div className="overlay-container-work">
          <form method='post' action='https://script.google.com/macros/s/AKfycbzHbvBIf69AomEapnOYnhFnNtfJYIvegtKhlDI9SHlbge9fw2zLVltoj1RJLtSAKdPDYA/exec' name='contact-form' onSubmit={handleSubmit}>
          <div className="popup-box-works">
            <span className="close-button" onClick={togglePopup}>
              &times;
            </span>
            <div className="content-section ">
              <h2 className='title-text'>Workshop  <br />opportunities</h2>
              <div className='input-container mt-4'>
                <div className='input-group '>
                  <div className={`input-wrapper ${isFocusedName || inputValueName ? 'input-focused' : ''}`}>
                    <label className="input-label">Full Name</label>
                    <input
                      type="text"
                      name='your-full-name'
                      value={inputValueName}
                      onFocus={handleFocusName}
                      onBlur={handleBlurName}
                      onChange={handleChangeName}
                      required
                    />
                    <div className='underline'></div>
                  </div>
                  <div className={`input-wrapper ${isFocusedNumber || inputValueNumber ? 'input-focused' : ''}`}>
                    <label className="input-label">Mobile Number</label>
                    <input
                      type="number"
                      name='your-mobile-number'
                      value={inputValueNumber}
                      onFocus={handleFocusNumber}
                      onBlur={handleBlurNumber}
                      onChange={handleChangeNumber}
                      maxLength="11"
                      required
                    />
                    <div className='underline'></div>
                  </div>
                </div>

                <div className='input-group'>
                  <div className={`input-wrapper ${isFocusedMail || inputValueMail ? 'input-focused' : ''}`}>
                    <label className="input-label" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>Email Address</label>
                    <input
                      type="email"
                      name='your-email-address'
                      value={inputValueMail}
                      onFocus={handleFocusMail}
                      onBlur={handleBlurMail}
                      onChange={handleChangeMail}
                      required
                    />
                    <div className='underline'></div>
                  </div>
                  <div className={`input-wrapper ${isFocusedLoc || inputValueLoc ? 'input-focused' : ''}`}>
                    <label className="input-label">Location</label>
                    <input
                      type="text"
                      name='your-location'
                      value={inputValueLoc}
                      onFocus={handleFocusLoc}
                      onBlur={handleBlurLoc}
                      onChange={handleChangeLoc}
                      required
                    />
                    <div className='underline'></div>
                  </div>
                </div>



              </div>

            <div></div>


            <div className="button-container">
                <input
                  type="submit"
                  id="submit"
                  value="Submit"
                  className="submit-button"
                />
              </div>
          </div>
          </form>
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

export default RegisterButton3;




