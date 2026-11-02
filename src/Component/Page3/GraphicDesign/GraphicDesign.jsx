import { useState, useEffect } from 'react';
import './GraphicDesign.css';
import bg1 from '../../../images/bg-text1.svg';
import bg2 from '../../../images/bg-text2.svg';
import greybg from '../../../images/grey-text.svg';
import designImg from '../../../images/design.webp';
import badgeIcon from '../../../images/badge.png';
import socialMediaIcon from '../../../images/social-media.png';
import brochureIcon from '../../../images/brochure.png';
import creativeIcon from '../../../images/creative.png';
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
      title: 'Brand Identity & Logo Design',
      desc: 'Create memorable logos and cohesive brand identity systems that communicate your brand values, establish recognition, and build a consistent visual presence.',
      points: [
        'Custom Vector Logo Design & Iconography',
        'Typography Selection & Brand Color Palettes',
        'Complete Brand Guidelines & Style Guides'
      ]
    },
    {
      num: '02',
      title: 'Social Media Graphic Design',
      desc: 'Capture audience attention with engaging social media posts, carousel designs, and Story creatives tailored to your brand and marketing objectives.',
      points: [
        'Multi-Slide Informative Carousel Designs',
        'Creative Quote Graphics & Infographics',
        'Platform-Specific Designs for Instagram, LinkedIn & Facebook'
      ]
    },
    {
      num: '03',
      title: 'Marketing Materials & Print Design',
      desc: 'Present your business professionally with well-designed brochures, flyers, business cards, catalogs, and corporate presentations.',
      points: [
        'High-Resolution, Print-Ready CMYK Files',
        'Custom Packaging Layouts & Finishing Designs',
        'Corporate Stationery & Presentation Materials'
      ]
    },
    {
      num: '04',
      title: 'Product Packaging & Label Design',
      desc: 'Develop visually appealing packaging and product labels that communicate product value, strengthen shelf presence, and create a memorable customer experience.',
      points: [
        '3D Packaging Mockups & Product Visualizations',
        'Product Information & Nutritional Label Layouts',
        'Custom Box, Pouch & Bottle Label Designs'
      ]
    },
    {
      num: '05',
      title: 'Digital Advertising Creatives & Banners',
      desc: 'Create compelling advertising visuals for Meta and Google campaigns, combining clear messaging and strategic layouts to support clicks and conversions.',
      points: [
        'Attention-Grabbing Visual Hierarchy & Layouts',
        'Responsive Display Ad Sizes & Formats',
        'Benefit-Focused Messaging & Creative Concepts'
      ]
    },
    {
      num: '06',
      title: 'UI/UX Visual Assets & Icon Design',
      desc: 'Enhance digital experiences with clean interface graphics, custom icons, illustrations, and visual elements designed for websites and applications.',
      points: [
        'Custom Vector Illustrations & Icon Sets',
        'Figma-Based Design Systems & Style Guides',
        'Website & App Graphics for Better User Experience'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Brand Identity & Logo Design',
      type: 'branding-design',
      iconImg: badgeIcon,
      desc: 'Develop distinctive brand identities through custom logo designs, carefully selected typography, and cohesive color palettes that establish brand recognition and create a consistent visual presence.'
    },
    {
      name: 'Social Media & Advertising Creatives',
      type: 'social-design',
      iconImg: socialMediaIcon,
      desc: 'Create engaging social media posts, carousel designs, promotional banners, and digital advertising creatives tailored to your brand and marketing objectives across major digital platforms.'
    },
    {
      name: 'Print Design, Brochures & Packaging',
      type: 'print-design',
      iconImg: brochureIcon,
      desc: 'Design professional brochures, company profiles, product catalogs, packaging layouts, flyers, and corporate stationery with high-quality, print-ready specifications.'
    },
    {
      name: 'UI/UX Design & Digital Illustrations',
      type: 'ui-design',
      iconImg: creativeIcon,
      desc: 'Enhance digital experiences with user-friendly interface designs, website graphics, informative infographics, custom vector illustrations, and branded icon sets.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Creative Discovery & Design Brief',
      desc: 'Understand your brand values, target audience, competitors, visual preferences, and business objectives to establish a clear creative direction.'
    },
    {
      step: '02',
      title: 'Moodboards & Concept Development',
      desc: 'Explore creative directions through moodboards, typography styles, color combinations, and initial design concepts that align with your brand vision.'
    },
    {
      step: '03',
      title: 'Design Refinement & Vector Creation',
      desc: 'Transform selected concepts into polished, high-quality designs using professional tools such as Adobe Illustrator, Photoshop, and Figma.'
    },
    {
      step: '04',
      title: 'Mockups & Visual Presentation',
      desc: 'Preview designs across product mockups, digital screens, and print materials to evaluate their appearance and ensure visual consistency across applications.'
    },
    {
      step: '05',
      title: 'Final Design Delivery',
      desc: 'Receive organized design files, including editable source formats where applicable, scalable vector files such as AI, EPS, and SVG, high-resolution PNG/JPG images, and print-ready PDF files.'
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
            CREATIVE VISUAL IDENTITY & DESIGN EXCELLENCE
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Graphic Design <br /> Services
          </h1>

          <p className="smm-hero-desc">
            Create memorable brand identities, engaging social media creatives, and professional marketing materials that capture attention, strengthen brand recognition, and help your business stand out from the competition.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">1,200+</div>
              <div className="smm-stat-label">Creative Assets Designed</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">300+</div>
              <div className="smm-stat-label">Brand Identities Created</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">100%</div>
              <div className="smm-stat-label">Custom Vector Artwork</div>
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
              Design That Makes an Impression. <br />
              Creativity That Drives Results.
            </h2>

            <p className="smm-feature-desc">
              Effective design builds trust, differentiates your business, and communicates your message at a glance. We combine creative expertise with strategic thinking to develop visually compelling designs that strengthen your brand identity and support your marketing goals.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Consistent Brand Identity</h4>
                  <p>Maintain a cohesive visual identity across digital advertisements, print materials, packaging, websites, and social media platforms.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Marketing Creatives That Engage</h4>
                  <p>Use strategic visual hierarchy, compelling typography, and purposeful layouts to capture attention and highlight your key messages and calls to action.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Professional Print Design & Vector Artwork</h4>
                  <p>Create scalable vector graphics and print-ready CMYK layouts with appropriate bleed settings, dimensions, and resolution for professional-quality output.</p>
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
            From distinctive brand identities to professional packaging and digital marketing creatives, we deliver comprehensive graphic design solutions tailored to your business needs.
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
            CREATIVE DESIGN EXPERTISE
          </div>
          <h2 className="smm-section-title dark">Our Graphic Design Capabilities</h2>
          <p className="smm-section-subtitle dark">
            We provide creative design solutions for digital platforms, print media, product packaging, and brand communication. Every design is developed to reflect your brand identity, communicate your message clearly, and create a consistent visual experience across different platforms.
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
            DESIGN WORKFLOW
          </div>
          <h2 className="smm-section-title">How We Create Your Designs</h2>
          <p className="smm-section-subtitle">
            A collaborative five-step creative process that transforms your ideas into impactful visual assets aligned with your brand identity.
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
