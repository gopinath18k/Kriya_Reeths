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
      desc: 'Strategic search, shopping, and Performance Max campaigns designed to reach users actively searching for your products or services.',
      points: [
        'Keyword Bidding & Negative Keyword Strategy',
        'Performance Max & Smart Bidding Setup',
        'Quality Score & Conversion Rate Optimization'
      ]
    },
    {
      num: '02',
      title: 'Meta Paid Ads (Instagram & Facebook)',
      desc: 'Targeted advertising campaigns using audience insights, creative variations, and retargeting strategies to attract potential customers.',
      points: [
        'Advantage+ Creative & Audience Optimization',
        'High-Converting Carousel & Video Ads',
        'Precision Retargeting & Customer Re-engagement'
      ]
    },
    {
      num: '03',
      title: 'Landing Page & Funnel Optimization',
      desc: 'Conversion-focused landing pages designed to improve user experience, reduce friction, and turn more ad clicks into qualified leads.',
      points: [
        'A/B Testing & User Behavior Analysis',
        'Streamlined Lead Capture Forms',
        'Persuasive Copywriting & Clear CTAs'
      ]
    },
    {
      num: '04',
      title: 'LinkedIn B2B Lead Generation',
      desc: 'Targeted B2B advertising campaigns that connect businesses with relevant professionals, decision-makers, and potential enterprise clients.',
      points: [
        'Job Title, Industry & Company Size Targeting',
        'Sponsored Messaging & Lead Generation Forms',
        'Account-Based Marketing (ABM) Strategies'
      ]
    },
    {
      num: '05',
      title: 'Conversion Tracking & Attribution',
      desc: 'Reliable conversion measurement using analytics tools, tracking integrations, and attribution methods to better understand campaign performance.',
      points: [
        'Meta CAPI & Google Tag Manager Setup',
        'GA4 Event & Funnel Tracking',
        'Cross-Channel Performance Attribution'
      ]
    },
    {
      num: '06',
      title: 'Creative Testing & ROAS Scaling',
      desc: 'Continuous campaign testing and optimization to reduce ad fatigue, improve advertising efficiency, and scale profitable campaigns.',
      points: [
        'Hook, Angle & Creative Format Testing',
        'Budget Allocation Based on Performance',
        'Regular ROAS & Cost-Per-Lead Reporting'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Google Ads (Search, Display & Performance Max)',
      type: 'google-ads',
      iconText: 'G',
      desc: 'Reach potential customers when they actively search for your products or services. Use search, display, shopping, and Performance Max campaigns to increase visibility, attract relevant traffic, and generate enquiries.'
    },
    {
      name: 'Meta Ads (Instagram & Facebook)',
      type: 'meta-ads',
      iconText: 'M',
      desc: 'Connect with your target audience through strategically designed ad creatives, audience targeting, lead generation campaigns, and remarketing strategies that support customer acquisition and brand growth.'
    },
    {
      name: 'LinkedIn Sponsored Content',
      type: 'linkedin-ads',
      iconText: 'in',
      desc: 'Reach relevant business professionals, industry leaders, and decision-makers through targeted B2B advertising. Promote your services, build professional brand awareness, and generate business enquiries through sponsored content and lead generation campaigns.'
    },
    {
      name: 'Programmatic & Display Advertising',
      type: 'programmatic',
      iconText: '⚡',
      desc: 'Expand your brand reach through display and programmatic advertising across relevant websites and digital networks. Use audience-based targeting, remarketing, and engaging ad formats to maintain brand visibility and reconnect with potential customers.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Audit & Market Research',
      desc: 'Analyze existing ad accounts, competitor strategies, target audiences, and campaign costs to identify opportunities for improved performance.'
    },
    {
      step: '02',
      title: 'Tracking & Conversion Setup',
      desc: 'Configure conversion tracking, GA4 events, and Meta Conversions API to measure campaign results and support data-driven decisions.'
    },
    {
      step: '03',
      title: 'Creative & Funnel Development',
      desc: 'Create engaging ad creatives, develop persuasive copy, and build dedicated landing pages designed to turn clicks into conversions.'
    },
    {
      step: '04',
      title: 'A/B Testing & Validation',
      desc: 'Test different audiences, creative approaches, and bidding strategies to identify effective campaigns and improve cost per lead.'
    },
    {
      step: '05',
      title: 'Scale & Maximize ROAS',
      desc: 'Increase budgets for high-performing campaigns, expand successful audience segments, and continuously optimize advertising returns.'
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
            Performance Marketing <br /> Company in Coimbatore
          </h1>

          <p className="smm-hero-desc">
            Drive targeted buyer traffic, high-intent qualified leads, and maximum Return on Ad Spend (ROAS) with precision paid advertising across Google, Meta, and high-performing digital channels.
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
              Profitable Paid <br /> Acquisition.
            </h2>

            <p className="smm-feature-desc">
              Many agencies focus on vanity clicks. We build conversion-focused performance funnels designed to drive revenue, reduce cost-per-acquisition, and improve return on ad spend through continuous campaign optimization.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Intent-Based Targeting</h4>
                  <p>Reach potential buyers when they search for your solutions or demonstrate strong purchase intent across relevant digital advertising platforms.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Scientific A/B Creative Testing</h4>
                  <p>Systematically test multiple hooks, ad copy variations, creative formats, and landing page experiences to identify winning combinations.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Conversion Tracking & Attribution</h4>
                  <p>Accurate Meta CAPI and GA4 tracking helps measure conversions, understand campaign performance, and make informed decisions despite browser cookie restrictions.</p>
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
            From search intent targeting to multi-channel retargeting, our performance marketing solutions help businesses generate leads, increase conversions, and drive scalable growth.
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
            DIGITAL ADVERTISING PLATFORMS
          </div>
          <h2 className="smm-section-title dark">Reaching Your Audience Across the Right Channels</h2>
          <p className="smm-section-subtitle dark">
            We create and manage targeted advertising campaigns across leading digital platforms to help businesses reach relevant audiences, generate qualified leads, increase brand awareness, and achieve measurable marketing objectives.
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
            A structured 5-step framework designed to improve campaign performance, generate qualified leads, and support profitable customer acquisition.
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
