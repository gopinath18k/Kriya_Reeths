import { useState, useEffect } from 'react';
import './WebDevelopment.css';
import bg1 from '../../../images/bg-text1.svg';
import bg2 from '../../../images/bg-text2.svg';
import greybg from '../../../images/grey-text.svg';
import webDevImg from '../../../images/webdevelop.webp';
import Footerel from '../../Page2/Lfooter/Lfooter';

const WebDevelopment = () => {
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
      title: 'Custom Web & Portal Architecture',
      desc: 'High-performance websites and web applications custom-coded to match your exact brand vision and business workflows.',
      points: [
        'Modern Component Architecture (React/Next.js)',
        'Clean, Scalable & Maintainable Codebase',
        'Intuitive UI/UX and Interactive User Journeys'
      ]
    },
    {
      num: '02',
      title: 'E-Commerce & Digital Storefronts',
      desc: 'High-converting online stores built on Shopify, WooCommerce, or custom headless engines engineered for rapid checkouts.',
      points: [
        'Secure Payment Gateway & Shipping Integrations',
        'Custom Product Customizers & Filters',
        'Abandoned Cart & One-Click Checkout Flows'
      ]
    },
    {
      num: '03',
      title: 'Lightning-Fast Speed & Core Web Vitals',
      desc: 'Sub-second page loading speeds and 95+ Google PageSpeed scores that improve search rankings and drastically reduce bounce rates.',
      points: [
        'Next-Gen WebP/AVIF Image Compression',
        'Code Splitting & Server-Side Rendering (SSR)',
        'CDN Integration & Asset Caching Protocols'
      ]
    },
    {
      num: '04',
      title: 'Fully Responsive & Mobile-First Design',
      desc: 'Flawless visual rendering and seamless interactions across every device size—smartphones, tablets, laptops, and ultra-wide screens.',
      points: [
        'Fluid Typography & Dynamic Layout Grids',
        'Touch-Optimized Navigation & Gestures',
        'Cross-Browser & Cross-Device Compatibility'
      ]
    },
    {
      num: '05',
      title: 'SEO-Ready Code & Schema Markup',
      desc: 'Built-in technical SEO foundations, semantic HTML5, dynamic OpenGraph meta tags, and structured JSON-LD schema data.',
      points: [
        'Automated XML Sitemaps & Canonical Tags',
        'Rich Snippets & Search Engine Friendly URLs',
        'Fast Crawlability & Indexation Standards'
      ]
    },
    {
      num: '06',
      title: 'CMS Solutions & Ongoing Maintenance',
      desc: 'Empower your internal team with intuitive content management systems, automated backups, and 24/7 security monitoring.',
      points: [
        'Headless CMS or Easy WordPress Dashboards',
        'SSL Encryption & Firewall Security Hardening',
        'Continuous Version Updates & Technical Support'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Modern Front-End (React & Next.js)',
      type: 'react-tech',
      iconText: '⚛',
      desc: 'Interactive, lightning-fast Single Page Applications (SPA) and server-rendered modern web experiences.'
    },
    {
      name: 'Full-Stack & Custom APIs',
      type: 'fullstack-tech',
      iconText: '⚙',
      desc: 'Robust Node.js, Python, and PHP backend architectures with secure REST and GraphQL API integrations.'
    },
    {
      name: 'E-Commerce Engines',
      type: 'ecommerce-tech',
      iconText: '🛍',
      desc: 'Scalable Shopify and WooCommerce e-commerce builds designed for high product volume and frictionless checkout.'
    },
    {
      name: 'Cloud & CDN Infrastructure',
      type: 'cloud-tech',
      iconText: '☁',
      desc: 'Global cloud deployment on AWS, Vercel, and Cloudflare with 99.99% uptime and enterprise-grade security.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      desc: 'Mapping technical requirements, user flow diagrams, content structures, and tech-stack selection.'
    },
    {
      step: '02',
      title: 'UI/UX Wireframes & Prototypes',
      desc: 'Creating modern, interactive visual designs and prototypes for full client review and approval.'
    },
    {
      step: '03',
      title: 'Agile Full-Stack Coding',
      desc: 'Developing pixel-perfect responsive layouts with clean frontend logic and secure backend integrations.'
    },
    {
      step: '04',
      title: 'QA, Speed & Security Audits',
      desc: 'Rigorous cross-device testing, PageSpeed optimization, broken link checks, and vulnerability scanning.'
    },
    {
      step: '05',
      title: 'Deployment & Training',
      desc: 'Domain pointing, SSL activation, live launch, and hands-on CMS training for your internal team.'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to develop a custom website?',
      answer: 'A standard corporate website typically takes 2 to 4 weeks, while complex e-commerce platforms or custom web applications take 4 to 8 weeks. We provide clear milestone timelines during our discovery phase.'
    },
    {
      question: 'Will my website be mobile-friendly and fast loading?',
      answer: 'Yes, 100%! Every website we engineer is built mobile-first and rigorously optimized to achieve 90+ scores on Google PageSpeed Insights with sub-2-second load times.'
    },
    {
      question: 'Can I update the website content myself after launch?',
      answer: 'Absolutely. We integrate user-friendly content management systems (such as WordPress, Strapi, or custom dashboards) and provide step-by-step video tutorials so you can effortlessly update text, images, blogs, and products.'
    },
    {
      question: 'Do you provide website maintenance and support after launch?',
      answer: 'Yes, we provide ongoing maintenance packages covering security patches, plugin updates, automated daily cloud backups, uptime monitoring, and technical troubleshooting.'
    },
    {
      question: 'Is the website optimized for search engines (SEO)?',
      answer: 'Yes! We follow technical SEO best practices, including semantic HTML tags, clean URL structures, meta descriptions, image alt tags, XML sitemaps, robots.txt, and schema structured data markup.'
    },
    {
      question: 'Do I own the full copyright and code of my website?',
      answer: 'Yes, upon project completion and final settlement, 100% of the website code, domain assets, design files, and database access belong entirely to you.'
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
            ENGINEERED FOR SCALE & CONVERSIONS
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Website <br /> Development
          </h1>

          <p className="smm-hero-desc">
            We build ultra-fast, visually stunning, and conversion-focused websites engineered
            to elevate your brand identity, engage visitors, and generate consistent business revenue.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">150+</div>
              <div className="smm-stat-label">Websites Delivered</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">&lt; 1.2s</div>
              <div className="smm-stat-label">Average Load Speed</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">99.9%</div>
              <div className="smm-stat-label">Uptime & Reliability</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">100%</div>
              <div className="smm-stat-label">Mobile Responsive</div>
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
              DIGITAL FLAGSHIP EXPERIENCES
            </div>

            <h2 className="smm-feature-heading">
              Your Website Is Your <br />
              #1 Salesperson. <br />
              Make It Unstoppable.
            </h2>

            <p className="smm-feature-desc">
              Your website is often the first impression a prospect has of your company. We combine cutting-edge
              web technologies with aesthetic brilliance to turn casual visitors into loyal paying customers.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Next-Generation Speed</h4>
                  <p>Lightning-fast page loads that satisfy both impatient visitors and demanding search engine algorithms.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Conversion-Optimized UI/UX</h4>
                  <p>Strategic layout architecture designed to guide visitors smoothly toward booking a call or making a purchase.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Bulletproof Security & Clean Code</h4>
                  <p>SSL encryption, anti-malware protections, and scalable modular code that grows alongside your business.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="smm-feature-right" data-aos="fade-left" data-aos-duration="1200">
            <div className="smm-showcase-card">
              <img
                src={webDevImg}
                alt="Website Development Showcase"
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
          <h2 className="smm-section-title">Our Web Development Capabilities</h2>
          <p className="smm-section-subtitle">
            From high-converting corporate portals to complex e-commerce engines, we deliver end-to-end web excellence.
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
          4. SECTION 4: TECHNOLOGIES (Dark Theme)
      ==================================================== */}
      <section className="smm-platforms-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge dark">
            <span className="smm-badge-dot"></span>
            MODERN TECH STACK
          </div>
          <h2 className="smm-section-title dark">Technologies We Master</h2>
          <p className="smm-section-subtitle dark">
            We leverage industry-standard modern frameworks and cloud tools to build resilient, future-proof web experiences.
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
            DEVELOPMENT LIFECYCLE
          </div>
          <h2 className="smm-section-title">How We Build Your Website</h2>
          <p className="smm-section-subtitle">
            A structured, transparent 5-step engineering process that ensures on-time and on-budget delivery.
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
          <h2 className="smm-section-title dark">Questions About Web Development?</h2>
          <p className="smm-section-subtitle dark">
            Find clear answers to common questions regarding timelines, technologies, pricing, and post-launch maintenance.
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
                <span className="hd1-one">Build Your</span> Dream Website
              </h2>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1300">
              Give us a call. Ready to launch your digital flagship?
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
              Thank you for reaching out. We have received your inquiry regarding Website Development services and will get in touch with you shortly.
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

export default WebDevelopment;
