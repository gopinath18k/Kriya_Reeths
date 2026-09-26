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
      title: 'Brand Commercials & Ad Films',
      desc: 'High-concept cinematic advertisements scripted, directed, and shot with cinema-grade optics to elevate your brand perception.',
      points: [
        'Creative Concept Development & Scripting',
        'Cinema Camera Rigs & Studio Lighting',
        'Professional Actors, Voiceover & Directing'
      ]
    },
    {
      num: '02',
      title: 'Corporate Storytelling & Brand Culture',
      desc: 'Authentic documentary-style corporate films, executive leadership interviews, and facility walkthroughs that inspire trust.',
      points: [
        'Executive & Founder Spotlight Interviews',
        'Company Culture & Employee Stories',
        'Factory, Campus & Office Facility Tours'
      ]
    },
    {
      num: '03',
      title: 'Product & E-Commerce Shoots',
      desc: 'Dynamic product showcase reels, macro detail captures, and lifestyle shoots engineered to drive customer buying decisions.',
      points: [
        '360-Degree Turntable & Macro Detail Shots',
        'Lifestyle & Real-World Usage Sequences',
        'Clean Studio White & Stylized Backdrops'
      ]
    },
    {
      num: '04',
      title: 'High-Energy Event & Conclave Coverage',
      desc: 'Comprehensive multi-camera live event recording, recap aftermovies, keynote coverage, and same-day social media teasers.',
      points: [
        'Multi-Camera Stage & Crowd Filming',
        'Quick-Turnaround Highlight Aftermovies',
        'Attendee Testimonials & Red Carpet Snaps'
      ]
    },
    {
      num: '05',
      title: '4K/6K Drone & Aerial Cinematography',
      desc: 'Breathtaking aerial perspectives captured by certified drone pilots for real estate, manufacturing, tourism, and grand outdoor events.',
      points: [
        'Licensed & Insured Drone Operations',
        'Smooth Gimbal Stabilized 4K/6K Capture',
        'Dynamic Fly-Through & Landscape Panoramas'
      ]
    },
    {
      num: '06',
      title: 'Full In-House Equipment & Crew',
      desc: 'Zero equipment rental friction—we deploy our own state-of-the-art Sony FX cinema bodies, G Master prime lenses, and Aputure studio lighting.',
      points: [
        'Cinema Cameras (Sony FX series, RED)',
        'Wireless Audio Transmitters & Boom Mics',
        'Motorized Sliders, Gimbals & Jibs'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Brand & Commercial Films',
      type: 'commercial-shoot',
      iconImg: brandIcon,
      desc: 'High-production value ad films crafted for national broadcast, OTT placements, and high-converting digital campaigns.'
    },
    {
      name: 'Product & E-Commerce Reels',
      type: 'product-shoot',
      iconImg: photoCameraIcon,
      desc: 'Crisp studio and outdoor product videography capturing textures, benefits, and luxury craftsmanship.'
    },
    {
      name: 'Corporate & Industrial Videos',
      type: 'corporate-shoot',
      iconImg: shootingIcon,
      desc: 'Showcase your infrastructure, enterprise capabilities, client testimonials, and company milestones.'
    },
    {
      name: 'Drone & Aerial Footage',
      type: 'drone-shoot',
      iconImg: droneIcon,
      desc: 'Ultra HD aerial drone cinematography capturing sweeping landscape perspectives and grand scale.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Pre-Production & Moodboard',
      desc: 'Brainstorming concepts, finalizing scripts, creating visual shot-lists, and planning the shoot schedule.'
    },
    {
      step: '02',
      title: 'Location Scouting & Casting',
      desc: 'Securing permits, scouting filming locations, selecting talent/models, and staging props.'
    },
    {
      step: '03',
      title: 'Cinema Production Shoot',
      desc: 'On-set filming with our full in-house crew: Director, Cinematographer, Gaffer, and Sound Engineer.'
    },
    {
      step: '04',
      title: 'Editing, Color & Sound Polish',
      desc: 'Assembly cutting, DaVinci Resolve color correction, audio restoration, music licensing, and motion graphics.'
    },
    {
      step: '05',
      title: 'Master Delivery & Formats',
      desc: 'Delivering full-resolution 4K master files formatted for web, social media (16:9 & 9:16), and broadcast.'
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
        <img className="smm-bg-img" src={bg1} alt="" />
      </div>
      <div className="smm-bg-watermark-right">
        <img className="smm-bg-img" src={bg2} alt="" />
      </div>

      {/* ====================================================
          1. HERO SECTION (Light Theme)
      ==================================================== */}
      <section className="smm-hero-section">
        <div className="smm-hero-content" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge">
            <span className="smm-badge-dot"></span>
            CINEMATOGRAPHY & VISUAL STORYTELLING
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Professional <br /> Videography
          </h1>

          <p className="smm-hero-desc">
            Capture your brand's essence with cinema-grade videography. From high-impact brand commercials
            and corporate storytelling to e-commerce product reels and aerial drone cinematography.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">250+</div>
              <div className="smm-stat-label">Production Shoots</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">Cinema 4K</div>
              <div className="smm-stat-label">Ultra HD Master Output</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">100%</div>
              <div className="smm-stat-label">In-House Crew & Gear</div>
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
              CINEMA-GRADE CAPTURE
            </div>

            <h2 className="smm-feature-heading">
              Tell Your Story With <br />
              Uncompromising <br />
              Visual Impact.
            </h2>

            <p className="smm-feature-desc">
              Video is the most powerful medium to evoke emotion, build credibility, and inspire customer action.
              We combine Hollywood-grade cameras, intentional lighting, and artistic direction to make your brand unforgettable.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Cinema Optics & Dynamic Lighting</h4>
                  <p>State-of-the-art Sony FX cameras and Aputure studio lighting for stunning depth of field and color fidelity.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Full-Service In-House Production</h4>
                  <p>From scriptwriting and location scouting to directing, filming, and post-production, we manage everything.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Licensed Aerial Drone Cinematography</h4>
                  <p>Certified drone pilots capturing sweeping 4K/6K aerial vistas that give your video grand scale.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="smm-feature-right" data-aos="fade-left" data-aos-duration="1200">
            <div className="smm-showcase-card">
              <img
                src={shootImg}
                alt="Professional Videography Production Showcase"
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
            From high-concept brand films to crisp e-commerce product videos, our production crew delivers excellence.
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
            PRODUCTION DISCIPLINES
          </div>
          <h2 className="smm-section-title dark">Shoots We Specialize In</h2>
          <p className="smm-section-subtitle dark">
            We adapt our camera rigs, lighting, and pacing for commercial, corporate, event, and product productions.
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
            FILMING WORKFLOW
          </div>
          <h2 className="smm-section-title">How We Shoot Your Video</h2>
          <p className="smm-section-subtitle">
            A seamless 5-step production journey from concept script to master broadcast delivery.
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
            <img className="bg-txt11" src={greybg} alt="" />
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
