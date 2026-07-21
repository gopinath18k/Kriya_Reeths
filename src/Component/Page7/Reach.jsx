import React, { useState, useEffect } from 'react';
import './Reach.css';
import map from '../../images/mapo.png';
import add from '../../images/ymap.png';
import ymail from '../../images/ymail.png';
import greybg from '../../images/grey-text.svg'
import ycall from '../../images/y-call.png';
import bg1 from '../../images/bg-text1.svg';
import bg2 from '../../images/bg-text2.svg';
import Footerel from '../Page2/Lfooter/Lfooter';
import { OurCommunity } from '../Page1/OurCommunity/OurCommunity';
import FloatingLabelInputl from '../Page2/Light-placeholder/Lplacehold';

const Reachus = () => {
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
    const [mapVisible, setMapVisible] = useState(false);

    const handleMouseEnter = () => {
        setMapVisible(true);
    };

    const handleMouseLeave = () => {
        setMapVisible(false);
    };

    return (
        <div className='container-fluid reach-main'>
            <div className='ab-section1' data-aos="zoom-in"
                data-aos-duration="1300">
                <h1 className='head2'>Reach Us</h1>
                <p className='head3-p'>
                    Have a project in mind? Want to discuss your digital marketing strategy? We're here to assist!
                    Get in touch with our team of experts. We're eager to hear from you.

                </p>
            </div>

            <div className="Reach-sec2">
                <div className='bg1-cont'>
                    <img className='bg-txt11' src={bg1} alt="" />
                </div>
                <div className='bg2-cont'>
                    <img className='bg-txt2' src={bg2} alt="" />
                </div>
                <div className="row reachus-row">
                    <div data-aos="fade-right"
                        data-aos-duration="1300"
                        className="col-12 col-sm-6 col-xxxl-6 map-head"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {!mapVisible && <img className='out-map' src={map} alt="Map" />}
                        <iframe
                            className={`mapee ${mapVisible ? 'visible' : ''}`}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0612230211805!2d76.89752997369968!3d11.034033554392035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x275489eeb28f2419%3A0x5b9b13955026b9d!2sKriya%20%26%20Reeths!5e0!3m2!1sen!2sin!4v1722408690065!5m2!1sen!2sin"
                            width="570"
                            height="420"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12 col-sm-4 col-xxxl-6 cont-text-head" data-aos="fade-left"
                        data-aos-duration="1300">
                        <div className='cont-det-heading'>
                            <h1>Visit Us</h1>
                            <p>Want to collaborate on your next big project? Let's connect in person!</p>
                        </div>

                        <div className="cont-add-head">
                            <div className='add-icon-head'>
                                <img className='add-icon' src={add} alt="Address Icon" />
                                <p className='address-p'>
                                    71/42, Vadavalli, Marutham Nagar, Coimbatore, Tamil Nadu 641041.
                                </p>
                            </div>
                            <div className='add-icon-head'>
                                <img className='add-icon' src={ymail} alt="Email Icon" />
                                <p>info@kriyareeths.com</p>
                            </div>
                            <div className='add-icon-head'>
                                <img className='add-icon' src={ycall} alt="Phone Icon" />
                                <p>+91 73059 79062</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <input type='submit' value='Submit' id='submit' className='lcom-but' data-aos="zoom-in"
                                    data-aos-duration="1300" />
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            <Footerel />
        </div >
    );
}

export default Reachus;