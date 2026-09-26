import { useState, useEffect } from 'react';
import './VideoEditing.css';
import bg1 from '../../../images/bg-text1.svg';
import bg2 from '../../../images/bg-text2.svg';
import greybg from '../../../images/grey-text.svg';
import videoEditImg from '../../../images/VideoEditing.webp';
import Footerel from '../../Page2/Lfooter/Lfooter';

const VideoEditing = () => {
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
      title: 'Short-Form Viral Reels & Shorts',
      desc: 'High-retention editing with kinetic typography, punchy sound design, and viral hooks engineered for TikTok, Instagram Reels, and YouTube Shorts.',
      points: [
        '3-Second Scroll-Stopping Visual Hooks',
        'Kinetic Animated Subtitles & Emojis',
        'Dynamic B-Roll Pacing & Sound Effects (SFX)'
      ]
    },
    {
      num: '02',
      title: 'YouTube & Long-Form Video Editing',
      desc: 'Engaging episodic editing, podcast cutdowns, and documentary-style pacing that boosts viewer watch time and channel subscribers.',
      points: [
        'Engaging Story Arc & Narrative Structuring',
        'Multi-Camera Switching & Audio Clean-Up',
        'Click-Worthy Thumbnail Design Integration'
      ]
    },
    {
      num: '03',
      title: 'Commercial Ads & Product Promos',
      desc: 'Sleek, high-converting video advertisements tailored for paid media campaigns on Meta, Google, and television broadcasts.',
      points: [
        'Direct-Response Advertising Frameworks',
        'Product Feature Callouts & 3D Transitions',
        'Clear Call-to-Action Endcards'
      ]
    },
    {
      num: '04',
      title: '2D/3D Motion Graphics & Animation',
      desc: 'Custom animated lower thirds, logo reveals, infographics, and 3D product motion graphics that make your brand look world-class.',
      points: [
        'Custom After Effects & Blender Animations',
        'Data Visualization & Explainer Graphics',
        'Branded Intro/Outro Sequences'
      ]
    },
    {
      num: '05',
      title: 'Hollywood-Grade Color Grading',
      desc: 'Professional DaVinci Resolve colorist workflows to correct skin tones, match camera profiles, and establish a distinct cinematic film look.',
      points: [
        'Log / RAW Footages Color Correction',
        'Custom Cinematic LUT Creation & Mood Tuning',
        'HDR & Rec.709 Color Space Mastering'
      ]
    },
    {
      num: '06',
      title: 'Pro Audio Engineering & Sound Design',
      desc: 'Crystal-clear dialogue enhancement, background noise removal, custom foley sound design, and commercial audio mastering.',
      points: [
        'Dialogue Isolation & Vocal EQ Enhancement',
        'Immersive Foley & Ambient Soundscapes',
        'Licensed Commercial Music Licensing'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Reels, TikTok & Shorts',
      type: 'shortform',
      iconText: '📱',
      desc: 'Fast-paced, highly engaging vertical formats designed for maximum algorithmic reach and social sharing.'
    },
    {
      name: 'YouTube & Podcasts',
      type: 'longform',
      iconText: '▶',
      desc: 'In-depth long-form video editing with chapters, multi-cam sync, sound mastering, and viewer retention cues.'
    },
    {
      name: 'Brand Commercials & Ads',
      type: 'commercials',
      iconText: '🎬',
      desc: 'Broadcast-quality commercial ads engineered to tell your brand story and convert prospective buyers.'
    },
    {
      name: 'Motion Graphics & VFX',
      type: 'motion-graphics',
      iconText: '✨',
      desc: 'Cutting-edge title cards, screen replacements, 3D element tracking, and stylized visual effects.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Footage Ingestion & Script Review',
      desc: 'Receiving raw footage files, reviewing audio stems, and establishing editing guidelines and creative briefs.'
    },
    {
      step: '02',
      title: 'Assembly & Story Cut',
      desc: 'Building the foundational timeline, selecting the best takes, pacing the narrative, and syncing multi-camera angles.'
    },
    {
      step: '03',
      title: 'VFX, Titles & Motion Graphics',
      desc: 'Adding animated subtitles, sound effects, B-roll overlays, visual effects, and custom graphic transitions.'
    },
    {
      step: '04',
      title: 'Color Grading & Audio Mastering',
      desc: 'Polishing footage with DaVinci Resolve color correction, audio leveling, noise suppression, and background music.'
    },
    {
      step: '05',
      title: 'Review, Export & Multi-Format Delivery',
      desc: 'Collaborative review cycle, quick turnaround on revisions, and delivery of 4K/UHD master files in 16:9 and 9:16.'
    }
  ];

  const faqs = [
    {
      question: 'What video editing software do you use?',
      answer: 'Our post-production team uses industry-standard suites including Adobe Premiere Pro, After Effects, DaVinci Resolve Studio, and Blender to deliver cinema-quality exports.'
    },
    {
      question: 'How fast is your turnaround time for video editing?',
      answer: 'For short-form Reels, TikToks, and Shorts, our standard turnaround is 24 to 48 hours. For long-form YouTube videos and corporate commercials, delivery is typically within 3 to 5 business days.'
    },
    {
      question: 'Can you edit footage shot on smartphones as well as cinema cameras?',
      answer: 'Yes! We work with all types of footage—from 4K iPhone/Android recordings to cinema RAW files from Sony FX, RED, Blackmagic, and ARRI cameras.'
    },
    {
      question: 'Do you provide background music and sound effects (SFX)?',
      answer: 'Yes, we include 100% royalty-free, commercially licensed music and immersive sound effects (whooshes, risers, pop-ups, foley) with every project so you never face copyright claims.'
    },
    {
      question: 'How many rounds of revisions are included?',
      answer: 'We provide unlimited reasonable revisions during the review process via easy frame-by-frame timestamp feedback to ensure the final cut matches your vision.'
    },
    {
      question: 'Can you convert our long videos into multiple short Reels and Shorts?',
      answer: 'Yes! We specialize in content repurposing. We can take a single 30-minute podcast or webinar and turn it into 10+ high-energy, caption-animated viral Shorts and Reels.'
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
            CINEMATIC POST-PRODUCTION EXCELLENCE
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Professional <br /> Video Editing
          </h1>

          <p className="smm-hero-desc">
            Transform raw footage into high-retention, cinematic video masterpieces.
            We craft scroll-stopping social Reels, engaging YouTube videos, and high-impact commercial advertisements.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">5,000+</div>
              <div className="smm-stat-label">Videos Edited</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">100M+</div>
              <div className="smm-stat-label">Total Video Views</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">4K/60fps</div>
              <div className="smm-stat-label">Cinema-Grade Quality</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">24-48h</div>
              <div className="smm-stat-label">Fast Turnaround</div>
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
              ATTENTION-HOOKING EDITING
            </div>

            <h2 className="smm-feature-heading">
              Attention Is The Currency. <br />
              We Make Every <br />
              Second Count.
            </h2>

            <p className="smm-feature-desc">
              Today's viewers scroll away in less than 2 seconds. We combine psychological pacing, kinetic typography,
              and cinematic sound engineering to keep your audience hooked from the very first frame to the final CTA.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Scroll-Stopping Hooks</h4>
                  <p>Dynamic visual effects, zoom cuts, and animated captions engineered to maximize initial viewer retention.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Cinema Color & Immersive Sound</h4>
                  <p>DaVinci Resolve color grading paired with multi-layer foley sound effects for a premium broadcast feel.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Multi-Platform Repurposing</h4>
                  <p>Seamlessly export vertical 9:16 Shorts, horizontal 16:9 YouTube masters, and square 1:1 ad formats.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="smm-feature-right" data-aos="fade-left" data-aos-duration="1200">
            <div className="smm-showcase-card">
              <img
                src={videoEditImg}
                alt="Video Editing Post Production Showcase"
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
          <h2 className="smm-section-title">Our Video Editing Capabilities</h2>
          <p className="smm-section-subtitle">
            From viral short-form micro-content to high-end broadcast commercials, we cover full-spectrum post-production.
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
          4. SECTION 4: PLATFORMS (Dark Theme)
      ==================================================== */}
      <section className="smm-platforms-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge dark">
            <span className="smm-badge-dot"></span>
            FORMAT MASTERY
          </div>
          <h2 className="smm-section-title dark">Video Formats We Master</h2>
          <p className="smm-section-subtitle dark">
            We engineer video cuts specifically optimized for each platform's distinct aspect ratio and algorithmic requirements.
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
                {plat.iconText}
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
            POST-PRODUCTION PIPELINE
          </div>
          <h2 className="smm-section-title">How We Edit Your Videos</h2>
          <p className="smm-section-subtitle">
            A frictionless, collaborative workflow delivering polished video deliverables in record time.
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
          <h2 className="smm-section-title dark">Questions About Video Editing?</h2>
          <p className="smm-section-subtitle dark">
            Everything you need to know about turnaround times, file transfers, sound licenses, and revisions.
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
                <span className="hd1-one">Create Viral</span> Videos
              </h2>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1300">
              Give us a call. Ready to elevate your video production?
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
              Thank you for reaching out. We have received your inquiry regarding Video Editing services and will get in touch with you shortly.
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

export default VideoEditing;
