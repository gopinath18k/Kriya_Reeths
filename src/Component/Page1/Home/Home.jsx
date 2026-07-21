import React, { useRef, useState, useEffect } from 'react';

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';
import './Home.css';
import '../Placeholder/place.css';
import head from '../../../images/head.png';
import ipad from '../../../images/ipad.svg';
import vid from '../../../images/landing-vid.mp4';
import bg1 from '../../../images/bg-text1.svg'
import bg2 from '../../../images/bg-text2.svg'
import greybg from '../../../images/grey-text.svg'
import graph from '../../../images/graph.png'
import flow from '../../../images/flow.svg'
import flow2 from '../../../images/flow2.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidere from '../slider/slider';
import FloatingLabelInput from '../Placeholder/Place';
import Example from '../../Carousel/example';
import Examplee from '../../Carousel/example';
import Footere from '../Footer/Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scroll from '../Scroll/Scroll';
import ImageReveal1 from '../../img-reveal/ImageReveal';
import Tscroll from '../Test-scroll/Tscroll';
import Tscroll1 from '../Test-scroll/Tscroll1';
import ScrollingCarousel from '../new-sliders/Slides';
import ScrollingCarousele from '../new-sliders/Slides';
import Slidesnew2 from '../new-sliders/Slides2';
import SplitType from 'split-type';



AOS.init();

const Homee = () => {


  
    //     const splitTypes = document.querySelectorAll('.reveal-type');
    
    //     splitTypes.forEach((char, i) => {
    //       const bg = char.dataset.bgColor;
    //       const fg = char.dataset.fgColor;
    
    //       const text = new SplitType(char, { types: 'chars' });
    
    //       gsap.fromTo(
    //         text.chars,
    //         {
    //           color: bg,
    //         },
    //         {
    //           color: fg,
    //           duration: 0.3,
    //           stagger: 0.02,
    //           scrollTrigger: {
    //             trigger: char,
    //             start: 'top 80%',
    //             end: 'top 20%',
    //             scrub: true,
    //             markers: false,
    //             toggleActions: 'play play reverse reverse',
    //           },
    //         }
    //       );
    //     });
    
    //     const lenis = new Lenis();
    
    //     lenis.on('scroll', (e) => {
    //       console.log(e);
    //     });
    
    //     function raf(time) {
    //       lenis.raf(time);
    //       requestAnimationFrame(raf);
    //     }
    
    //     requestAnimationFrame(raf);
    //   }, []);


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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
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

                {/* <div className='section2'>
                    <div className='ipad-cont' >
                        <img className='ipad' src={ipad} alt="iPad" />
                        <div className='vid-cont'>
                            <video ref={videoRef} className='land-vid' src={vid} loop onClick={handlePlayPause}></video>
                            {!isPlaying && (
                                <div className="play-button" onClick={handlePlayPause}></div>
                            )}
                        </div>
                    </div>
                    <div className='bg-half'>
                        <img className='bg-txt11' src={bg1} alt="" />
                    </div>
                </div> */}
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
                            <p>Our team of expert strategists uses the latest tools and develops innovative methods to create data-driven digital marketing plans for your brand. Clear communication and seamless collaboration are the cornerstones of our client relationships, ensuring a successful partnership every step of the way.</p>
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
                        {/* <Slidere /> */}
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
                    {/* <div className='flow-head'>
                        <img className='flow-chart flow-desk' src={flow} />
                        <img className='flow-chart flow-mob' src={flow2} />
                        <div className='flow-text1'>
                            <h4>Planning</h4>
                            <p>Based on your goals and target audience, we develop a comprehensive marketing plan that outlines the best digital marketing tactics for your business. </p>
                        </div>
                        <div className='flow-text2'>
                            <h4>Creation</h4>
                            <p> Our team of experts create high-quality digital assets that resonate with your audience. </p>
                        </div>
                        <div className='flow-text3'>
                            <h4>Execution</h4>
                            <p> With a robust strategy, we execute your digital marketing initiatives with precision and effectiveness.</p>
                        </div>
                        <div className='flow-text4'>
                            <h4>Analysis</h4>
                            <p>We meticulously analyze the performance of your campaigns across all channels, using advanced analytics tools to extract actionable insights.</p>
                        </div>
                        <div className='flow-text5'>
                            <h4>Reporting</h4>
                            <p>We provide clear, concise reports that highlight successes, challenges, and opportunities for improvement. </p>
                        </div>
                    </div> */}
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

        </div>
    );
}

export default Homee;
