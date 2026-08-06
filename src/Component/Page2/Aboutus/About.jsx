  import { useEffect, useState } from 'react';
  import '../../Page2/Light-placeholder/Lplacehold.css'
  import './About.css'
  import founder1 from '../../../images/founder1.webp'
  import founder2 from '../../../images/founder2.webp'
  import keer from '../../../images/keerthana.webp'
  import bg1 from '../../../images/bg-text1.svg'
  import bg2 from '../../../images/bg-text2.svg'
  import reva from '../../../images/Revanth.webp'
  import wedo from '../../../images/wedo-lap.webp'
  import plat1 from '../../../images/react.webp'
  import plat2 from '../../../images/ahref.webp'
  import plat3 from '../../../images/meta.webp'
  import plat4 from '../../../images/ps.webp'
  import greybg from '../../../images/grey-text.svg'
  import polio from '../../../images/polio-img.webp'
  import Onam from '../../../images/Onam.webp'
  import Diwali from '../../../images/Diwal.webp'
  import NewYear from '../../../images/NewYea.webp'
  import TeamOut from '../../../images/6Hotel.webp'
  import achiv from '../../../images/achiv1.webp'
  import CardContainer from '../card/Card'
  import Footerel from '../../Page2/Lfooter/Lfooter'
  import Tslider from '../Teamslider/Teamslider';
  import { useLocation } from 'react-router-dom';





  const Aboute = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    const location = useLocation();
      
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
        <div className="container-fluid about-main-cont">
          <div className='ab-section1' id='about' data-aos="fade-up"
            data-aos-duration="1300">
            <h3 className='head1'>Hear About</h3>
            <h1 className='head2'>Kriya & Reeths!</h1>

            <p className='head3-p'>Kriya & Reeths is the best digital marketing company in Coimbatore for all your digital marketing needs. As a leading digital marketing firm, we offer specialized services that cover every aspect of digital marketing, designed to enhance your online presence.  </p>
          </div>

          <div className="ab-section2 row">
            <div className='bg1-cont'>
              <img className='bg-txt11' src={bg1} alt="" />
            </div>
            <div className='bg2-cont' >
              <img className='bg-txt2' src={bg2} alt="" />
            </div>
            <div className="leader-head col-12 col-sm-5 " data-aos="fade-right"
              data-aos-duration="1300">
              <div className='leader-sub'>
                <h1>Leadership</h1>
                <p>Kriya & Reeths is led by visionary founders with a passion for digital excellence. Their expertise drives our commitment to delivering top-tier digital marketing solutions in Coimbatore. </p>
              </div>
            </div>
            <div className="col-12 founder-main col-sm-5 " data-aos="fade-left"
              data-aos-duration="1300">
              <div className='founder-box'>

                <img className='founder2' src={founder2} alt="" />
                <img className='founder1' src={founder1} alt="" />
                <img className='keer' src={keer} alt="" />
                <img className='reva' src={reva} alt="" />


              </div>
            </div>
          </div>

          <div className='ab-section3 row'>
            <div className='bg1-cont'>
              <img className='bg-txt11' src={greybg} alt="" />
            </div>
            <div className="col-12 col-sm-6  wedo-mg-head" data-aos="zoom-in"
              data-aos-duration="1300">
              <div className='wedo-sub-head'>
                <img className='wedo-img' src={wedo} alt="" />
                <img src={plat1} alt="" className="platforms1" />
                <img src={plat2} alt="" className="platforms2" />
                <img src={plat3} alt="" className="platforms3" />
                <img src={plat4} alt="" className="platforms4" />
              </div>
            </div>
            <div className="col col-12 col-sm-6 " data-aos="fade-left"
              data-aos-duration="1300">
              <div className='wedo-head'>
                <h1 className='we-h1-1'>Mission:</h1>
                <p>To empower businesses to thrive in the digital age by delivering innovative and effective marketing solutions that drive growth, engagement, and lasting brand impact.
                </p>
              </div>
              <div className='wedo-head'>
                <h1 className='we-h1-1'>Vision:
                </h1>
                <p>To be the leading digital marketing agency recognized for our expertise, creativity, and commitment to helping clients achieve their goals in a rapidly evolving digital landscape.</p>
              </div>
            </div>
          </div>

          <div className="ab-section4">
            <div className='bg1-cont'>
              <img className='bg-txt11' src={bg1} alt="" />
            </div>
            <div className='bg2-cont' >
              <img className='bg-txt2' src={bg2} alt="" />
            </div>
            <div className='creativ-head' data-aos="zoom-in"
              data-aos-duration="1300">
              <h1 >Creative Minds</h1>
              <p>Our team combines diverse talents to innovate and deliver compelling digital marketing strategies that captivate and inspire.
              </p>
            </div>
            <div className='tslider' data-aos="zoom-in"
              data-aos-duration="1300">
              <Tslider/>
            </div>
          </div>

          <div className='ab-section5'>
            <div className='bg1-cont'>
              <img className='bg-txt11' src={greybg} alt="" />
            </div>

            <div className="val-head" data-aos="zoom-in"
              data-aos-duration="1300">
              <h1 className='hd1-one'>Our <span className='hd1-two' >Values</span></h1>
              <p>We value excellence, innovation, integrity, collaboration, and community engagement through social activities. </p>
            </div>
            <div className="val-bdy row" data-aos="fade-up"
              data-aos-duration="1300">
              <div className="vbdy-text col-12 col-sm-6  order-2 order-sm-1">
                <div className='vbdy-text-sub '>
                  <h1 className='hd1-two pulsee'>Pulse Polio</h1>
                  <h3>Immunization Drive 2024</h3>
                  <p>We proudly participated as a team in the Pulse Polio Immunisation Drive 2024, reinforcing our commitment to community health and well-being at Kriya Reeths.</p>
                </div>
              </div>

              <div className="vbdy-frame col-12 col-sm-5 order-1 order-sm-2">
                <div className='vbdy-frame-sub'>
                  <img src={polio} alt="" />
                </div>
              </div>
            </div>
            <div className="val-bdy row" data-aos="fade-up"
              data-aos-duration="1300">
                
              <div className="vbdy-text col-12 col-sm-6  order-2 order-sm-1">
                <div className='vbdy-text-sub '>
                  <h1 className='hd1-two pulsee'>Onam</h1>
                  <h3>Onam Celebration 2024</h3>
                  <p>We celebrated Onam 2024 with vibrant festivities, including a beautiful pookalam and traditional feasts. It was a joyous occasion that strengthened our team spirit and honored our cultural heritage.</p>
                </div>
              </div>

              <div className="vbdy-frame col-12 col-sm-5 order-1 order-sm-2">
                <div className='vbdy-frame-sub'>
                  <img src={Onam} alt="" />
                </div>
              </div>
            </div>
            <div className="val-bdy row" data-aos="fade-up"
              data-aos-duration="1300">
              <div className="vbdy-text col-12 col-sm-6  order-2 order-sm-1">
                <div className='vbdy-text-sub '>
                  <h1 className='hd1-two pulsee'>Diwali</h1>
                  <h3>Diwali Celebration 2024</h3>
                  <p>We celebrated Diwali with joy and togetherness, lighting up the night with fireworks and smiles. A memorable occasion filled with laughter, sweets, and festive cheer! ✨🎆 #TeamKriya</p>
                </div>
              </div>

              <div className="vbdy-frame col-12 col-sm-5 order-1 order-sm-2">
                <div className='vbdy-frame-sub'>
                  <img src={Diwali} alt="" />
                </div>
              </div>
            </div>
            <div className="val-bdy row" data-aos="fade-up"
              data-aos-duration="1300">
              <div className="vbdy-text col-12 col-sm-6  order-2 order-sm-1">
                <div className='vbdy-text-sub '>
                  <h1 className='hd1-two pulsee'>New Year</h1>
                  <h3>New Year Celebration 2025</h3>
                  <p>We welcomed the New Year with joy, laughter, and great company. A memorable celebration that set the tone for an amazing year ahead! #TeamKriya</p>
                </div>
              </div>

              <div className="vbdy-frame col-12 col-sm-5 order-1 order-sm-2">
                <div className='vbdy-frame-sub'>
                  <img src={NewYear} alt="" />
                </div>
              </div>
            </div>
            
            <div className="val-bdy row" data-aos="fade-up"
              data-aos-duration="1300">
              <div className="vbdy-text col-12 col-sm-6  order-2 order-sm-1">
                <div className='vbdy-text-sub '>
                  <h1 className='hd1-two pulsee'>Hash Six</h1>
                  <h3>Team Outing at Hash Six</h3>
                  <p>A wonderful day spent with an amazing team at Hash Six, a five-star hotel in Coimbatore! Great food, great vibes, and unforgettable memories. ✨🍽️ #TeamKriya</p>
                </div>
              </div>

              <div className="vbdy-frame col-12 col-sm-5 order-1 order-sm-2">
                <div className='vbdy-frame-sub'>
                  <img src={TeamOut} alt="" />
                </div>
              </div>
            </div>


            
            
          </div>

          <div className="ab-section6">
            <div className='bg1-cont'>
              <img className='bg-txt11' src={bg1} alt="" />
            </div>
            <div className='bg2-cont' >
              <img className='bg-txt2' src={bg2} alt="" />
            </div>
            <div className="row">

              <div className="achiv-head" data-aos="zoom-in"
                data-aos-duration="1300">
                <h1 className='hd1-two onee-ach'>Our <br />Certified  Team</h1>
                <p>Our Certified Team is committed to excellence, harnessing in-depth industry knowledge to deliver measurable results.
                </p>
              </div>

              <div className="col achiv-card">
                <CardContainer />
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
        <input type='submit' value='submit' id='submit' className='lcom-but' data-aos="zoom-in"
                data-aos-duration="1300"/>
                </form>
      </div>
              </div>
              
            </div>
          </div>
          
          <Footerel />
          
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

  export default Aboute