import { useState, useEffect } from 'react';
import './SMMService.css';
import bg1 from '../../../images/bg-text1.svg';
import bg2 from '../../../images/bg-text2.svg';
import greybg from '../../../images/grey-text.svg';
import smmPhone from '../../../images/smm_phone_showcase.jpg';
import Footerel from '../../Page2/Lfooter/Lfooter';

const SMMService = () => {
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
      title: 'Content Strategy & Editorial Roadmap',
      desc: 'Custom monthly content calendars aligned with your business goals, industry trends, and target audience interests.',
      points: [
        'Trend Analysis & Competitor Research',
        'Content Pillars & Brand Voice Development',
        'Publishing Schedule & Optimal Timing'
      ]
    },
    {
      num: '02',
      title: 'High-Impact Video & Creative Production',
      desc: 'Engaging Reels, Shorts, and carousel graphics designed to capture attention, encourage interaction, and expand your social media reach.',
      points: [
        'Creative Scriptwriting & Storyboards',
        'Professional Video Editing & Motion Graphics',
        'Multi-Platform Creative Assets'
      ]
    },
    {
      num: '03',
      title: 'Audience Growth & Community Building',
      desc: 'Consistent community management, timely message responses, and comment moderation to build trust and turn followers into loyal customers.',
      points: [
        'Daily Community Interaction & Engagement',
        'Targeted Audience Growth Strategies',
        'Brand Reputation & Sentiment Monitoring'
      ]
    },
    {
      num: '04',
      title: 'Paid Social & Performance Ads',
      desc: 'Data-driven advertising campaigns across Meta, LinkedIn, and other relevant platforms, using audience targeting to improve campaign performance.',
      points: [
        'Targeted Social Media Advertising',
        'A/B Testing for Creatives & Ad Copy',
        'Pixel Tracking & Audience Retargeting'
      ]
    },
    {
      num: '05',
      title: 'Influencer & Creator Partnerships',
      desc: 'Authentic collaborations with relevant creators that increase brand awareness, strengthen audience trust, and support meaningful conversions.',
      points: [
        'Creator Identification & Evaluation',
        'Campaign Briefing & Content Review',
        'Influencer Performance Measurement'
      ]
    },
    {
      num: '06',
      title: 'Social Listening & Data Analytics',
      desc: 'Detailed campaign analytics, audience insights, and continuous optimization to improve engagement and support sustainable social media growth.',
      points: [
        'Market Trends & Competitor Analysis',
        'Audience Sentiment & Feedback Analysis'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Meta (Instagram & Facebook)',
      type: 'meta',
      iconText: '∞',
      desc: 'Enhance your brand visibility through creative social media posts, engaging Reels and Stories, audience interaction, and targeted advertising campaigns designed to reach relevant audiences and support business objectives.'
    },
    {
      name: 'LinkedIn',
      type: 'linkedin',
      iconText: 'in',
      desc: 'Build professional credibility and strengthen your B2B presence through strategic content creation, company page management, industry insights, thought leadership, and targeted campaigns focused on business connections and lead generation.'
    },
    {
      name: 'YouTube & YouTube Shorts',
      type: 'youtube',
      iconText: '▶',
      desc: 'Expand your brand\'s video presence with informative long-form content, promotional videos, and engaging Shorts. Develop content that showcases your products, services, and expertise while supporting audience engagement and discoverability.'
    },
    {
      name: 'X (Twitter) & Threads',
      type: 'x-threads',
      iconText: '𝕏',
      desc: 'Strengthen brand communication through timely updates, relevant industry conversations, trending topics, and consistent audience engagement. Build an active brand presence while encouraging meaningful interactions with your community.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Brand Audit & Strategy',
      desc: 'Analyze your existing social presence, evaluate competitors, and identify target audience preferences to develop a tailored social media strategy.'
    },
    {
      step: '02',
      title: 'Content Planning & Creation',
      desc: 'Develop brand guidelines, creative concepts, engaging scripts, and a monthly content calendar aligned with your marketing goals.'
    },
    {
      step: '03',
      title: 'Execution & Publishing',
      desc: 'Schedule content strategically, optimize hashtags, identify relevant trends, and publish consistently across suitable social media platforms.'
    },
    {
      step: '04',
      title: 'Community Management',
      desc: 'Manage daily audience interactions, respond to messages, moderate comments, and build meaningful relationships with your followers.'
    },
    {
      step: '05',
      title: 'Performance & Optimization',
      desc: 'Review campaign insights, identify top-performing content, refine strategies, and use targeted paid promotions to improve reach and engagement.'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results from SMM?',
      answer: 'Organic brand momentum typically accelerates within 30 to 60 days as algorithms recognize consistent posting patterns and engagement quality. For paid social advertising campaigns, we can generate targeted leads and customer conversions within the very first week of launch.'
    },
    {
      question: 'Which social media platforms are best for my business?',
      answer: 'The ideal platforms depend on your industry and audience demographics. B2B enterprises consistently achieve the highest ROI on LinkedIn and X, whereas D2C, retail, hospitality, and service brands thrive on Instagram, Facebook, and YouTube Shorts. Our initial audit defines your exact multi-platform roadmap.'
    },
    {
      question: 'Do you handle content creation, photography, and video editing?',
      answer: 'Yes, absolutely! We provide full-stack production services. Our in-house creative team manages everything from scriptwriting, storyboarding, graphic design, and video editing for Reels/Shorts to final caption writing and scheduling.'
    },
    {
      question: 'How do you measure and report social media ROI?',
      answer: 'We provide transparent monthly reports with clear data breakdowns: engagement rates, reach, follower quality, website referral traffic, cost per acquisition (CPA), and direct lead conversions to measure real business growth.'
    },
    {
      question: 'Will I have approval over the content before it gets posted?',
      answer: 'Yes! We prepare and deliver your content calendars 1 to 2 weeks in advance via a collaborative review workflow. You can easily review, suggest revisions, and give final approval before anything goes live.'
    },
    {
      question: 'How do paid social ads work alongside organic social posting?',
      answer: 'Organic content builds credibility, brand personality, and long-term trust, while paid social ads offer precision targeting and rapid scalability. Together, they create a powerful flywheel where ads convert higher because your organic profile looks active and authentic.'
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
            SOCIAL MEDIA MARKETING
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Social Media Marketing <br /> Company in Coimbatore
          </h1>

          <p className="smm-hero-desc">
            We help businesses strengthen their online presence through strategic social media campaigns, creative content, audience engagement, and data-driven marketing solutions that turn followers into loyal customers.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">50M+</div>
              <div className="smm-stat-label">Impressions Delivered</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">4.8K</div>
              <div className="smm-stat-label">Engagements & Growth</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">350+</div>
              <div className="smm-stat-label">Active Campaigns</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">99.4%</div>
              <div className="smm-stat-label">Client Satisfaction</div>
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
              SOCIAL IMPACT SMM
            </div>

            <h2 className="smm-feature-heading">
              More Than Just Posting. <br />
              Turning Attention Into Action. <br />
              Turning Clicks Into Customers.
            </h2>

            <p className="smm-feature-desc">
              As a social media marketing company in Coimbatore, Kriya & Reeths develops full-funnel strategies that help businesses increase brand awareness, connect with relevant audiences, and convert engagement into meaningful business opportunities.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Algorithm Optimization</h4>
                  <p>We create platform-specific content strategies to improve organic reach, strengthen social media visibility, and connect your brand with relevant audiences.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>High-Impact Creatives</h4>
                  <p>Engaging graphics, creative Reels, and short-form videos designed to capture attention, encourage interactions, and build stronger audience connections.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>End-to-End Conversion Strategies</h4>
                  <p>Strategic calls to action, targeted social media advertising, and lead-generation campaigns designed to attract potential customers and support business growth.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="smm-feature-right" data-aos="fade-left" data-aos-duration="1200">
            <div className="smm-showcase-card">
              <img
                src={smmPhone}
                alt="Social Media Marketing Showcase Mockup"
                className="smm-showcase-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          3. SECTION 3: SMM CAPABILITIES (Light Theme)
      ==================================================== */}
      <section className="smm-capabilities-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge">
            <span className="smm-badge-dot"></span>
            WHAT WE DO
          </div>
          <h2 className="smm-section-title">Our SMM Capabilities</h2>
          <p className="smm-section-subtitle">
            From content creation to paid advertising, our social media marketing services help brands build awareness, engage audiences, and drive business growth.
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
            SOCIAL MEDIA PLATFORMS
          </div>
          <h2 className="smm-section-title dark">Building Your Brand Across Digital Platforms</h2>
          <p className="smm-section-subtitle dark">
            We create platform-specific social media strategies that help businesses strengthen brand awareness, engage their target audiences, and maintain a consistent digital presence across major social networks.
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
          5. SECTION 5: HOW WE MANAGE YOUR BRAND (Light Theme)
      ==================================================== */}
      <section className="smm-process-section">
        <div className="smm-section-header" data-aos="fade-up" data-aos-duration="1200">
          <div className="smm-eyebrow-badge">
            <span className="smm-badge-dot"></span>
            OUR PROCESS
          </div>
          <h2 className="smm-section-title">How We Manage Your Brand</h2>
          <p className="smm-section-subtitle">
            A structured, step-by-step approach to building your social presence and supporting consistent brand growth.
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
          <h2 className="smm-section-title dark">Questions About Social Media Marketing?</h2>
          <p className="smm-section-subtitle dark">
            Find clear answers to common questions about our social media marketing process, timelines, and measurable results.
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
                <span className="hd1-one">Join Our</span> Community
              </h2>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1300">
              Give us a call. Our Door is always open!
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
              Thank you for reaching out. We have received your inquiry regarding Social Media Marketing services and will get in touch with you shortly.
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

export default SMMService;
