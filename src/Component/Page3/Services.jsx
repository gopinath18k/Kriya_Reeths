import { useState, useEffect } from 'react';
import greybg from '../../images/grey-text.svg'
import Exampless from './Service-carousel/example'
import './Services.css'
import bg1 from '../../images/bg-text1.svg'
import bg2 from '../../images/bg-text2.svg'
import Footerel from '../Page2/Lfooter/Lfooter'
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    // Clear the input fields immediately
    event.target.reset();
  
    // Optionally, reset your input state variables if you're using state
    setInputValueName('');
    setInputValueNumber('');
    setInputValueMessage('');
  
    const formData = new FormData(event.target);
  
    fetch(event.target.action, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Optionally, show a success message here
      })
      .catch(error => {
        console.error('Error:', error);
        // Optionally, show an error message here
      });
  };

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
  const handleChangeNumber = (e) => {
    const newValue = e.target.value;
    // Ensure the value is numeric and limited to 11 digits
    if (/^\d*$/.test(newValue) && newValue.length <= 11) {
        setInputValueNumber(newValue);
    }
};

  const handleFocusMessage = () => setIsFocusedMessage(true);
  const handleBlurMessage = () => {
    if (inputValueMessage === '') setIsFocusedMessage(false);
  };
  const handleChangeMessage = (e) => setInputValueMessage(e.target.value);
  return (
    <div className='container-fluid service-main-cont'>
      <div className='ab-section1' data-aos="fade-up"
        data-aos-duration="1300">
        <h3 className='head1'>Our</h3>
        <h1 className='head2'>Services</h1>

        <p className='head3-p'>As a leading digital marketing agency in Coimbatore, we offer a comprehensive suite of digital marketing services designed to expand your reach and deliver tangible results. Our team of experts seamlessly blends creativity, technical expertise, and strategic thinking to help you achieve your marketing goals.  Explore our range of services crafted to elevate your brand and drive growth. </p>
      </div>
      <div className='service-exampless'>
        <div className='bg1-cont'>
          <img className='bg-txt11' src={bg1} alt="" />
        </div>
        <div className='bg2-cont' >
          <img className='bg-txt2' src={bg2} alt="" />
        </div>
        <Exampless />
      </div>

      <div className="ab-section7">
        <div className='bg1-cont'>
          <img className='bg-txt11' src={greybg} alt="" />
        </div>
        <div className='community-head'>
            <div className='community-hd1' data-aos="zoom-in"
              data-aos-duration="1300"><h1 className='hd1-two'><span className='hd1-one '>Join Our</span> Community</h1></div>
            <p data-aos="zoom-in"
              data-aos-duration="1300">Give us a call. Our Door is always open! </p>
            <div className='float-input' data-aos="fade-up"
              data-aos-duration="1300">
              <div className='main-input-container-new'>
              <form action="https://script.google.com/macros/s/AKfycbxuNPBVbEb7HV7wtPXtm5qREUJ7ROXNcYA9GDIt44_oaNE754uEawynbIRsM9uwNlfLCg/exec" name='contact-form' onSubmit={handleSubmit} method='post'>
              <div className='input-group-new'>
        <div className={`floating-label-input-name ${isFocusedName || inputValueName ? 'focused-name' : ''}`}>
          <label className="floating-label-name">Name</label>
          <input
            type="text"
            name='your-name'
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
            type='number'
            name='your-number'
            value={inputValueNumber}
            onFocus={handleFocusNumber}
            onBlur={handleBlurNumber}
            onChange={handleChangeNumber}
            className="input-number"
            maxLength="11"
            required
          />
          <div className='bottom-line-number'></div>
        </div>
      </div>

      <div className='message-input-container-new'>
        <div className={`floating-label-input-message ${isFocusedMessage || inputValueMessage ? 'focused-message' : ''}`}>
          <label className="floating-label-message">Message</label>
          <input
            type="text"
            name='your-message'
            value={inputValueMessage}
            onFocus={handleFocusMessage}
            onBlur={handleBlurMessage}
            onChange={handleChangeMessage}
            className="input-message"
            required
          />
          <div className='bottom-line-message'></div>
        </div>
      </div>
      <input type='submit' value='submit' id='submit' className='lcom-but' data-aos="zoom-in"
              data-aos-duration="1300"/>
              </form>
    </div>
            </div>
            
          </div>
      </div>

      <Footerel />
    </div>
  )
}

export default Services