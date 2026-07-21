import React, { useState, useEffect } from "react";
import "./pop2.css";
import '../../Popup/pop1/drop3/drop3.css'
import "../../Service-carousel/esxample.css";
import "../Label-popup/Poplabel.css";



const RegisterButton2 = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to show success popup
  const [successMessage, setSuccessMessage] = useState(""); 


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Clear the input fields immediately
    event.target.reset();

    // Optionally, reset your input state variables if you're using state
    setInputValueName("");
    setInputValueNumber("");
    setInputValueMessage("");
    setInputValueMail('');
    setInputValueLoc('');
    setInputDegreeName("");
    setInputDegreeName2("");
    setInputPassout("");
    setInputClName("");
    setInputDayName("");
    setInputInstName("");
    setInputValueIntEx("");
    setSelectedOption3('Select');
    setSelectedDate('');
    setSelectedOption('');
    setInputValueAvail('');
    setInputValueStart('');
    setSelectedOption2('Select Internship');
    setSelectedOption1('Select');
    setSelectedOption4('Select');

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

  
  const [selectedDate, setSelectedDate] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [inputValueName, setInputValueName] = useState("");

  const [isFocusedDegree, setIsFocusedDegree] = useState(false);
  const [inputDegreeName, setInputDegreeName] = useState("");

  const [isFocusedDegree2, setIsFocusedDegree2] = useState(false);
  const [inputDegreeName2, setInputDegreeName2] = useState("");

  const [isFocusedPassout, setIsFocusedPassout] = useState(false);
  const [inputPassout, setInputPassout] = useState("");

  const [isFocusedClName, setIsFocusedClName] = useState(false);
  const [inputClName, setInputClName] = useState("");

  const [isFocusedDayName, setIsFocusedDayName] = useState(false);
  const [inputDayName, setInputDayName] = useState("");

  const [isFocusedInstName, setIsFocusedInst] = useState(false);
  const [inputInstName, setInputInstName] = useState("");

  const [isFocusedNumber, setIsFocusedNumber] = useState(false);
  const [inputValueNumber, setInputValueNumber] = useState("");

  const [isFocusedMessage, setIsFocusedMessage] = useState(false);
  const [inputValueMessage, setInputValueMessage] = useState("");

  const [isFocusedLoc, setIsFocusedLoc] = useState(false);
  const [inputValueLoc, setInputValueLoc] = useState("");

  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const [inputValueMail, setInputValueMail] = useState("");

  const [isFocusedIntEx, setIsFocusedIntEx] = useState(false);
  const [inputValueIntEx, setInputValueIntEx] = useState("");

  const [isFocusedAvail, setIsFocusedAvail] = useState(false);
  const [inputValueAvail, setInputValueAvail] = useState("");

  const [isFocusedStart, setIsFocusedStart] = useState(false);
  const [inputValueStart, setInputValueStart] = useState("");


  const handleFocusLoc = () => setIsFocusedLoc(true);
  const handleBlurLoc = () => {
    if (inputValueNumber === "") setIsFocusedLoc(false);
  };
  const handleChangeLoc = (e) => setInputValueLoc(e.target.value);

  const handleFocusMail = () => setIsFocusedMail(true);
  const handleBlurMail = () => {
    if (inputValueNumber === "") setIsFocusedMail(false);
  };
  const handleChangeMail = (e) => setInputValueMail(e.target.value);

  const handleFocusNameInst = () => setIsFocusedInst(true);
  const handleBlurNameInst = () => {
    if (inputInstName === "") setIsFocusedInst(false);
  };

  const handleChangeNameInst = (e) => setInputInstName(e.target.value);

  const handleFocusNameDeg = () => setIsFocusedDegree(true);
  const handleBlurNameDeg = () => {
    if (inputDegreeName === "") setIsFocusedDegree(false);
  };

  const handleChangeNameDeg = (e) => setInputDegreeName(e.target.value);

  const handleFocusNameDeg2 = () => setIsFocusedDegree2(true);
  const handleBlurNameDeg2 = () => {
    if (inputDegreeName2 === "") setIsFocusedDegree2(false);
  };

  const handleChangeNameDeg2 = (e) => setInputDegreeName2(e.target.value);

  const handleFocusPassout = () => setIsFocusedPassout(true);
  const handleBlurPassout = () => {
    if (inputPassout === "") setIsFocusedPassout(false);
  };

  const handleChangePassout = (e) => setInputPassout(e.target.value);

  const handleFocusClName = () => setIsFocusedClName(true);
  const handleBlurClName = () => {
    if (inputClName === "") setIsFocusedClName(false);
  };
  const handleChangeClName = (e) => setInputClName(e.target.value);

  const handleFocusDayName = () => setIsFocusedDayName(true);
  const handleBlurDayName = () => {
    if (inputDayName === "") setIsFocusedDayName(false);
  };
  const handleChangeDayName = (e) => setInputDayName(e.target.value);

  const handleFocusName = () => setIsFocusedName(true);
  const handleBlurName = () => {
    if (inputValueName === "") setIsFocusedName(false);
  };
  const handleChangeName = (e) => setInputValueName(e.target.value);

  const handleFocusNumber = () => setIsFocusedNumber(true);
  const handleBlurNumber = () => {
    if (inputValueNumber === "") setIsFocusedNumber(false);
  };
  const handleChangeNumber = (e) => {
    const newValue = e.target.value;
    // Ensure the value is numeric and limited to 11 digits
    if (/^\d*$/.test(newValue) && newValue.length <= 11) {
        setInputValueNumber(newValue);
    }
};

  const handleFocusIntEx= () => setIsFocusedIntEx(true);
  const handleBlurIntEx = () => {
    if (inputValueIntEx === "") setIsFocusedIntEx(false);
  };
  const handleChangeIntEx = (e) => setInputValueIntEx(e.target.value);

  const handleFocusAvail= () => setIsFocusedAvail(true);
  const handleBlurAvail = () => {
    if (inputValueIntEx === "") setIsFocusedAvail(false);
  };
  const handleChangeAvail = (e) => setInputValueAvail(e.target.value);

  const handleFocusStart= () => setIsFocusedStart(true);
  const handleBlurStart = () => {
    if (inputValueStart === "") setIsFocusedStart(false);
  };
  const handleChangeStart = (e) => setInputValueStart(e.target.value);




  // const [showPopup, setShowPopup] = useState(false);

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  // Separate states for each dropdown
  const [isActiveDropdown1, setIsActiveDropdown1] = useState(false);
  const [isActiveDropdown2, setIsActiveDropdown2] = useState(false);
  const [isActiveDropdown3, setIsActiveDropdown3] = useState(false);
  const [isActiveDropdown4, setIsActiveDropdown4] = useState(false);
  const [isActiveDropdown5, setIsActiveDropdown5] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("Select");
  const [selectedOption2, setSelectedOption2] = useState("Select Internship");
  const [selectedOption3, setSelectedOption3] = useState("Select");
  const [selectedOption4, setSelectedOption4] = useState("Select");
  const [selectedOption5, setSelectedOption5] = useState("Select");

  const options1 = ["Yes", "No"];
  const options2 = [
    "Graphic Design Intern",
    "Web Development Intern",
    "Business Development Intern",
    "Digital Marketing Intern",
  ];
  const options3 = ["Student", "Graduate/Post Graduate", ,];
  const options4 = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate"];

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
  const toggleDropdown4 = () => {
    setIsActiveDropdown4(!isActiveDropdown4);
    setIsActiveDropdown3(false); // Close the first dropdown if it's open
    setIsActiveDropdown2(false); // Close the second dropdown if it's open
  };

  const toggleDropdown5 = () => {
    setIsActiveDropdown5(!isActiveDropdown4);
    setIsActiveDropdown4(false); // Close the first dropdown if it's open
    setIsActiveDropdown3(false); // Close the second dropdown if it's open
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
    setIsActiveDropdown3();
  };
  const handleOptionClick4 = (option) => {
    setSelectedOption4(option);
    setIsActiveDropdown4(false);
  };
  const handleOptionClick5 = (option) => {
    setSelectedOption5(option);
    setIsActiveDropdown5(false);
  };

  // useEffect(() => {
  //   if (showPopup) {
  //     // Disable scroll on the body
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     // Enable scroll on the body
  //     document.body.style.overflow = "auto";
  //   }

  //   // Cleanup on component unmount or when popup closes
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [showPopup]);

  return (
    <div>
      <div className="career-but" onClick={togglePopup}>
        Register
      </div>

      {showPopup && (
        <div className="overlay-container-intern">
          <form
            method="post"
            action="https://script.google.com/macros/s/AKfycbwz4g7ZY22Evnfgle0RvNssbaGLDT7baVeg9ap0DlV-Gfgpklv0zcpJgST4iLmJQ_s/exec"
            name="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="popup-box-intern">
              <span className="close-button" onClick={togglePopup}>
                &times;
              </span>
              <div className="content-section">
                <h2 className="title-text">
                  Internship <br />
                  opportunities:
                </h2>
                <div className="input-container">
                  <div className="input-group">
                    <div
                      className={`input-wrapper ${
                        isFocusedName || inputValueName ? "input-focused" : ""
                      }`}
                    >
                      <label className="input-label">Full Name</label>
                      <input
                        type="text"
                        name="your-full-name"
                        value={inputValueName}
                        onFocus={handleFocusName}
                        onBlur={handleBlurName}
                        onChange={handleChangeName}
                        required
                      />
                      <div className="underline"></div>
                    </div>
                    <div
                      className={`input-wrapper ${
                        isFocusedNumber || inputValueNumber
                          ? "input-focused"
                          : ""
                      }`}
                    >
                      <label className="input-label">Mobile Number</label>
                      <input
                        type="number"
                        name="your-mobile-number"
                        value={inputValueNumber}
                        onFocus={handleFocusNumber}
                        onBlur={handleBlurNumber}
                        onChange={handleChangeNumber}
                        required
                        maxLength="11"
                      />
                      <div className="underline"></div>
                    </div>
                  </div>

                  <div className="input-group">
                    <div
                      className={`input-wrapper ${
                        isFocusedMail || inputValueMail ? "input-focused" : ""
                      }`}
                    >
                      <label
                        className="input-label"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                      >
                        Email Address
                      </label>
                      <input  
                        type="email"
                        name="your-email-address"
                        value={inputValueMail}
                        onFocus={handleFocusMail}
                        onBlur={handleBlurMail}
                        onChange={handleChangeMail}
                        required
                      />
                      <div className="underline"></div>
                    </div>
                    <div
                      className={`input-wrapper ${
                        isFocusedLoc || inputValueLoc ? "input-focused" : ""
                      }`}
                    >
                      <label className="input-label">Location</label>
                      <input
                        type="text"
                        name="your-location"
                        value={inputValueLoc}
                        onFocus={handleFocusLoc}
                        onBlur={handleBlurLoc}
                        onChange={handleChangeLoc}
                        required
                      />
                      <div className="underline"></div>
                    </div>
                  </div>
                </div>

                <div className="work-site mt-4">
                  <h5 className="labeltxt-color">
                    Are you available to work on-site?
                  </h5>
                  <div
                    className={`select-container  ${
                      isActiveDropdown1 ? "active" : ""
                    }`}
                  >
                    <div className="select" onClick={toggleDropdown1}>
                      <input
                        type="text"
                        name="mode-of-training"
                        id="input"
                        value={selectedOption1}
                        readOnly
                      />
                    </div>
                    <div
                      className={`option-container ${
                        isActiveDropdown1 ? "active" : ""
                      }`}
                    >
                      {options1.map((option, index) => (
                        <div
                          key={index}
                          className={`option ${
                            selectedOption1 === option ? "selected" : ""
                          }`}
                          onClick={() => handleOptionClick1(option)}
                        >
                          <label>{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h5 className="head-labeltxt-color">
                      Internship Position Applying For:
                    </h5>
                  </div>
                  <div className="dropdown mt-4">
                    <div className="inner-dropdown-intern">
                      <div
                        className={`select-container ${
                          isActiveDropdown2 ? "active" : ""
                        }`}
                      >
                        <div className="select" onClick={toggleDropdown2}>
                          <input
                            type="text"
                            id="input"
                            name="select-internship"
                            value={selectedOption2}
                            readOnly
                            
                          />
                        </div>
                        <div
                          className={`option-container2 ${
                            isActiveDropdown2 ? "active" : ""
                          }`}
                        >
                          {options2.map((option, index) => (
                            <div
                              key={index}
                              className={`option ${
                                selectedOption2 === option ? "selected" : ""
                              }`}
                              onClick={() => handleOptionClick2(option)}
                            >
                              <label>{option}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className='mt-5'>
                <h5 className='head-labeltxt-color'>Internship Position Applying For:</h5>
                <div className='flex-row'>
                <h5 className='labeltxt-color'>Are you available to work on-site?</h5>
                <div className='radio-row'>
                  <label>
                    <input
                      type="radio"
                      name='intern-exp'
                      value="yes"
                      checked={selectedOption === 'yes'}
                      onChange={handleOptionChange}
                    />
                    <h6 className='light-txt'> yes</h6>
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name='intern-exp'
                      value="no"
                      checked={selectedOption === 'no'}
                      onChange={handleOptionChange}
                    />
                    <h6 className='light-txt'>No</h6>
                  </label>
                </div>
              </div>
              </div> */}
                <div className="mt-4 mb-4">
                  <h5 className="labeltxt-color">Are you a : </h5>
                  {/* <div className="dropdown mt-3">
                    <div className='inner'>
                <div className={`select-container ${isActiveDropdown3 ? 'active' : ''}`}>
                  <div className="select" onClick={toggleDropdown3}>
                    <input type="text" name='mode-of-training' id="input" value={selectedOption3} readOnly />
                  </div>
                  <div className={`option-container ${isActiveDropdown3 ? 'active' : ''}`}>
                    {options3.map((option, index) => (
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
                  </div> */}

                  <div className="dropdown">
                    <div>
                      <div
                        className={`select-container-graduate ${
                          isActiveDropdown3 ? "active" : ""
                        }`}
                      >
                        <div className="select" onClick={toggleDropdown3}>
                          <input
                            type="text"
                            name="Are-you"
                            id="input"
                            value={selectedOption3}
                            placeholder="Select an option"
                            readOnly
                          />
                        </div>
                        <div
                          className={`option-container ${
                            isActiveDropdown3 ? "active" : ""
                          }`}
                        >
                          {options3.map((option, index) => (
                            <div
                              key={index}
                              className={`option ${
                                selectedOption3 === option ? "selected" : ""
                              }`}
                              onClick={() => handleOptionClick3(option)}
                            >
                              <label>{option}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Conditionally render content based on selected option */}
                      {selectedOption3 === "Student" && (
                        <div className="edu-details labeltxt-color mt-5">
                          <h5 className="head-labeltxt-color">
                            Education Details:
                          </h5>
                          <div className="flex-row">
                            <div className="mt-4">
                              <h5 className="labeltxt-color">
                                Current Educational Institution:
                              </h5>
                            </div>

                            <div
                              className={`input-wrapper ${
                                isFocusedInstName || isFocusedInstName
                                  ? "input-focused"
                                  : ""
                              }`}
                            >
                              <label className="input-label">
                                Institution Name
                              </label>
                              <input
                                type="text"
                                name="your-instution-name"
                                value={inputInstName}
                                onFocus={handleFocusNameInst}
                                onBlur={handleBlurNameInst}
                                onChange={handleChangeNameInst}
                                required
                              />
                              <div className="underline mob-underline"></div>
                            </div>
                          </div>

                          <div className="flex-row">
                            <div className="mt-4">
                              <h5 className="labeltxt-color">Degree Program</h5>
                            </div>
                            <div
                              className={`input-wrapper ${
                                isFocusedDegree || isFocusedDegree
                                  ? "input-focused"
                                  : ""
                              }`}
                            >
                              <label className="input-label">Degree</label>
                              <input
                                type="text"
                                name="your-degree-name"
                                value={inputDegreeName}
                                onFocus={handleFocusNameDeg}
                                onBlur={handleBlurNameDeg}
                                onChange={handleChangeNameDeg}
                                required
                              />
                              <div className="underline mob-underline"></div>
                            </div>
                          </div>

                          <div className="dropdown-single">
                            <div className="flex-row mt-4 mb-4">
                              <div>
                                <h5 className="labeltxt-color">
                                  Year of Study:
                                </h5>
                              </div>
                              <div className="select-container year-studying">
                                <div
                                  className={`select-container ${
                                    isActiveDropdown4 ? "active" : ""
                                  }`}
                                >
                                  <div
                                    className="select"
                                    onClick={toggleDropdown4}
                                  >
                                    <input
                                      type="text"
                                      id="input"
                                      name="year-of-study"
                                      value={selectedOption4}
                                      readOnly
                                    />
                                  </div>
                                  <div
                                    className={`option-container ${
                                      isActiveDropdown4 ? "active" : ""
                                    }`}
                                  >
                                    {options4.map((option, index) => (
                                      <div
                                        key={index}
                                        className={`option ${
                                          selectedOption4 === option
                                            ? "selected"
                                            : ""
                                        }`}
                                        onClick={() =>
                                          handleOptionClick4(option)
                                        }
                                      >
                                        <label>{option}</label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex-row">
                            {" "}
                            <h5 className="labeltxt-color">
                              Expected Graduation Date:
                            </h5>
                            <div className="date-picker-container">
                              <input
                                type="date"
                                name="graduation-date"
                                id="date-picker"
                                value={selectedDate}
                                onChange={handleDateChange}
                                className="custom-date-picker"
                              />
                            </div>
                          </div>

                          <div className="exp-section">
                            <div className="flex-row">
                              <h5 className="labeltxt-color">
                                Have you had any previous internships or
                                relevant experience?
                              </h5>
                              {/* <div className="radio-row">
                                <label>
                                  <input
                                    type="radio"
                                    name="intern-exp"
                                    value="yes"
                                    checked={selectedOption === "yes"}
                                    onChange={handleOptionChange}
                                  />
                                  <h6 className="light-txt"> yes</h6>
                                </label>
                                <br />
                                <label>
                                  <input
                                    type="radio"
                                    name="intern-exp"
                                    value="no"
                                    checked={selectedOption === "no"}
                                    onChange={handleOptionChange}
                                  />
                                  <h6 className="light-txt">No</h6>
                                </label>
                              </div> */}
                              <div
                    className={`select-container  ${
                      isActiveDropdown5 ? "active" : ""
                    }`}
                  >
                    <div className="select" onClick={toggleDropdown5}>
                      <input
                        type="text"
                        name="intern-exp"
                        id="input"
                        value={selectedOption5}
                        readOnly
                      />
                    </div>
                    <div
                      className={`option-container ${
                        isActiveDropdown5 ? "active" : ""
                      }`}
                    >
                      {options1.map((option, index) => (
                        <div
                          key={index}
                          className={`option ${
                            selectedOption5 === option ? "selected" : ""
                          }`}
                          onClick={() => handleOptionClick5(option)}
                        >
                          <label>{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                            </div>
                            <div>
                              <h5 className="labeltxt-color">
                                If yes, briefly describe your previous
                                internship or relevant experience:
                              </h5>
                              <div
                              className={`input-wrapper ${
                                isFocusedIntEx || isFocusedIntEx
                                  ? "input-focused"
                                  : ""
                              }`}
                            >
                              <label className="input-label"></label>
                              <input
                                type="text"
                                name="brief-about-Exp"
                                value={inputValueIntEx}
                                onFocus={handleFocusIntEx}
                                onBlur={handleBlurIntEx}
                                onChange={handleChangeIntEx}
                                required
                              />
                              <div className="underline-long "></div>
                            </div>
                            </div>
                            <div>
                              <div className="mt-4">
                                <div className="mt-3 labeltxt-color">
                                  <h5 className="labeltxt-color">
                                    What is your availability for this
                                    internship (e.g., full-time, part-time,
                                    specific days/times)?
                                  </h5>
                                  <div
                                  className={`input-wrapper ${
                                    isFocusedDayName || isFocusedDayName
                                      ? "input-focused"
                                      : ""
                                  }`}
                                >
                                  <label className="input-label labeltxt-color">
                                    
                                  </label>
                                  <input
                                    type="text"
                                    name="your-availablility-for-intern"
                                    value={inputValueAvail}
                                    onFocus={handleFocusAvail}
                                    onBlur={handleBlurAvail}
                                    onChange={handleChangeAvail}
                                    required
                                  />
                                  <div className="underline-long"></div>
                                </div>
                                </div>
                                
                              </div>

                              <div>
                                <h5 className="labeltxt-color">
                                  Are you able to start immediately? If not,
                                  when can you start?
                                </h5>
                                <div
                              className={`input-wrapper ${
                                isFocusedStart || isFocusedStart
                                  ? "input-focused"
                                  : ""
                              }`}
                            >
                              <label className="input-label"></label>
                              <input
                                type="text"
                                name="start-immediately"
                                value={inputValueStart}
                                onFocus={handleFocusStart}
                                onBlur={handleBlurStart}
                                onChange={handleChangeStart}
                                required
                              />
                              <div className="underline-long "></div>
                            </div>
                                <div className="mt-5">
                                  <h5 className="labeltxt-color">
                                    Upload Your Resume:
                                  </h5>
                                  <input
                                    type="file"
                                    id="file-upload"
                                    name="your-resume"
                                    onChange={handleFileChange}
                                    className="custom-file-upload"
                                    required
                                  />
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
                        </div>
                      )}

                      {selectedOption3 === "Graduate/Post Graduate" && (
                        <div className="graduate-content">
                          <div className="flex-row">
                            <div className="mt-4 labeltxt-color">
                              <h5 className="labeltxt-color">Degree Program</h5>
                            </div>
                            <div
                              className={`input-wrapper ${
                                isFocusedDegree2 || isFocusedDegree2
                                  ? "input-focused"
                                  : ""
                              }`}
                            >
                              <label className="input-label">Degree</label>
                              <input
                                type="text"
                                name="your-degree-name"
                                value={inputDegreeName2}
                                onFocus={handleFocusNameDeg2}
                                onBlur={handleBlurNameDeg2}
                                onChange={handleChangeNameDeg2}
                              />
                              <div className="underline mob-underline"></div>
                            </div>
                          </div>

                          <div className="flex-row">
                            <div className="mt-3 labeltxt-color">
                              <h5 className="labeltxt-color">
                                Year of passed out
                              </h5>
                            </div>
                            <div
                              className={`input-wrapper ${
                                isFocusedPassout || inputPassout
                                  ? "input-focused"
                                  : ""
                              }`}
                            >
                              <label className="input-label labeltxt-color">
                                Passout
                              </label>
                              <input
                                type="number"
                                name="your-passout-date"
                                value={inputPassout}
                                onFocus={handleFocusPassout}
                                onBlur={handleBlurPassout}
                                onChange={handleChangePassout}
                              />
                              <div className="underline mob-underline"></div>
                            </div>
                          </div>
                          <div className="flex-row">
                            <div className="mt-3 labeltxt-color">
                              <h5 className="labeltxt-color">College name</h5>
                            </div>
                            <div
                              className={`input-wrapper ${
                                isFocusedClName || inputClName
                                  ? "input-focused"
                                  : ""
                              }`}
                            >
                              <label className="input-label labeltxt-color">
                                Name
                              </label>
                              <input
                                type="text"
                                name="your-collage-name"
                                value={inputClName}
                                onFocus={handleFocusClName}
                                onBlur={handleBlurClName}
                                onChange={handleChangeClName}
                              />
                              <div className="underline mob-underline"></div>
                            </div>
                          </div>

                          <div className="exp-section">
                            <div className="flex-row">
                              <h5 className="labeltxt-color">
                                Have you had any previous internships or
                                relevant experience?
                              </h5>
                              <div className="radio-row">
                                <label>
                                  <input
                                    type="radio"
                                    name="intern-exp"
                                    value="yes"
                                    checked={selectedOption === "yes"}
                                    onChange={handleOptionChange}
                                  />
                                  <h6 className="light-txt"> yes</h6>
                                </label>
                                <br />
                                <label>
                                  <input
                                    type="radio"
                                    name="intern-exp"
                                    value="no"
                                    checked={selectedOption === "no"}
                                    onChange={handleOptionChange}
                                  />
                                  <h6 className="light-txt">No</h6>
                                </label>
                              </div>
                            </div>
                            <div>
                              <h5 className="labeltxt-color mt-3">
                                If yes, briefly describe your previous
                                internship or relevant experience:
                              </h5>
                              <div
                                  className='input-wrapper'
                                >
                                  <label className="input-label labeltxt-color">
                                    
                                  </label>
                                  <input
                                  type="text"
                                    name="brief-about-Exp"
                                    value={inputValueIntEx}
                                    onFocus={handleFocusIntEx}
                                    onBlur={handleBlurIntEx}
                                    onChange={handleChangeIntEx}
                                    required
                                 
                                  />
                                  <div className="underline-long"></div>
                                </div>
                            </div>
                            <div>
                              <div className="mt-4">
                                <div className="mt-3 labeltxt-color">
                                  <h5 className="labeltxt-color">
                                    What is your availability for this
                                    internship (e.g., full-time, part-time,
                                    specific days/times)?
                                  </h5>
                                </div>
                                <div
                                  className={`input-wrapper ${
                                    isFocusedDayName || isFocusedDayName
                                      ? "input-focused"
                                      : ""
                                  }`}
                                >
                                  <label className="input-label labeltxt-color">
                                  
                                  </label>
                                  <input
                                    type="text"
                                    name="your-availablility-for-intern"
                                    value={inputValueAvail}
                                    onFocus={handleFocusAvail}
                                    onBlur={handleBlurAvail}
                                    onChange={handleChangeAvail}
                                    required
                                  />
                                  <div className="underline"></div>
                                </div>
                              </div>

                              <div>
                               <div>
                               <h5 className="labeltxt-color">
                                  Are you able to start immediately? If not,
                                  when can you start?
                                </h5>
                                <div
                                  className='input-wrapper'
                                >
                                  <label className="input-label labeltxt-color">
                                    
                                  </label>
                                  <input
                                    type="text"
                                    name="start-immediately"
                                 
                                  />
                                  <div className="underline-long"></div>
                                </div>
                               </div>
                                <div className="mt-5">
                                  <h5 className="labeltxt-color">
                                    Upload Your Resume:
                                  </h5>
                                  <input
                                    type="file"
                                    id="file-upload"
                                    name="your-resumee"
                                    onChange={handleFileChange}
                                    className="custom-file-upload"
                                  />
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
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
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

export default RegisterButton2;
