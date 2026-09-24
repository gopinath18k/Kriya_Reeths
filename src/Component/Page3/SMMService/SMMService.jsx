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
      desc: 'Custom monthly content calendars aligned with your business objectives, industry nuances, and audience psychology.',
      points: [
        'Trend Analysis & Competitor Research',
        'Content Pillars & Voice Definition',
        'Publishing Schedule & Optimal Timing'
      ]
    },
    {
      num: '02',
      title: 'High-Impact Video & Creative Production',
      desc: 'Engaging Reels, TikToks, Shorts, and carousel graphics engineered to halt scrolling and trigger viral algorithmic distribution.',
      points: [
        'Viral Scriptwriting & Storyboards',
        'Pro Video Editing & Motion Graphics',
        'Dynamic Multi-Platform Brand Assets'
      ]
    },
    {
      num: '03',
      title: 'Audience Growth & Community Building',
      desc: 'Active daily community management, rapid direct message responses, and comment moderation to turn followers into advocates.',
      points: [
        'Daily Community Interactions & Engagement',
        'Proactive Target Follower Acquisition',
        'Brand Reputation & Sentiment Monitoring'
      ]
    },
    {
      num: '04',
      title: 'Paid Social & Performance Ads',
      desc: 'Data-driven paid social campaigns across Meta, LinkedIn, and TikTok with pinpoint demographic targeting for maximum ROAS.',
      points: [
        'Hyper-Targeted Conversion Ad Sets',
        'A/B Creative & Copy Variation Testing',
        'Pixel Tracking & Dynamic Retargeting'
      ]
    },
    {
      num: '05',
      title: 'Influencer & Creator Partnerships',
      desc: 'Authentic collaborations with vetted micro and macro creators that amplify trust, drive brand equity, and generate real conversions.',
      points: [
        'Creator Identification & Vetting',
        'Campaign Briefing & Deliverable Review',
        'Influencer ROI & Attribution Tracking'
      ]
    },
    {
      num: '06',
      title: 'Social Listening & Data Analytics',
      desc: 'In-depth performance analytics, audience demographic insights, and continuous optimization to ensure compounding growth.',
      points: [
        'Real-time Market & Competitor Benchmarks',
        'Audience Sentiment & Feedback Analysis',
        'Clear Monthly ROI & Performance Reports'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Meta (Instagram & Facebook)',
      type: 'meta',
      iconText: '∞',
      desc: 'Visual storytelling, viral Reels production, community stories, and hyper-targeted advertising to capture high-intent consumer attention.'
    },
    {
      name: 'LinkedIn',
      type: 'linkedin',
      iconText: 'in',
      desc: 'B2B authority building, executive thought leadership, company page scaling, and high-ticket corporate lead generation pipelines.'
    },
    {
      name: 'YouTube / Shorts',
      type: 'youtube',
      iconText: '▶',
      desc: 'Long-form authority content and engaging Shorts that capture search-driven organic discovery and multi-year viewer retention.'
    },
    {
      name: 'X (Twitter) & Threads',
      type: 'x-threads',
      iconText: '𝕏',
      desc: 'Real-time brand conversations, viral trend hijacking, PR management, and conversational community engagement for maximum buzz.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Brand Audit & Strategy',
      desc: 'Comprehensive audit of your existing presence, competitor benchmarking, and customized audience persona modeling.'
    },
    {
      step: '02',
      title: 'Content Engine',
      desc: 'Establishing distinct brand visual guidelines, hook frameworks, script blueprints, and 30-day asset pipelines.'
    },
    {
      step: '03',
      title: 'Execution & Launch',
      desc: 'Precision scheduling, hashtag optimization, sound-trend mapping, and structured multi-channel publishing.'
    },
    {
      step: '04',
      title: 'Active Management',
      desc: 'Daily proactive community engagement, direct message responses, comment moderation, and active relationship building.'
    },
    {
      step: '05',
      title: 'Scale & Optimize',
      desc: 'Weekly performance analytics, scaling top-converting content formats, and deploying targeted paid booster campaigns.'
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
            DIGITAL MARKETING EXCELLENCE
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            Social Media <br /> Marketing (SMM)
          </h1>

          <p className="smm-hero-desc">
            We create data-driven, creative social media strategies that elevate your brand visibility,
            engage your target audience, and convert followers into loyal customers across all major platforms.
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">50M+</div>
              <div className="smm-stat-label">Impressions Delivered</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">4.8k</div>
              <div className="smm-stat-label">Engagements / Growth</div>
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
              FULL-FUNNEL SMM
            </div>

            <h2 className="smm-feature-heading">
              More Than Just Posting. <br />
              Full-Funnel Social <br />
              Engineering.
            </h2>

            <p className="smm-feature-desc">
              Social media isn't just about sharing content; it's about building a predictable growth engine for your business.
              We engineer full-funnel strategies that turn casual scrollers into paying customers.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Algorithm Mastery</h4>
                  <p>We decode platform algorithms so your content consistently reaches high-intent audiences organically.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>High-Convert Creatives</h4>
                  <p>Thumb-stopping graphics, viral-engineered Reels & Shorts designed specifically for maximum retention.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>End-to-End Monetization</h4>
                  <p>Strategic CTAs and lead magnets designed to capture leads and convert attention into revenue.</p>
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
            From content creation to paid acquisition, our end-to-end capabilities ensure total social domination.
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
            OMNICHANNEL MASTERY
          </div>
          <h2 className="smm-section-title dark">Platforms We Dominate</h2>
          <p className="smm-section-subtitle dark">
            We tailor bespoke strategies for every major network, ensuring your brand thrives where your audience spends their time.
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
            A systematic, step-by-step framework to scale your social footprint.
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
              <h1 className="hd1-two">
                <span className="hd1-one">Join Our</span> Community
              </h1>
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
