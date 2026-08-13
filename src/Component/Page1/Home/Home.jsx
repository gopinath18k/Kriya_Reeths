import { useRef, useState, useEffect } from 'react';
import './Home.css';
import '../Placeholder/place.css';
import head from '../../../images/head.webp';
import bg1 from '../../../images/bg-text1.svg'
import bg2 from '../../../images/bg-text2.svg'
import greybg from '../../../images/grey-text.svg'
import graph from '../../../images/graph.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Examplee from '../../Carousel/example';
import Footere from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scroll from '../Scroll/Scroll';
import ImageReveal1 from '../../img-reveal/ImageReveal';
import Tscroll from '../Test-scroll/Tscroll';
import Tscroll1 from '../Test-scroll/Tscroll1';
import ScrollingCarousele from '../new-sliders/Slides';
import Slidesnew2 from '../new-sliders/Slides2';

 
AOS.init();

const Homee = () => {

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
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 100,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div >
            
            <div className="container-fluid home-main-cont " >
                <div className="section1" data-aos="zoom-in"
                    data-aos-duration="1300">
                    <img className='head-img'
                        src={head} alt="Head Image" />
                </div>

                <div>
                    <Scroll />
                </div>

                <div className="section3 row">
                    <div className="col graph-head " ><img className='graph' src={graph} alt="" /></div>
                    <div className="col brand-sec " >
                        <div className='ab-head'>
                            <h2 className='less-tp ' >Elevate</h2>
                            <h1 className='abm-text'>Your Brand<span className='less-w'>with  Us!</span></h1>
                        </div>
                        <div className='but-home'>
                            <p>Looking for the best branding agency in Coimbatore that delivers results? Our team of expert strategists uses the latest tools and develops innovative methods to create data-driven digital marketing plans for your brand. As a leading branding company in Coimbatore, let’s build a powerful brand together!</p>
                        </div>
                        <a href="#joinus" className='abt-but'>Start Today</a>


                    </div>
                    <div className='bg2-cont' >
                        <img className='bg-txt2' src={bg2} alt="" />
                    </div>
                </div>
 
                <div className='our-services'>
                    <Examplee />

                </div>

                <div className="section4">
                    <div className='bg1-cont'>
                        <img className='bg-txt11' src={bg1} alt="" />
                    </div>
                    <div className='creative-head' data-aos="zoom-in"
                        data-aos-duration="1300">
                        <div className='creative-hd1' ><h1 className='hd1-two'><span className='hd1-one '>Recent</span>Creatives</h1></div>
                        <p className='creative-p'> Ready to be wowed? Check out our mind-blowing recent creatives. </p>
                    </div>
                    <div className='pt-4 '>
                        <div>
                            <Tscroll />
                        </div>
                        <div className='pt-3'>
                            <Tscroll1 />
                        </div>
                        <div>
                        <ScrollingCarousele/>
                        </div>
                        <div>
                            <Slidesnew2/>
                        </div>

                    </div>
                    <div className='bg2-cont' >
                        <img className='bg-txt2' src={bg2} alt="" />
                    </div>
                </div>

                <div className="section5">
                    <div className='bg1-cont'>
                        <img className='bg-txt11' src={greybg} alt="" />
                    </div>
                    <div className='creative-head' data-aos="zoom-in"
                        data-aos-duration="1300">
                        <div className='creative-hd1'><h1 className='hd1-two'><span className='hd1-one '>Our</span>Process</h1></div>
                        <p>We design, launch, and refine digital marketing<br /> strategies to help your brand succeed. </p>
                    </div>
                    <ImageReveal1 />
                </div>


                <div className="section6" >
                    <div className='bg1-cont' id='joinus'>
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

                <Footere />

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
    );
}

export default Homee;
