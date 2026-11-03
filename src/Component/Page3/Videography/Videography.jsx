import { useState, useEffect } from 'react';
import './Videography.css';
import bg1 from '../../../images/bg-text1.svg';
import bg2 from '../../../images/bg-text2.svg';
import greybg from '../../../images/grey-text.svg';
import shootImg from '../../../images/shoot.webp';
import brandIcon from '../../../images/brand.png';
import photoCameraIcon from '../../../images/photo-camera.png';
import shootingIcon from '../../../images/shooting.png';
import droneIcon from '../../../images/drone.png';
import Footerel from '../../Page2/Lfooter/Lfooter';

const Videography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  // Contact Form State
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
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
    if (/^\d*$/.test(newValue) && newValue.length <= 11) {
      setInputValueNumber(newValue);
    }
  };

  const handleFocusMessage = () => setIsFocusedMessage(true);
  const handleBlurMessage = () => {
    if (inputValueMessage === '') setIsFocusedMessage(false);
  };
  const handleChangeMessage = (e) => setInputValueMessage(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    setInputValueName('');
    setInputValueNumber('');
    setInputValueMessage('');

    const formData = new FormData(event.target);

    fetch(event.target.action, {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        setShowSuccessPopup(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        setShowSuccessPopup(true);
      });
  };

  const capabilities = [
    {
      num: '01',
      title: 'Brand Commercials & Promotional Films',
      desc: 'Create compelling cinematic advertisements with creative concepts, professional direction, and high-quality visuals that strengthen your brand image.',
      points: [
        'Creative Concept Development & Scriptwriting',
        'Professional Cinema Cameras & Studio Lighting',
        'Casting, Voiceovers & Creative Direction'
      ]
    },
    {
      num: '02',
      title: 'Corporate Films & Brand Storytelling',
      desc: 'Showcase your company\'s vision, people, and expertise through authentic corporate videos, leadership interviews, and facility walkthroughs that build trust.',
      points: [
        'Founder & Executive Interview Videos',
        'Company Culture & Employee Storytelling',
        'Factory, Campus & Office Tour Videos'
      ]
    },
    {
      num: '03',
      title: 'Product & E-Commerce Videography',
      desc: 'Highlight product features, demonstrate real-world applications, and create engaging product videos that support customer interest and purchasing decisions.',
      points: [
        '360-Degree Product Views & Macro Shots',
        'Lifestyle Photography & Product Demonstrations',
        'Studio Product Shoots & Creative Backdrops'
      ]
    },
    {
      num: '04',
      title: 'Event Videography & Conference Coverage',
      desc: 'Capture important moments through professional event filming, multi-camera coverage, highlight videos, and engaging social media content.',
      points: [
        'Multi-Camera Stage & Audience Coverage',
        'Event Highlights & Recap Videos',
        'Attendee Testimonials & Event Photography'
      ]
    },
    {
      num: '05',
      title: '4K Drone & Aerial Videography',
      desc: 'Capture distinctive aerial footage for real estate, manufacturing, tourism, and outdoor events to showcase locations and projects from fresh perspectives.',
      points: [
        'Drone Operations with Required Permissions',
        'Stabilized 4K Aerial Video Capture',
        'Cinematic Fly-Throughs & Landscape Shots'
      ]
    },
    {
      num: '06',
      title: 'Professional Production Equipment & Crew',
      desc: 'Support every shoot with suitable cameras, lenses, lighting, and audio equipment selected to meet your project\'s creative and technical requirements.',
      points: [
        'Professional Cinema Cameras & Compatible Lenses',
        'Wireless Microphones, Boom Mics & Audio Recording',
        'Stabilizers, Motorized Sliders & Camera Jibs'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Brand & Commercial Films',
      type: 'commercial-shoot',
      iconImg: brandIcon,
      desc: 'Produce compelling brand films and promotional advertisements with creative concepts, professional direction, and cinematic visuals for digital campaigns, brand promotions, and advertising platforms.'
    },
    {
      name: 'Product & E-Commerce Videos',
      type: 'product-shoot',
      iconImg: photoCameraIcon,
      desc: 'Showcase your products through professional studio and on-location videography, highlighting product features, textures, functionality, and craftsmanship through engaging visual storytelling.'
    },
    {
      name: 'Corporate & Industrial Videos',
      type: 'corporate-shoot',
      iconImg: shootingIcon,
      desc: 'Present your company\'s identity, infrastructure, operations, and expertise through corporate films, facility walkthroughs, employee features, client testimonials, and industrial video productions.'
    },
    {
      name: 'Drone & Aerial Videography',
      type: 'drone-shoot',
      iconImg: droneIcon,
      desc: 'Capture distinctive aerial perspectives using professional drone videography to showcase properties, industrial facilities, landscapes, outdoor events, and large-scale projects, subject to applicable permissions and regulations.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Pre-Production & Creative Planning',
      desc: 'Develop creative concepts, finalize scripts, prepare visual moodboards and shot lists, and organize the production schedule to ensure a clear direction for the shoot.'
    },
    {
      step: '02',
      title: 'Location Scouting & Talent Selection',
      desc: 'Identify suitable filming locations, coordinate required permissions, select actors or models where needed, and arrange props and set elements to match the creative concept.'
    },
    {
      step: '03',
      title: 'Professional Video Production',
      desc: 'Bring the concept to life with coordinated filming, professional camera work, lighting, and audio recording, supported by the production crew required for your project.'
    },
    {
      step: '04',
      title: 'Video Editing, Color Grading & Sound Design',
      desc: 'Transform raw footage into a cohesive story through precise editing, color correction and grading, audio enhancement, licensed music selection, and motion graphics where required.'
    },
    {
      step: '05',
      title: 'Final Delivery & Platform Optimization',
      desc: 'Receive high-quality final video files in suitable resolutions and formats, optimized for websites, social media platforms, vertical and horizontal viewing, and broadcast requirements where applicable.'
    }
  ];

  const faqs = [
    {
      question: 'What video production equipment do you bring to a shoot?',
      answer: 'We use professional cinema cameras (Sony FX6/FX3 series, RED), high-end G-Master cinema lenses, DJI Ronin gimbals, Aputure studio lighting fixtures, Sennheiser audio systems, and DJI Inspire/Mavic Pro 4K/6K drones.'
    },
    {
      question: 'Do you shoot on-location or in a studio?',
      answer: 'Both! We have fully equipped studio capabilities with custom backdrops and lighting, and our mobile production crew regularly shoots on-location across offices, factories, retail stores, and outdoor destinations.'
    },
    {
      question: 'How long does a typical videography shoot take?',
      answer: 'Depending on the project scope, a shoot can range from a half-day session (for social media content or executive interviews) to multiple full-day productions for corporate brand films or multi-product catalogs.'
    },
    {
      question: 'Do you provide models, voiceover artists, and actors?',
      answer: 'Yes! Our pre-production services include casting professional models, commercial actors, and voiceover artists in English, Tamil, and other regional languages.'
    },
    {
      question: 'Is post-production editing included with the videography service?',
      answer: 'Yes, absolutely! Every videography package includes full-service post-production: storytelling cut, cinema color grading, sound design, licensed soundtrack, animated title cards, and multi-format exports.'
    },
    {
      question: 'How do we book a shoot and what is the lead time?',
      answer: 'We recommend reaching out 1 to 2 weeks in advance so our creative team can prepare the script, shot-list, and pre-production logistics to guarantee a flawless shoot day.'
    }
  ];

  return (
    <div className="smm-page-wrapper">
      {/* Background text watermarks */}
      <div className="smm-bg-watermark-left">
        <img className="smm-bg-img" src={bg1} alt="video production company in coimbatore" />
      </div>
      <div className="smm-bg-watermark-right">
        <img className="smm-bg-img" src={bg2} alt="branding agency in coimbatore" />
      </div>

      {/* ====================================================
          1. HERO SECTION (Light Theme)
      ==================================================== */}
      <section className="smm-hero-section">
        <div className="smm-hero-content" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge">
            <span className="smm-badge-dot"></span>
            CINEMATIC VIDEO PRODUCTION & VISUAL STORYTELLING
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Video Production <br /> Company in Coimbatore
          </h1>

          <p className="smm-hero-desc">
            Bring your brand story to life with professional video production in Coimbatore. From impactful brand commercials and corporate films to product videos, promotional reels, and aerial cinematography, we create compelling visuals that connect with your audience.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">250+</div>
              <div className="smm-stat-label">Production Shoots</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">Cinema 4K</div>
              <div className="smm-stat-label">Ultra HD Video Quality</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">100%</div>
              <div className="smm-stat-label">In-House Production Team</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">5.0★</div>
              <div className="smm-stat-label">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          2. SECTION 2: FULL-FUNNEL ENGINEERING (Dark Theme)
      ==================================================== */}
      <section className="smm-feature-section">
        <div className="smm-feature-container">
          <div className="smm-feature-left" data-aos="fade-right" data-aos-duration="1200">
            <div className="smm-eyebrow-badge dark">
              <span className="smm-badge-dot"></span>
              CINEMA-GRADE PRODUCTION
            </div>

            <h2 className="smm-feature-heading">
              Tell Your Story. <br />
              Create an Impact That Lasts.
            </h2>

            <p className="smm-feature-desc">
              Video content helps businesses communicate their value, build customer trust, and create memorable brand experiences. As a video production company in Coimbatore, we combine professional cameras, creative lighting, and thoughtful direction to produce engaging videos that showcase your brand.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Professional Cameras & Creative Lighting</h4>
                  <p>Capture stunning visuals with professional cinema cameras and studio lighting techniques that enhance image quality, depth, and color accuracy.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>End-to-End Video Production Services</h4>
                  <p>From concept development and scriptwriting to location scouting, filming, and post-production, we manage every stage of your video project.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Aerial Drone Videography</h4>
                  <p>Showcase your business, property, or events from unique perspectives with professionally captured aerial footage, subject to applicable drone permissions and regulations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="smm-feature-right" data-aos="fade-left" data-aos-duration="1200">
            <div className="smm-showcase-card">
              <img
                src={shootImg}
                alt="video production company in coimbatore"
                className="smm-showcase-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          3. SECTION 3: CAPABILITIES (Light Theme)
      ==================================================== */}
      <section className="smm-capabilities-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge">
            <span className="smm-badge-dot"></span>
            WHAT WE DO
          </div>
          <h2 className="smm-section-title">Our Videography Capabilities</h2>
          <p className="smm-section-subtitle">
            From cinematic brand films to professional e-commerce product videos, we deliver comprehensive video production services tailored to your business goals.
          </p>
        </div>

        <div className="smm-capabilities-grid">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="smm-cap-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={idx * 100}
            >
              <div className="smm-cap-number">{cap.num}</div>
              <h3 className="smm-cap-title">{cap.title}</h3>
              <p className="smm-cap-desc">{cap.desc}</p>
              <ul className="smm-cap-list">
                {cap.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          4. SECTION 4: PLATFORMS / DOMAINS (Dark Theme)
      ==================================================== */}
      <section className="smm-platforms-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge dark">
            <span className="smm-badge-dot"></span>
            VIDEO PRODUCTION EXPERTISE
          </div>
          <h2 className="smm-section-title dark">Our Video Production Services</h2>
          <p className="smm-section-subtitle dark">
            We produce professional video content for businesses across commercial, corporate, product, and event categories. Our production approach combines creative direction, professional equipment, and quality cinematography to deliver videos that communicate your brand story effectively.
          </p>
        </div>

        <div className="smm-platforms-grid">
          {platforms.map((plat, idx) => (
            <div
              key={idx}
              className="smm-platform-card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={idx * 100}
            >
              <div className={`smm-platform-icon-wrap ${plat.type}`}>
                {plat.iconImg ? (
                  <img src={plat.iconImg} alt={plat.name} className="smm-platform-custom-img-icon" />
                ) : (
                  plat.iconText
                )}
              </div>
              <h3 className="smm-platform-title">{plat.name}</h3>
              <p className="smm-platform-desc">{plat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          5. SECTION 5: PROCESS (Light Theme)
      ==================================================== */}
      <section className="smm-process-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge">
            <span className="smm-badge-dot"></span>
            VIDEO PRODUCTION WORKFLOW
          </div>
          <h2 className="smm-section-title">How We Bring Your Video to Life</h2>
          <p className="smm-section-subtitle">
            A structured five-step production process that transforms your creative vision into a polished, high-quality video, from initial concept development to final delivery.
          </p>
        </div>

        <div className="smm-process-grid">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="smm-process-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={idx * 100}
            >
              <div className="smm-process-step-num">Step {step.step}</div>
              <h3 className="smm-process-card-title">{step.title}</h3>
              <p className="smm-process-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          6. SECTION 6: FAQ ACCORDION (Dark Theme)
      ==================================================== */}
      <section className="smm-faq-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge dark">
            <span className="smm-badge-dot"></span>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="smm-section-title dark">Questions About Videography?</h2>
          <p className="smm-section-subtitle dark">
            Everything you need to know about shoot preparation, crew sizes, gear, and deliverables.
          </p>
        </div>

        <div className="smm-faq-container" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-faq-accordion">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`smm-faq-item ${activeFaq === idx ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="smm-faq-question"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.question}</span>
                  <span className="smm-faq-toggle-icon">+</span>
                </button>
                <div className="smm-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          7. SECTION 7: JOIN COMMUNITY / CONTACT FORM
      ==================================================== */}
      <section className="smm-contact-section">
        <div className="ab-section7">
          <div className="bg1-cont">
            <img className="bg-txt11" src={greybg} alt="digital marketing company in coimbatore" />
          </div>
          <div className="community-head">
            <div className="community-hd1" data-aos="zoom-in" data-aos-duration="1300">
              <h2 className="hd1-two">
                <span className="hd1-one">Book Your</span> Video Shoot
              </h2>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1300">
              Give us a call. Ready to bring your brand story to life?
            </p>
            <div className="float-input" data-aos="fade-up" data-aos-duration="1300">
              <div className="main-input-container-new">
                <form
                  action="https://script.google.com/macros/s/AKfycbxuNPBVbEb7HV7wtPXtm5qREUJ7ROXNcYA9GDIt44_oaNE754uEawynbIRsM9uwNlfLCg/exec"
                  name="contact-form"
                  onSubmit={handleSubmit}
                  method="post"
                >
                  <input type="hidden" name="recipient" value="hr@kriyareeths.com" />
                  <div className="input-group-new">
                    <div
                      className={`floating-label-input-name ${
                        isFocusedName || inputValueName ? 'focused-name' : ''
                      }`}
                    >
                      <label className="floating-label-name">Name</label>
                      <input
                        type="text"
                        name="your-name"
                        value={inputValueName}
                        onFocus={handleFocusName}
                        onBlur={handleBlurName}
                        onChange={handleChangeName}
                        className="input-name"
                        required
                      />
                      <div className="bottom-line-name"></div>
                    </div>
                    <div
                      className={`floating-label-input-number ${
                        isFocusedNumber || inputValueNumber ? 'focused-number' : ''
                      }`}
                    >
                      <label className="floating-label-number">Number</label>
                      <input
                        type="number"
                        name="your-number"
                        value={inputValueNumber}
                        onFocus={handleFocusNumber}
                        onBlur={handleBlurNumber}
                        onChange={handleChangeNumber}
                        className="input-number"
                        maxLength="11"
                        required
                      />
                      <div className="bottom-line-number"></div>
                    </div>
                  </div>

                  <div className="message-input-container-new">
                    <div
                      className={`floating-label-input-message ${
                        isFocusedMessage || inputValueMessage ? 'focused-message' : ''
                      }`}
                    >
                      <label className="floating-label-message">Message</label>
                      <input
                        type="text"
                        name="your-message"
                        value={inputValueMessage}
                        onFocus={handleFocusMessage}
                        onBlur={handleBlurMessage}
                        onChange={handleChangeMessage}
                        className="input-message"
                        required
                      />
                      <div className="bottom-line-message"></div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="submit"
                    id="submit"
                    className="lcom-but"
                    data-aos="zoom-in"
                    data-aos-duration="1300"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          8. SECTION 8: FOOTER
      ==================================================== */}
      <Footerel />

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="success-modal-overlay">
          <div className="success-modal-content">
            <div className="success-modal-icon-container">
              <span className="success-modal-icon">✓</span>
            </div>
            <h3 className="success-modal-title">Submitted Successfully!</h3>
            <p className="success-modal-desc">
              Thank you for reaching out. We have received your inquiry regarding Videography services and will get in touch with you shortly.
            </p>
            <button className="success-modal-btn" onClick={() => setShowSuccessPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videography;
