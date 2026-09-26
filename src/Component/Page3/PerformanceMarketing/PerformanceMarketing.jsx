import { useState, useEffect } from 'react';
import './PerformanceMarketing.css';
import bg1 from '../../../images/bg-text1.svg';
import bg2 from '../../../images/bg-text2.svg';
import greybg from '../../../images/grey-text.svg';
import ppcImg from '../../../images/ppc.webp';
import Footerel from '../../Page2/Lfooter/Lfooter';

const PerformanceMarketing = () => {
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
      title: 'Google Ads & Search Campaigns',
      desc: 'High-intent search, shopping, and Performance Max campaigns targeting users ready to buy.',
      points: [
        'Keyword Bidding & Negative Match Strategy',
        'Performance Max & Smart Bidding Setup',
        'Quality Score & Conversion Rate Optimization'
      ]
    },
    {
      num: '02',
      title: 'Meta Paid Ads (Instagram & Facebook)',
      desc: 'Full-funnel paid advertising with custom lookalike audiences and dynamic product catalogs.',
      points: [
        'Advantage+ Creative & Audience Scaling',
        'High-Converting Carousel & Video Ads',
        'Precision Retargeting & Cart Recovery'
      ]
    },
    {
      num: '03',
      title: 'Landing Page & Funnel Optimization',
      desc: 'Speed-optimized, high-converting landing pages tailored specifically to maximize ad click-to-lead rates.',
      points: [
        'A/B Split Testing & Heatmap Analysis',
        'Frictionless Lead Capture Forms',
        'Persuasive Copywriting & Compelling CTAs'
      ]
    },
    {
      num: '04',
      title: 'LinkedIn B2B Lead Generation',
      desc: 'Laser-targeted B2B campaigns reaching C-level decision-makers and high-ticket enterprise buyers.',
      points: [
        'Job Title, Industry & Company Size Targeting',
        'InMail & Lead Gen Form Campaigns',
        'Account-Based Marketing (ABM) Frameworks'
      ]
    },
    {
      num: '05',
      title: 'Multi-Touch Tracking & Server-Side Pixel',
      desc: 'First-party data tracking, Conversions API (CAPI), and custom attribution models for zero data loss.',
      points: [
        'Meta CAPI & Google Tag Manager Setup',
        'GA4 Custom Funnel & Event Tracking',
        'Accurate Cross-Channel ROI Attribution'
      ]
    },
    {
      num: '06',
      title: 'Creative Testing & ROAS Scaling',
      desc: 'Continuous creative iteration to beat ad fatigue and aggressively scale profitable ad campaigns.',
      points: [
        'Hook, Angle & Format Multi-Variant Tests',
        'Budget Reallocation to Top Performers',
        'Weekly Transparent ROAS & Cost-Per-Lead Reports'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Google Ads (Search & PMax)',
      type: 'google-ads',
      iconText: 'G',
      desc: 'Capture high-intent search queries, Google Shopping buyers, and scalable Performance Max audiences.'
    },
    {
      name: 'Meta Ads (Instagram & FB)',
      type: 'meta-ads',
      iconText: 'M',
      desc: 'Scale customer acquisition with algorithm-driven creatives, lookalike audiences, and automated retargeting.'
    },
    {
      name: 'LinkedIn Sponsored Content',
      type: 'linkedin-ads',
      iconText: 'in',
      desc: 'Target key corporate decision-makers, executives, and enterprise accounts with high-trust B2B advertising.'
    },
    {
      name: 'Programmatic & Display',
      type: 'programmatic',
      iconText: '⚡',
      desc: 'High-frequency omni-channel retargeting and native display advertising across premium media networks.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Audit & Market Research',
      desc: 'In-depth analysis of past ad accounts, competitor positioning, target personas, and unit economics.'
    },
    {
      step: '02',
      title: 'Tracking & Pixel Setup',
      desc: 'Deploying server-side CAPI, GA4 event pipelines, and conversion tracking before spending a single rupee.'
    },
    {
      step: '03',
      title: 'Creative & Funnel Build',
      desc: 'Designing high-impact ad creatives, writing benefit-driven copy, and launching dedicated landing pages.'
    },
    {
      step: '04',
      title: 'A/B Testing & Validation',
      desc: 'Testing multiple audiences, hooks, and bidding models to identify winning ads with lowest cost per lead.'
    },
    {
      step: '05',
      title: 'Scale & Maximize ROAS',
      desc: 'Increasing ad budgets on top performers, horizontal scaling, and optimizing for compounding returns.'
    }
  ];

  const faqs = [
    {
      question: 'What is the difference between Performance Marketing and traditional advertising?',
      answer: 'Performance Marketing is 100% data-driven and results-oriented. Unlike traditional advertising where you pay for exposure with uncertain results, performance marketing focuses on measurable actions—such as qualified leads, sales, and app installs—ensuring every rupee spent delivers a trackable Return on Ad Spend (ROAS).'
    },
    {
      question: 'How quickly can we see results from PPC campaigns?',
      answer: 'Because paid campaigns generate immediate traffic upon activation, you can start seeing targeted leads and sales within the very first 24 to 48 hours of launch. Over the following 2 to 4 weeks, our continuous algorithm learning and A/B testing further drops your acquisition costs.'
    },
    {
      question: 'What ad spend budget do we need to start?',
      answer: 'We customize ad spend strategies based on your industry, goals, and target audience. Whether you are starting with ₹25,000/month or scaling past ₹10,00,000/month, we optimize every campaign to maximize efficiency and achieve a positive ROI.'
    },
    {
      question: 'Do you create the ad creatives and landing pages as well?',
      answer: 'Yes! Our performance marketing service includes end-to-end creative design, video ad editing, persuasive copywriting, and high-converting landing page optimization so you don’t need to coordinate with multiple agencies.'
    },
    {
      question: 'How do you prevent ad fatigue and rising ad costs?',
      answer: 'We implement weekly creative testing cycles where we produce fresh hooks, angles, video variations, and headlines. We phase out saturated creatives before performance drops, keeping your ad frequency healthy and costs per acquisition low.'
    },
    {
      question: 'How do we track our campaign performance and ROI?',
      answer: 'You will have access to real-time performance dashboards and receive comprehensive weekly/monthly reports covering Cost Per Click (CPC), Cost Per Lead (CPL), Customer Acquisition Cost (CAC), and overall ROAS.'
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
            DATA-DRIVEN ROI & GROWTH
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Performance <br /> Marketing (PPC)
          </h1>

          <p className="smm-hero-desc">
            Drive targeted buyer traffic, high-intent qualified leads, and maximum Return on Ad Spend (ROAS)
            with precision paid advertising across Google, Meta, and high-performing digital channels.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">10x+</div>
              <div className="smm-stat-label">Average Client ROAS</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">₹25Cr+</div>
              <div className="smm-stat-label">Ad Spend Managed</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">500+</div>
              <div className="smm-stat-label">Profitable Campaigns</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">99.2%</div>
              <div className="smm-stat-label">Client Retention</div>
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
              PROFITABLE PAID ACQUISITION
            </div>

            <h2 className="smm-feature-heading">
              Stop Wasting Ad Budget. <br />
              Scale With Precision <br />
              Performance Ads.
            </h2>

            <p className="smm-feature-desc">
              Many agencies burn budgets on vanity clicks. We build high-converting performance funnels engineered
              for bottom-line revenue, lower cost-per-acquisition, and compounding return on ad spend.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Intent-Based Targeting</h4>
                  <p>Target active buyers exactly when they search for your solutions or show high purchase intent.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Scientific A/B Creative Testing</h4>
                  <p>Systematically test dozens of hooks, copy variants, and landing page angles to find runaway winners.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Server-Side Conversion Tracking</h4>
                  <p>Flawless Meta CAPI and GA4 tracking ensures 100% data visibility despite browser cookie restrictions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="smm-feature-right" data-aos="fade-left" data-aos-duration="1200">
            <div className="smm-showcase-card">
              <img
                src={ppcImg}
                alt="Performance Marketing PPC Showcase"
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
          <h2 className="smm-section-title">Our Performance Capabilities</h2>
          <p className="smm-section-subtitle">
            From search intent capture to multi-channel dynamic retargeting, our full-stack ad solutions drive scalable revenue.
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
          4. SECTION 4: PLATFORMS WE DOMINATE (Dark Theme)
      ==================================================== */}
      <section className="smm-platforms-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge dark">
            <span className="smm-badge-dot"></span>
            HIGH-CONVERTING CHANNELS
          </div>
          <h2 className="smm-section-title dark">Channels We Dominate</h2>
          <p className="smm-section-subtitle dark">
            We deploy targeted ad spend across top digital ad platforms to capture demand wherever your customers browse.
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
            OUR PROVEN METHODOLOGY
          </div>
          <h2 className="smm-section-title">How We Scale Your ROI</h2>
          <p className="smm-section-subtitle">
            A battle-tested 5-step framework engineered for profitable, predictable customer acquisition.
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
          <h2 className="smm-section-title dark">Questions About Performance Marketing?</h2>
          <p className="smm-section-subtitle dark">
            Everything you need to know about our PPC strategies, ad spend allocation, and tracking.
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
                <span className="hd1-one">Scale Your</span> Revenue
              </h2>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1300">
              Give us a call. Ready to maximize your ad spend ROI?
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
              Thank you for reaching out. We have received your inquiry regarding Performance Marketing services and will get in touch with you shortly.
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

export default PerformanceMarketing;
