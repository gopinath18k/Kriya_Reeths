import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DigitalMarketingCoimbatore.css';
import greybg from '../../images/grey-text.svg';
import Footerel from '../Page2/Lfooter/Lfooter';

const DigitalMarketingCoimbatore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ Accordion State (first open by default)
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

  const scrollToContact = () => {
    const section = document.getElementById('lead-contact-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Services data
  const services = [
    {
      num: '01',
      title: 'Creative Branding & Design',
      desc: 'Build an iconic brand identity with captivating visual design, custom logos, corporate brand kits, and impactful marketing collaterals.',
      tags: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
      link: '/services/graphic-design'
    },
    {
      num: '02',
      title: 'Web Design & Development',
      desc: 'Fast, mobile-responsive, modern, and SEO-optimized web applications and eCommerce solutions built with cutting-edge tech stacks.',
      tags: ['React & Next.js', 'UI/UX Design', 'E-Commerce', 'Performance Speed'],
      link: '/services/website-development'
    },
    {
      num: '03',
      title: 'SEO & Search Visibility',
      desc: 'Dominate Google search results and AI search engine overviews (AEO/GEO) with local SEO, technical audits, and strategic keyword rankings.',
      tags: ['Local SEO', 'On-Page SEO', 'AEO & GEO', 'Keyword Growth'],
      link: '/services/seo-aeo-geo'
    },
    {
      num: '04',
      title: 'Social Media & Performance Marketing',
      desc: 'Drive consistent leads, explosive conversions, and brand engagement with targeted Meta ads, Google ads, and viral social campaigns.',
      tags: ['Meta Ads', 'Google Ads / PPC', 'Social Media', 'ROAS Growth'],
      link: '/services/performance-marketing'
    }
  ];

  // Process Steps data
  const processSteps = [
    {
      num: '01',
      title: 'Understanding Your Brand',
      desc: 'In-depth discovery session to analyze your market, competition, target audience, and business goals.'
    },
    {
      num: '02',
      title: 'Actionable Strategic Plan',
      desc: 'Formulating data-driven roadmaps, content calendars, and targeted PPC/SEO strategies tailored to your industry.'
    },
    {
      num: '03',
      title: 'Creative Execution & Development',
      desc: 'Designing premium visual assets, building high-conversion landing pages, and launching campaigns.'
    },
    {
      num: '04',
      title: 'Deliver Your Growth in Market',
      desc: 'Continuous tracking, A/B testing, and optimizing ad spend to ensure maximum engagement and reach.'
    },
    {
      num: '05',
      title: 'Measure, Optimize & Grow',
      desc: 'Detailed analytics reports, conversion rate optimization, and scaling up successful strategies for long-term ROI.',
      isHighlighted: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'What digital marketing services do you provide in Coimbatore?',
      answer: 'We provide end-to-end 360-degree digital marketing solutions tailored for Coimbatore businesses. This includes Local & National SEO, Generative AI Search Optimization (AEO/GEO), Google Ads & Meta Ads (Performance Marketing), Social Media Marketing (SMM), Custom Web Development (React & WordPress), Creative Branding & Logo Design, Video Production & Reel Editing.'
    },
    {
      question: 'How can digital marketing help grow my Coimbatore business?',
      answer: 'Digital marketing puts your brand directly in front of active customers searching for your products or services in Coimbatore and across Tamil Nadu. Through hyper-targeted local SEO, social media funnels, and performance ads, you acquire qualified high-intent leads, build brand authority, and achieve measurable ROI faster than traditional advertising methods.'
    },
    {
      question: 'Why is local SEO important for Coimbatore businesses?',
      answer: 'Local SEO enables your business to rank #1 on Google Maps 3-pack and localized organic search results when users search for keywords like "near me", "in Coimbatore", "in RS Puram", "in Gandhipuram", or "in Peelamedu". It captures high-conversion footfall and high-intent phone inquiries from your immediate target region.'
    },
    {
      question: 'How do you manage and optimize social media marketing?',
      answer: 'We create viral, aesthetic visual content, cinematic Reels, engaging carousel posts, and data-backed paid ad campaigns across Instagram, Facebook, LinkedIn, and YouTube. We continuously monitor audience demographics, run A/B creative split testing, manage community engagement, and optimize campaigns for lower CPA and higher lead quality.'
    },
    {
      question: 'How long does it take to see results from SEO and Ads?',
      answer: 'With Performance Marketing (Google Search & Meta Ads), you can start generating qualified inquiries and sales within 24 to 72 hours of campaign launch. For organic SEO, significant ranking climbs and traffic surges typically compound over 3 to 6 months as domain authority and keyword indexing strengthen.'
    },
    {
      question: 'How do you track and measure marketing campaign results?',
      answer: 'We employ advanced tracking tools including Google Analytics 4 (GA4), Google Search Console, Meta Pixel, and custom conversion tracking dashboards. You receive transparent weekly and monthly reporting covering ROAS, cost per lead (CPL), organic impressions, keyword rankings, and clear actionable growth insights.'
    }
  ];

  return (
    <div className="loc-seo-page">
      {/* 1. HERO SECTION */}
      <header className="loc-seo-hero">
        <div className="container loc-hero-container">
          <div className="loc-badge-wrapper">
            <div className="loc-badge">
              <span className="loc-dot"></span>
              <span className="loc-badge-text">DIGITAL MARKETING IN COIMBATORE</span>
            </div>
          </div>

          <h1 className="loc-hero-title">
            Best Digital Marketing<br />Company in Coimbatore
          </h1>

          <p className="loc-hero-desc">
            Accelerate your business digital growth with high-performing strategies, cutting-edge creative branding, data-driven performance marketing, and industry-leading SEO solutions crafted specifically for Coimbatore businesses.
          </p>

          <div className="loc-hero-actions">
            <button className="loc-primary-btn" onClick={scrollToContact}>
              Book Free Strategy Call
            </button>
            <Link to="/services" className="loc-secondary-btn">
              Explore All Services →
            </Link>
          </div>
        </div>
      </header>

      {/* 2. DIGITAL GROWTH SOLUTIONS SECTION */}
      <section className="loc-solutions-section">
        <div className="container">
          <div className="loc-section-header">
            <h2 className="loc-section-title">
              Digital Growth Solutions<br />for Coimbatore Businesses
            </h2>
            <p className="loc-section-desc">
              From local startups to large enterprises in Coimbatore, we deliver result-oriented digital services tailored to scale your brand reach and revenue.
            </p>
          </div>

          <div className="loc-services-list">
            {services.map((service, index) => (
              <div className="loc-service-row" key={index}>
                <div className="loc-service-num-col">
                  <span className="loc-service-num">{service.num}</span>
                </div>
                <div className="loc-service-content-col">
                  <h3 className="loc-service-title">{service.title}</h3>
                  <p className="loc-service-desc">{service.desc}</p>
                  <div className="loc-service-tags">
                    {service.tags.map((tag, tagIndex) => (
                      <span className="loc-tag" key={tagIndex}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="loc-service-btn-col">
                  <Link to={service.link} className="loc-explore-btn">
                    EXPLORE MORE <span className="loc-arrow-icon">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PROVEN PROCESS SECTION */}
      <section className="loc-process-section">
        <div className="container">
          <div className="loc-process-header">
            <span className="loc-process-tag">OUR PROVEN PROCESS</span>
            <h2 className="loc-process-title">From Ideas to Digital Growth</h2>
            <p className="loc-process-desc">
              Our structured 5-step roadmap ensures seamless execution, transparency, and measurable ROI for Coimbatore businesses.
            </p>
          </div>

          <div className="loc-process-grid">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`loc-process-card ${step.isHighlighted ? 'loc-card-highlight' : ''}`}
              >
                <div className="loc-step-top">
                  <div className="loc-step-badge">{step.num}</div>
                </div>
                <h3 className="loc-step-title">{step.title}</h3>
                <p className="loc-step-desc">{step.desc}</p>
                {step.isHighlighted && (
                  <button className="loc-step-cta-btn" onClick={scrollToContact}>
                    Schedule Strategy Call →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION SECTION (DARK THEME) */}
      <section className="loc-faq-section">
        <div className="container loc-faq-container">
          <div className="loc-faq-header">
            <span className="loc-faq-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="loc-faq-title">Questions About Digital Marketing?</h2>
            <p className="loc-faq-desc">
              Everything you need to know about our digital marketing services in Coimbatore.
            </p>
          </div>

          <div className="loc-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`loc-faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    className="loc-faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="loc-faq-q-text">{faq.question}</span>
                    <span className="loc-faq-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="loc-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. LEAD FORM / JOIN OUR COMMUNITY */}
      <section className="loc-lead-section" id="lead-contact-section">
        <div className="loc-lead-bg">
          <img src={greybg} alt="Background watermark" className="loc-watermark-img" />
        </div>
        <div className="container loc-lead-container">
          <div className="loc-lead-header">
            <h2 className="loc-lead-title">
              <span className="loc-lead-title-light">Join Our</span> Community
            </h2>
            <p className="loc-lead-subtitle">
              Give us a call. Our Door is always open!
            </p>
          </div>

          <div className="loc-form-wrapper">
            <form
              action="https://script.google.com/macros/s/AKfycbxuNPBVbEb7HV7wtPXtm5qREUJ7ROXNcYA9GDIt44_oaNE754uEawynbIRsM9uwNlfLCg/exec"
              name="contact-form"
              onSubmit={handleSubmit}
              method="post"
              className="loc-contact-form"
            >
              <input type="hidden" name="recipient" value="hr@kriyareeths.com" />
              <input type="hidden" name="source" value="Coimbatore Location SEO Landing Page" />

              <div className="loc-input-row">
                <div
                  className={`loc-floating-group ${
                    isFocusedName || inputValueName ? 'focused' : ''
                  }`}
                >
                  <label className="loc-floating-label">Name</label>
                  <input
                    type="text"
                    name="your-name"
                    value={inputValueName}
                    onFocus={handleFocusName}
                    onBlur={handleBlurName}
                    onChange={handleChangeName}
                    className="loc-input-field"
                    required
                  />
                  <div className="loc-bottom-line"></div>
                </div>

                <div
                  className={`loc-floating-group ${
                    isFocusedNumber || inputValueNumber ? 'focused' : ''
                  }`}
                >
                  <label className="loc-floating-label">Number</label>
                  <input
                    type="number"
                    name="your-number"
                    value={inputValueNumber}
                    onFocus={handleFocusNumber}
                    onBlur={handleBlurNumber}
                    onChange={handleChangeNumber}
                    className="loc-input-field"
                    maxLength="11"
                    required
                  />
                  <div className="loc-bottom-line"></div>
                </div>
              </div>

              <div className="loc-message-row">
                <div
                  className={`loc-floating-group ${
                    isFocusedMessage || inputValueMessage ? 'focused' : ''
                  }`}
                >
                  <label className="loc-floating-label">Message</label>
                  <input
                    type="text"
                    name="your-message"
                    value={inputValueMessage}
                    onFocus={handleFocusMessage}
                    onBlur={handleBlurMessage}
                    onChange={handleChangeMessage}
                    className="loc-input-field"
                  />
                  <div className="loc-bottom-line"></div>
                </div>
              </div>

              <div className="loc-submit-row">
                <button type="submit" className="loc-submit-btn">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS MODAL */}
      {showSuccessPopup && (
        <div className="success-modal-overlay">
          <div className="success-modal-content">
            <div className="success-modal-icon-container">
              <span className="success-modal-icon">✓</span>
            </div>
            <h3 className="success-modal-title">Submitted Successfully!</h3>
            <p className="success-modal-desc">
              Thank you for reaching out to Kriya & Reeths. Our digital marketing team in Coimbatore will get in touch with you shortly.
            </p>
            <button
              className="success-modal-btn"
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 7. FOOTER */}
      <Footerel />
    </div>
  );
};

export default DigitalMarketingCoimbatore;
