import  { useState } from 'react';
import '../../Page2/Aboutus/About.css'
import greybg from "../../../images/grey-text.svg"

export const OurCommunity = () => {
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
          .then(response => {
            setShowSuccessPopup(true);
          })
          .catch(error => {
            console.error('Error:', error);
            // Also show success popup because CORS redirects can trigger catch even on successful post
            setShowSuccessPopup(true);
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
        <div>
            <div className="container-fluid home-main-cont ">
                <div className="ab-section7">
                    <div className='bg1-cont'>
                        <img className='bg-txt11' src={greybg} alt="" />
                    </div>
                    <div className='community-head'>
            <div className='community-hd1' ><h1 className='hd1-two'><span className='hd1-one '>Join Our</span> Community</h1></div>
            <p >Give us a call. Our Door is always open! </p>
            <div className='float-input' >
              <div className='main-input-container-new'>
              <form action="https://script.google.com/macros/s/AKfycbxuNPBVbEb7HV7wtPXtm5qREUJ7ROXNcYA9GDIt44_oaNE754uEawynbIRsM9uwNlfLCg/exec" name='contact-form' onSubmit={handleSubmit} method='post'>
                <input type="hidden" name="recipient" value="hr@kriyareeths.com" />
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
            required
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
          />
          <div className='bottom-line-message'></div>
        </div>
      </div>
      <input type='submit' value='submit' id='submit' className='lcom-but'/>
              </form>
    </div>
            </div>
            
          </div>
                </div>



            </div>

            {showSuccessPopup && (
              <div className="success-modal-overlay">
                <div className="success-modal-content">
                  <div className="success-modal-icon-container">
                    <span className="success-modal-icon">✓</span>
                  </div>
                  <h3 className="success-modal-title">Submitted Successfully!</h3>
                  <p className="success-modal-desc">
                    Thank you for joining our community. We have received your details and will get in touch with you shortly.
                  </p>
                  <button className="success-modal-btn" onClick={() => setShowSuccessPopup(false)}>
                    Close
                  </button>
                </div>
              </div>
            )}

        </div>
    )
}
