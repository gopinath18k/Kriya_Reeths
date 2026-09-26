import { useState, useEffect } from 'react';
import './GraphicDesign.css';
import bg1 from '../../../images/bg-text1.svg';
import bg2 from '../../../images/bg-text2.svg';
import greybg from '../../../images/grey-text.svg';
import designImg from '../../../images/design.webp';
import Footerel from '../../Page2/Lfooter/Lfooter';

const GraphicDesign = () => {
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
      title: 'Brand Identity & Logo Systems',
      desc: 'Distinctive, memorable logo marks and complete brand identity guidelines that tell your brand story and command industry authority.',
      points: [
        'Vector Logo Design & Iconography',
        'Typography Hierarchy & Color Palettes',
        'Comprehensive Brand Style Guide Books'
      ]
    },
    {
      num: '02',
      title: 'High-Converting Social Media Creatives',
      desc: 'Engaging, modern carousel graphics, feed post templates, and Story designs tailored to trigger high engagement and saves.',
      points: [
        'Multi-Slide Educational Carousels',
        'Viral Quote & Infographic Templates',
        'Platform-Optimized Formats (IG, LinkedIn, FB)'
      ]
    },
    {
      num: '03',
      title: 'Marketing Collateral & Print Design',
      desc: 'Premium brochures, flyers, business cards, corporate pitch decks, and catalogs engineered for tangible real-world impact.',
      points: [
        'Print-Ready CMYK High-Res Deliverables',
        'Die-Cut & Special Finish Packaging Layouts',
        'Corporate Stationery & Presentation Decks'
      ]
    },
    {
      num: '04',
      title: 'Packaging & Label Architecture',
      desc: 'Shelf-stopping product packaging and label designs that captivate retail shoppers and elevate the unboxing experience.',
      points: [
        '3D Packaging Mockups & Visualizations',
        'Compliance & Nutritional Label Layouts',
        'D2C Box, Pouch & Bottle Wrap Designs'
      ]
    },
    {
      num: '05',
      title: 'Digital Advertising Banners & Creatives',
      desc: 'Performance-engineered ad banners and display assets designed specifically to increase click-through rates (CTR) on Meta and Google.',
      points: [
        'High-Contrast Visual Hierarchies',
        'Responsive Display Ad Dimension Sets',
        'Emotional & Benefit-Driven Layouts'
      ]
    },
    {
      num: '06',
      title: 'UI/UX Visual Design & Iconography',
      desc: 'Clean, modern digital interface assets, custom icon sets, hero illustrations, and visual elements that enhance web user experience.',
      points: [
        'Custom Vector Illustration & Icons',
        'Figma Design Systems & Style Guides',
        'Engaging Web & App Micro-Graphics'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Brand Identity & Logos',
      type: 'branding-design',
      iconText: '🎨',
      desc: 'Timeless logo marks, typography standards, and cohesive color systems that create lasting brand equity.'
    },
    {
      name: 'Social Media & Ad Creatives',
      type: 'social-design',
      iconText: '📱',
      desc: 'Eye-catching social posts, carousels, and high-CTR paid advertisement graphics for all digital platforms.'
    },
    {
      name: 'Print, Brochures & Packaging',
      type: 'print-design',
      iconText: '📦',
      desc: 'Print-ready corporate brochures, product packaging, catalogs, and luxury business stationery.'
    },
    {
      name: 'UI/UX & Digital Illustrations',
      type: 'ui-design',
      iconText: '✨',
      desc: 'Modern web UI assets, infographic diagrams, vector illustrations, and custom brand icon libraries.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Creative Discovery & Brief',
      desc: 'Understanding your brand values, target audience demographics, competitor visual landscape, and design objectives.'
    },
    {
      step: '02',
      title: 'Moodboarding & Concept Sketches',
      desc: 'Exploring multiple visual directions, typography moods, color harmonies, and foundational rough drafts.'
    },
    {
      step: '03',
      title: 'Vectorization & Design Polishing',
      desc: 'Refining chosen concepts into pixel-perfect vector artwork using Adobe Illustrator, Photoshop, and Figma.'
    },
    {
      step: '04',
      title: '3D Mockups & Real-World Context',
      desc: 'Testing designs on realistic 3D product mockups, digital screens, and print formats to ensure visual excellence.'
    },
    {
      step: '05',
      title: 'Final Master Asset Delivery',
      desc: 'Exporting complete packages including vector source files (AI, EPS, SVG, PSD), high-res PNG/JPG, and print PDFs.'
    }
  ];

  const faqs = [
    {
      question: 'What design tools do your graphic designers use?',
      answer: 'Our senior design team utilizes industry-standard professional tools including Adobe Illustrator, Photoshop, InDesign, Figma, and Blender for 3D visualizations.'
    },
    {
      question: 'Will I receive editable source files for the designs?',
      answer: 'Yes, 100%! Upon project completion, we provide all raw vector source files (AI, EPS, SVG, PSD, Figma) along with print-ready PDFs and web-optimized JPG/PNG formats.'
    },
    {
      question: 'How many design concepts and revisions do we get?',
      answer: 'We typically present 3 to 5 distinct initial concepts. Once you select your favorite direction, we provide unlimited rounds of fine-tuning revisions until you are 100% delighted.'
    },
    {
      question: 'How long does a brand identity or logo design project take?',
      answer: 'A comprehensive brand identity project takes between 1 and 2 weeks, while social media creative bundles or marketing brochures are delivered in 2 to 4 business days.'
    },
    {
      question: 'Can you design for both digital screens and physical print?',
      answer: 'Yes! We create color-profiled files for both RGB (digital screens, social media, web) and CMYK (commercial offset and digital printing) with precise bleed and crop marks.'
    },
    {
      question: 'Do I own the full intellectual property (IP) and copyright?',
      answer: 'Yes, full commercial copyright and ownership rights transfer completely to your business upon project completion and final payment.'
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
            WORLD-CLASS VISUAL IDENTITY & DESIGN
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Creative <br /> Graphic Design
          </h1>

          <p className="smm-hero-desc">
            Craft impactful visual identities, thumb-stopping social media creatives, and premium marketing collateral
            that leave an indelible impression and elevate your brand above the competition.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">1,200+</div>
              <div className="smm-stat-label">Brand Assets Designed</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">300+</div>
              <div className="smm-stat-label">Brand Identities Built</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">100%</div>
              <div className="smm-stat-label">Vector & Custom Art</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">99.7%</div>
              <div className="smm-stat-label">Client Approval Rate</div>
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
              VISUAL COMMUNICATION MASTERY
            </div>

            <h2 className="smm-feature-heading">
              Design Isn't Just How <br />
              It Looks. It's How <br />
              It Converts.
            </h2>

            <p className="smm-feature-desc">
              Great design builds instant trust, differentiates your business, and communicates complex value in a split second.
              We blend artistic mastery with commercial psychology to create designs that command attention and drive revenue.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Distinctive Brand Cohesion</h4>
                  <p>Unified visual language across digital ads, print materials, packaging, and social media channels.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Conversion-Focused Creatives</h4>
                  <p>Strategic visual hierarchy and typography designed to draw the eye directly to your key value props and CTAs.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Print-Ready Precision & Vector Art</h4>
                  <p>100% scalable vector files and meticulously prepared CMYK layouts with proper bleeds and resolution.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="smm-feature-right" data-aos="fade-left" data-aos-duration="1200">
            <div className="smm-showcase-card">
              <img
                src={designImg}
                alt="Graphic Design & Branding Showcase"
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
          <h2 className="smm-section-title">Our Graphic Design Capabilities</h2>
          <p className="smm-section-subtitle">
            From foundational brand identities to packaging and multi-channel digital assets, we provide end-to-end design excellence.
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
          4. SECTION 4: DOMAINS (Dark Theme)
      ==================================================== */}
      <section className="smm-platforms-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge dark">
            <span className="smm-badge-dot"></span>
            CREATIVE DOMAINS
          </div>
          <h2 className="smm-section-title dark">Creative Disciplines We Master</h2>
          <p className="smm-section-subtitle dark">
            We deliver tailored visual solutions crafted for digital screens, retail packaging, and commercial print.
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
            DESIGN WORKFLOW
          </div>
          <h2 className="smm-section-title">How We Design Your Assets</h2>
          <p className="smm-section-subtitle">
            A collaborative 5-step creative process that transforms concepts into unforgettable visual brand assets.
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
          <h2 className="smm-section-title dark">Questions About Graphic Design?</h2>
          <p className="smm-section-subtitle dark">
            Find answers to common questions regarding design packages, source files, timelines, and print preparation.
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
                <span className="hd1-one">Elevate Your</span> Visual Identity
              </h2>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1300">
              Give us a call. Ready to create iconic designs?
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
              Thank you for reaching out. We have received your inquiry regarding Graphic Design services and will get in touch with you shortly.
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

export default GraphicDesign;
