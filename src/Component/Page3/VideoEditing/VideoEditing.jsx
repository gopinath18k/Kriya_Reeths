import { useState, useEffect } from 'react';
import './VideoEditing.css';
import bg1 from '../../../images/bg-text1.svg';
import bg2 from '../../../images/bg-text2.svg';
import greybg from '../../../images/grey-text.svg';
import videoEditImg from '../../../images/VideoEditing.webp';
import reelIcon from '../../../images/reel.png';
import youtubeIcon from '../../../images/youtube.png';
import adwordsIcon from '../../../images/adwords.png';
import motionGraphicIcon from '../../../images/motion-graphic.png';
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
      title: 'Short-Form Reels & YouTube Shorts',
      desc: 'Create engaging short-form videos with dynamic typography, impactful sound design, and attention-grabbing hooks for Instagram Reels and YouTube Shorts.',
      points: [
        'Attention-Grabbing Opening Hooks',
        'Animated Subtitles & Motion Graphics',
        'Dynamic B-Roll Editing & Sound Effects (SFX)'
      ]
    },
    {
      num: '02',
      title: 'YouTube & Long-Form Video Editing',
      desc: 'Produce engaging videos, podcast edits, and documentary-style content designed to maintain viewer interest and support channel growth.',
      points: [
        'Storytelling & Narrative Structuring',
        'Multi-Camera Editing & Audio Enhancement',
        'Engaging Thumbnail Design Integration'
      ]
    },
    {
      num: '03',
      title: 'Commercial Ads & Product Videos',
      desc: 'Create compelling video advertisements for digital marketing campaigns across Meta, Google, and other relevant advertising platforms.',
      points: [
        'Conversion-Focused Advertising Concepts',
        'Product Highlights & Creative Transitions',
        'Clear Call-to-Action End Screens'
      ]
    },
    {
      num: '04',
      title: 'Motion Graphics & Animation',
      desc: 'Enhance your brand videos with custom animations, logo reveals, infographics, and motion graphics that communicate ideas effectively.',
      points: [
        'After Effects & 3D Animation',
        'Data Visualization & Explainer Graphics',
        'Branded Intro & Outro Sequences'
      ]
    },
    {
      num: '05',
      title: 'Professional Color Grading',
      desc: 'Enhance visual quality with professional color correction and grading workflows that create consistent tones and distinctive cinematic styles.',
      points: [
        'Log & RAW Footage Color Correction',
        'Custom Color Looks & Mood Enhancement',
        'HDR & Rec.709 Color Exporting'
      ]
    },
    {
      num: '06',
      title: 'Audio Enhancement & Sound Design',
      desc: 'Deliver clear, balanced audio with dialogue enhancement, background noise reduction, custom sound effects, and professional audio mixing.',
      points: [
        'Dialogue Cleanup & Vocal Enhancement',
        'Foley Effects & Ambient Sound Design',
        'Licensed Music Selection & Audio Mixing'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Reels, TikTok & Shorts',
      type: 'shortform',
      iconImg: reelIcon,
      desc: 'Create engaging vertical videos optimized for Instagram Reels, TikTok, and YouTube Shorts, featuring dynamic cuts, captions, transitions, and platform-friendly formats.'
    },
    {
      name: 'YouTube Videos & Podcasts',
      type: 'longform',
      iconImg: youtubeIcon,
      desc: 'Produce polished long-form content with professional editing, multi-camera synchronization, audio enhancement, chapter markers, and visual elements that support viewer engagement.'
    },
    {
      name: 'Brand Commercials & Advertisements',
      type: 'commercials',
      iconImg: adwordsIcon,
      desc: 'Create professional promotional videos and brand advertisements with compelling storytelling, refined editing, color grading, and visual elements that communicate your brand message effectively.'
    },
    {
      name: 'Motion Graphics & Visual Effects',
      type: 'motion-graphics',
      iconImg: motionGraphicIcon,
      desc: 'Enhance video content with animated titles, custom graphics, visual transitions, compositing, screen replacements, and creative effects that add depth and visual appeal.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Footage Review & Creative Brief',
      desc: 'Collect raw footage, review audio files, understand project requirements, and define the editing style and creative direction.'
    },
    {
      step: '02',
      title: 'Timeline Assembly & Storytelling',
      desc: 'Build the initial timeline, select the strongest takes, refine the narrative flow, and synchronize multi-camera footage for a seamless viewing experience.'
    },
    {
      step: '03',
      title: 'Visual Effects, Titles & Motion Graphics',
      desc: 'Enhance your videos with animated subtitles, engaging sound effects, B-roll overlays, visual effects, and customized graphic transitions.'
    },
    {
      step: '04',
      title: 'Color Grading & Audio Enhancement',
      desc: 'Refine visuals with professional color correction, balance audio levels, reduce background noise, and integrate suitable background music.'
    },
    {
      step: '05',
      title: 'Final Review & Multi-Format Delivery',
      desc: 'Review edits collaboratively, incorporate requested revisions, and deliver optimized video files in 4K/UHD quality across formats such as 16:9 and 9:16.'
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
            CREATIVE BRANDING & VISUAL EXCELLENCE
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Branding Agency in <br /> Coimbatore
          </h1>

          <p className="smm-hero-desc">
            Transform your brand identity with creative design and strategic visual storytelling. As a branding agency in Coimbatore, we create impactful brand identities, engaging video content, and compelling advertising creatives that help businesses stand out.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">5,000+</div>
              <div className="smm-stat-label">Creative Assets Delivered</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">100M+</div>
              <div className="smm-stat-label">Potential Audience Reach</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">4K/60fps</div>
              <div className="smm-stat-label">Premium Video Quality</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">24–48h</div>
              <div className="smm-stat-label">Fast Creative Turnaround</div>
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
              BRANDING THAT CAPTURES ATTENTION
            </div>

            <h2 className="smm-feature-heading">
              Make Your Brand Memorable. <br />
              Turn Every Impression <br />
              Into Impact.
            </h2>

            <p className="smm-feature-desc">
              In a crowded digital marketplace, strong branding helps businesses stand apart. We combine strategic brand positioning, compelling visuals, and consistent messaging to create memorable brand experiences that connect with your audience across digital platforms.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Distinctive Brand Identity</h4>
                  <p>Build a recognizable brand with thoughtful logo design, consistent visual elements, and creative assets aligned with your business personality.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Creative Visuals & Brand Storytelling</h4>
                  <p>Combine engaging graphics, cohesive color palettes, and compelling visual narratives to communicate your brand message clearly and professionally.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Consistent Multi-Platform Branding</h4>
                  <p>Maintain a unified brand identity across Instagram Reels, YouTube videos, websites, and digital advertisements with platform-ready creative assets.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="smm-feature-right" data-aos="fade-left" data-aos-duration="1200">
            <div className="smm-showcase-card">
              <img
                src={videoEditImg}
                alt="branding agency in coimbatore"
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
            From engaging short-form social content to polished commercial advertisements, we deliver complete video post-production solutions.
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
            VIDEO FORMATS & EDITING EXPERTISE
          </div>
          <h2 className="smm-section-title dark">Video Formats We Work With</h2>
          <p className="smm-section-subtitle dark">
            We create and edit videos tailored to the unique requirements of different digital platforms. From short-form social media content to professional brand commercials, every video is edited with the appropriate format, pacing, and visual style to deliver an engaging viewing experience.
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
            POST-PRODUCTION PIPELINE
          </div>
          <h2 className="smm-section-title">How We Edit Your Videos</h2>
          <p className="smm-section-subtitle">
            A streamlined, collaborative workflow designed to deliver high-quality, professionally edited videos on time.
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
            <img className="bg-txt11" src={greybg} alt="digital marketing company in coimbatore" />
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
