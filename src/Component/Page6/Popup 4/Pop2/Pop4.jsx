import { useState, useEffect } from 'react';
import './Pop4.css';
import '../../Service-carousel/esxample.css';
import '../Label-popup/Poplabel.css';


const RegisterButton4 = () => {

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
    setInputValueLoc('');
    setInputValueMail('');
    setInputValueImd('');
    setIsFocusedSal('');
    setSelectedFile('');
    setSelectedOption1('Select the Position');
    setSelectedOption2('Years of experience');
    setSelectedOption3('Select');
    setInputValueSal('')
    setSelectedOption('')

  




    
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

  useEffect(() => {
    if (showPopup) {
      // Disable scroll on the body
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll on the body
      document.body.style.overflow = "auto";
    }


    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false);
  };
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

  const [isFocusedSal, setIsFocusedSal] = useState(false);
  const [inputValueSal, setInputValueSal] = useState('');

  const [isFocusedImd, setIsFocusedImd] = useState(false);
  const [inputValueImd, setInputValueImd] = useState('');


 

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

  const handleFocusSal = () => setIsFocusedSal(true);
  const handleBlurSal = () => {
    if (inputValueNumber === '') setIsFocusedSal(false);
  };
  const handleChangeSal = (e) => setInputValueSal(e.target.value);

  const handleFocusImd = () => setIsFocusedImd(true);
  const handleBlurImd = () => {
    if (inputValueNumber === '') setIsFocusedImd(false);
  };
  const handleChangeImd = (e) => setInputValueImd(e.target.value);

  // Separate states for each dropdown
  const [isActiveDropdown1, setIsActiveDropdown1] = useState(false);
  const [isActiveDropdown2, setIsActiveDropdown2] = useState(false);
  const [isActiveDropdown3, setIsActiveDropdown3] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('Select the Position');
  const [selectedOption2, setSelectedOption2] = useState('Years of experience');
  const [selectedOption3, setSelectedOption3] = useState('Select');

  const options1 = ['Yes', 'No'];
  const options2 = [
    'Graphic Designer',
    'Web Developer',
    'Business Development Executive',
    'Digital Marketing Executive',
    ' Digital Marketing Trainer'
  ];
  const options3 = [
    '0-1 year',
    '2-4 years',
    ' 5+ years'
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
          <form method='post' action='https://script.google.com/macros/s/AKfycbyJNX_WpRL_4rH_GnTuvSB5I5hOobP-HblEpVxXQbNxnP69zvykFLzo4hiNFCKJnU2S/exec' name='contact-form' onSubmit={handleSubmit}>
          <div className="popup-box-cr">
            <span className="close-button" onClick={togglePopup}>
              &times;
            </span>
            <div className="content-section">
              <h2 className='title-text'>Careers</h2>
              <div className='input-container'>
                <div className='input-group'>
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
                      name='your-full-mail'
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

                
                <div className='mt-3'>
                <div className='flex'>
                <h5 className='labeltxt-color'>Are you willing to relocate to work on-site? </h5>
                <div className='dropdown'>
                

                <div className='inner'>
                  <div className={`select-container ${isActiveDropdown3 ? 'active' : ''}`}>
                    <div className="select" onClick={toggleDropdown3}>
                      <input  type="text" name='work-onsite' id="input" value={selectedOption3} readOnly />
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

                <div className='mt-4'>
                  <h5 className='head-labeltxt-color'>Position Applying For:</h5>

                  <div className='mt-3'></div>
              <div className='dropdown'>
                

              <div className='inner'>
                <div className={`select-container ${isActiveDropdown1 ? 'active' : ''}`}>
                  <div className="select" onClick={toggleDropdown1}>
                    <input  type="text" name='Position-Apllying-for' id="input" value={selectedOption1} readOnly />
                  </div>
                  <div className={`option-container ${isActiveDropdown1 ? 'active' : ''}`}>
                    {options2.map((option, index) => (
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
                </div>
                </div>
                </div>

                <div className='mt-5'>
                  <div><h5 className='head-labeltxt-color'>Experience Level:</h5></div>
                  

                  <div className='mt-3'><h5 className='labeltxt-color'>How many years of experience do you have in this role?</h5></div>
              <div className='dropdown'>
                

                <div className='inner'>
                <div className={`select-container ${isActiveDropdown2? 'active' : ''}`}>
                  <div className="select" onClick={toggleDropdown2}>
                    <input type="text" name='years-of-Experience' id="input" value={selectedOption2} readOnly />
                  </div>
                  <div className={`option-container ${isActiveDropdown2 ? 'active' : ''}`}>
                    {options3.map((option, index) => (
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
                </div>

                <div className='flex-row '>
                  <div className='mt-4 '><h5 className='labeltxt-color'>What is your expected salary range?</h5></div>

                  <div className={`input-wrapper ${isFocusedSal || isFocusedSal ? 'input-focused' : ''}`}>


                    <label className="input-label"></label>
                    <input
                      type="text"
                      name='your-Salary-Range'
                      value={inputValueSal}
                      onFocus={handleFocusSal}
                      onBlur={handleBlurSal}
                      onChange={handleChangeSal}
                      required
                    />
                    <div className='underline mob-underline'></div>
                  </div>
                </div>

                <div className='flex-row '>
                {" "}
                <h5 className='labeltxt-color'>Are you available to start immediately? If not, when can you start? </h5>
                <div className={`input-wrapper ${isFocusedExp || isFocusedExp ? 'input-focused' : ''}`}>


                    <label className="input-label"></label>
                    <input
                      type="text"
                      name='Available-Join-Imediately'
                      value={inputValueImd}
                      onFocus={handleFocusImd}
                      onBlur={handleBlurImd}
                      onChange={handleChangeImd}
                      required
                    />
                    <div className='underline mob-underline'></div>
                  </div>
              </div>
                </div>

              </div>


             <div>
            <div></div>

            <div>

            <div className='resume-dec mt-5'>
                  <div className=''><h5 className='head-labeltxt-color '>Resume and Portfolio:
                  </h5></div>
                  <div className='mt-5 mandatory-head'><h5 c>Upload Your Resume:</h5><input
                    type="file"
                    id="file-upload"
                    name='your-resume'
                    onChange={handleFileChange}
         
                    required
                    
                    
                  /></div>

<div className='mt-2 mandatory-head'><h5 >Upload Your Portfolio:</h5><input
                    type="file"
                    id="file-upload"
                    name='your-portfolio'
                    onChange={handleFileChange}
                    
                    required
                  /></div>
                </div>
            </div>


            <div className='button-container'>
              <input type='submit' id='submit' value='Register' className='submit-button'/>

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

export default RegisterButton4;




