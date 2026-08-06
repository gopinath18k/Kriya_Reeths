import { useState, useEffect } from 'react';
import blog1 from '../../../images/blog1.webp'

import tony from '../../../images/tony.webp'
import './Blog.css'
import bg1 from '../../../images/bg-text1.svg'
import greybg from '../../../images/grey-text.svg'
import bg2 from '../../../images/bg-text2.svg'

import Footere from '../../Page1/Footer/Footer'
import Blogss from '../BlogCarousel-Desktop/Carousel/example'
import { Homese } from '../BlogCarousel-Mobile/Home/Home'
import { Link } from 'react-router-dom';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='container-fluid blog-main'>
       <div className='ab-section1' data-aos="zoom-in"
        data-aos-duration="1300">
          <h1 className='head2'>Blog</h1>

<p className='head3-p'>Discover a world of insights, tips, and stories. Our blog is your go-to destination for the latest in digital marketing trends, SEO strategies, social media tips, and content creation techniques. We cover a wide range of topics to keep you informed, engaged, and inspired as you navigate the digital landscape.</p>
        </div> 

        <div className='blog-section2'>
        <div className='bg1-cont'>
            <img className='bg-txt11' src={bg1} alt="" />
          </div>
          <div className='bg2-cont' >
            <img className='bg-txt2' src={bg2} alt="" />
          </div>
            <div className="row blog-row">
                <div className="col-12 col-sm-6 beer-head" data-aos="fade-right"
        data-aos-duration="1300"><img className='beer' src={blog1} alt="" /></div>
                <div className="col-12 col-sm-6 beer-text" data-aos="fade-left"
        data-aos-duration="1300">
                    <h6 className='y-text'>Digital Marketing </h6>
                    <Link to='/blog/digital-marketing-a-boon-or-bane' className='blog-head-text'><h2>Digital Marketing : A Boon Or  Bane</h2></Link>
                    <p className='beer-p'>In today's evolving technologies digital marketing is exposed as a powerful tool for businesses to reach targeted customers and generate traffic worldwide. Like many other platforms, digital marketing has its techniques and strategies to bring one’s business online instantly and easily and it also has its own set of advantages and disadvantages, let us discuss in this blog.</p>

                    <div className='tony-head'>
                        <div><img className='tony' src={tony} alt="" /></div>
                        <div className='tony-text '>
                            <h6>Kriya & Reeths</h6>
                            <p>Coimbatore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='blog-examples'>
        <div className='bg1-cont'>
                        <img className='bg-txt11' src={greybg} alt="" />
                    </div>
        <div data-aos="zoom-in"
        data-aos-duration="1300">
        <Blogss/>
        </div>
        <div data-aos="zoom-in"
        data-aos-duration="1300">
        <Homese/>
        </div>
        </div>
        
        <div className="section6 mt-5">
                <div className='bg1-cont'>
                        <img className='bg-txt11' src={bg1} alt="" />
                    </div>
                    <div className='community-head'>
                        <div className='community-hd1' data-aos="zoom-in"
                            data-aos-duration="1300"><h1 className='hd1-two'><span className='hd1-one '>Join Our </span>Community</h1></div>
                        <p data-aos="zoom-in"
                            data-aos-duration="1300">Give us a call. Our Door is always open! </p>



                        <div className='float-input' data-aos="fade-up"
                            data-aos-duration="1300">
                            <div className='main-input'>
                                <form method='post' action="https://script.google.com/macros/s/AKfycbxuNPBVbEb7HV7wtPXtm5qREUJ7ROXNcYA9GDIt44_oaNE754uEawynbIRsM9uwNlfLCg/exec" name='contact-form' onSubmit={handleSubmit}>
                                    <input type="hidden" name="recipient" value="hr@kriyareeths.com" />
                                    <div className='input-one'>
                                        <div className={`floating-label-input ${isFocusedName || inputValueName ? 'focused' : ''}`}>
                                            <label className="floating-label">Name</label>
                                            <input
                                                type="text"
                                                name='your-name'
                                                value={inputValueName}
                                                onFocus={handleFocusName}
                                                onBlur={handleBlurName}
                                                onChange={handleChangeName}
                                                required
                                            />
                                            <div className='bottom-line'></div>
                                        </div>
                                        <div className={`floating-label-input ${isFocusedNumber || inputValueNumber ? 'focused' : ''}`}>
                                            <label className="floating-label">Number</label>
                                            <input
                                                type="number"
                                                name='your-number'
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
                                            <label className="floating-label">Message</label>
                                            <input
                                                type="text"
                                                name='your-message'
                                                value={inputValueMessage}
                                                onFocus={handleFocusMessage}
                                                onBlur={handleBlurMessage}
                                                onChange={handleChangeMessage}
                                            />
                                            <div className='bottom-line-mess'></div>
                                        </div>
                                    </div>
                                    <div> <input type='Submit' value='Submit' id='submit' className='com-but' data-aos="zoom-in"
                            data-aos-duration="1300" /></div>
                                </form>
                            </div>
                            <sript src='Google Sheet.js'></sript>
                        </div>


                        
                    </div>
                    <div className='bg2-cont' >
                        <img className='bg-txt2' src={bg2} alt="" />
                    </div>
                </div>
                <Footere/>

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

export default Blog