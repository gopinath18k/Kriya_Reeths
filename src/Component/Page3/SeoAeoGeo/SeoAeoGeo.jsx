import { useState, useEffect } from 'react';
import './SeoAeoGeo.css';
import bg1 from '../../../images/bg-text1.svg';
import bg2 from '../../../images/bg-text2.svg';
import greybg from '../../../images/grey-text.svg';
import seoImg from '../../../images/SeoAeoGeo.webp';
import Footerel from '../../Page2/Lfooter/Lfooter';

const SeoAeoGeo = () => {
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
      title: 'Generative Engine Optimization (GEO)',
      desc: 'Improve your brand’s visibility across AI platforms like ChatGPT, Google Gemini, and Perplexity with structured, relevant content.',
      points: [
        'Entity Optimization & Brand Authority',
        'AI Citation & Content Visibility Optimization',
        'Direct Answer Structuring for Generative AI'
      ]
    },
    {
      num: '02',
      title: 'Answer Engine Optimization (AEO)',
      desc: 'Improve your chances of appearing in Google Featured Snippets, People Also Ask (PAA) results, and voice search responses.',
      points: [
        'Featured Snippet & Zero-Click Search Optimization',
        'FAQ & How-To Structured Data Implementation',
        'Conversational Search & Natural Language Optimization'
      ]
    },
    {
      num: '03',
      title: 'Technical SEO Optimization',
      desc: 'Strengthen website crawlability, improve indexing, and optimize Core Web Vitals for better search performance.',
      points: [
        'Crawl Budget & Technical Site Analysis',
        'Mobile-First Indexing & Site Architecture',
        'Canonical Tags, Hreflang & XML Sitemap Audits'
      ]
    },
    {
      num: '04',
      title: 'Semantic Content & Topic Clusters',
      desc: 'Build topical authority through informative pillar pages, relevant supporting content, and well-organized topic clusters.',
      points: [
        'Search Intent & Keyword Mapping',
        'Content Gap & Competitor Analysis',
        'Internal Linking & Topical Coverage Strategies'
      ]
    },
    {
      num: '05',
      title: 'Quality Backlinks & Digital PR',
      desc: 'Build website authority with relevant editorial backlinks, trusted publications, and ethical link-building strategies.',
      points: [
        'Editorial Outreach & Relevant Guest Placements',
        'Broken Link Building & Unlinked Brand Mentions',
        'Toxic Backlink Analysis & Link Cleanup'
      ]
    },
    {
      num: '06',
      title: 'Local SEO & Google Business Profile',
      desc: 'Reach nearby customers and improve local search visibility through location-focused optimization, citations, and review management.',
      points: [
        'Google Business Profile (GBP) Optimization',
        'Local Citation Building & NAP Consistency',
        'Customer Review Strategy & Local Landing Pages'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Google Search & Maps',
      type: 'google-search',
      iconText: 'G',
      desc: 'Dominate traditional Google page #1 rankings, image carousels, and Google Maps local 3-pack results.'
    },
    {
      name: 'AI Engines (ChatGPT, Gemini, Perplexity)',
      type: 'ai-engines',
      iconText: 'AI',
      desc: 'Ensure your brand is recommended and cited when users ask conversational questions to AI assistants.'
    },
    {
      name: 'Bing & Microsoft Copilot',
      type: 'bing-copilot',
      iconText: 'b',
      desc: 'Capture growing enterprise and desktop market share on Bing and Copilot-powered search experiences.'
    },
    {
      name: 'Voice & Zero-Click Answers',
      type: 'voice-search',
      iconText: '🎙',
      desc: 'Rank for voice queries on Apple Siri, Google Assistant, and Amazon Alexa with structured answer snippets.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Comprehensive SEO & AI Search Audit',
      desc: 'Analyze technical issues, existing keyword rankings, AI search visibility, and competitor opportunities to identify areas for improvement.'
    },
    {
      step: '02',
      title: 'Strategic Keyword & Content Mapping',
      desc: 'Map high-intent keywords, customer questions, and conversational search queries to align website content with user search intent.'
    },
    {
      step: '03',
      title: 'Technical & On-Page SEO Execution',
      desc: 'Improve website structure, implement relevant structured data, optimize metadata, and enhance content quality for search visibility.'
    },
    {
      step: '04',
      title: 'Authority Building & Digital PR',
      desc: 'Build relevant backlinks and strengthen brand mentions across trusted websites to improve website credibility and domain authority.'
    },
    {
      step: '05',
      title: 'Performance Analysis & Continuous Optimization',
      desc: 'Evaluate keyword rankings, AI search visibility, organic traffic, and lead generation opportunities to refine strategies and support sustainable growth.'
    }
  ];

  const faqs = [
    {
      question: 'What is the difference between SEO, AEO, and GEO?',
      answer: 'SEO (Search Engine Optimization) optimizes for traditional search engine rankings like Google and Bing. AEO (Answer Engine Optimization) focuses on winning featured snippets, voice search, and direct answers in zero-click searches. GEO (Generative Engine Optimization) optimizes your brand authority so that generative AI tools (like ChatGPT, Gemini, and Perplexity) cite and recommend your business in conversational answers.'
    },
    {
      question: 'How long does it take to see organic traffic results?',
      answer: 'Initial technical and local SEO improvements often show positive momentum within 30 to 60 days. Substantial organic traffic growth and competitive keyword rankings typically compound significantly between months 3 and 6.'
    },
    {
      question: 'Why is GEO (Generative Engine Optimization) essential today?',
      answer: 'Millions of users now search through AI engines like Perplexity, ChatGPT, and Gemini instead of standard search engines. GEO ensures your brand is recognized as an authoritative entity, so AI tools directly recommend your products and services.'
    },
    {
      question: 'Do you use 100% white-hat SEO techniques?',
      answer: 'Yes, absolutely. We strictly follow Google Search Essentials and AI compliance guidelines. We never use risky black-hat tactics, ensuring your rankings are permanent and completely immune to algorithm penalties.'
    },
    {
      question: 'How do you choose the right keywords for my business?',
      answer: 'We analyze commercial intent, search volume, competitor gaps, and conversion potential. We focus on high-intent keywords where searchers are ready to buy or inquire, ensuring you get qualified leads rather than empty traffic.'
    },
    {
      question: 'What reports will I receive?',
      answer: 'You will receive monthly transparent reports detailing organic traffic gains, keyword ranking positions, AI engine citations, backlink profile growth, and direct conversion numbers.'
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
            THE FUTURE OF SEARCH VISIBILITY
            <span className="smm-badge-dot"></span>
          </div>

          <h1 className="smm-hero-title">
            SEO Services in <br /> Coimbatore
          </h1>

          <p className="smm-hero-desc">
            Dominate search rankings across Google, voice search, and conversational AI platforms. We combine proven SEO strategies with Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).
          </p>

          <div className="smm-stats-grid">
            <div className="smm-stat-item">
              <div className="smm-stat-number">#1</div>
              <div className="smm-stat-label">Search Ranking Focus</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">300%+</div>
              <div className="smm-stat-label">Organic Traffic Growth</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">10k+</div>
              <div className="smm-stat-label">Ranked Keywords</div>
            </div>
            <div className="smm-stat-item">
              <div className="smm-stat-number">95%+</div>
              <div className="smm-stat-label">AI Search Visibility</div>
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
              THE FUTURE OF SEARCH
            </div>

            <h2 className="smm-feature-heading">
              Rank on Google. <br />
              Be Cited by AI. <br />
              Own Every Search.
            </h2>

            <p className="smm-feature-desc">
              Search is no longer just ten blue links on Google. Modern customers discover businesses through AI Overviews, chatbots, and voice assistants. We help improve your brand’s visibility and make your business easier to discover across relevant search platforms.
            </p>

            <div className="smm-feature-list">
              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Generative Engine Optimization (GEO)</h4>
                  <p>Structure your website content so AI platforms like ChatGPT, Perplexity, and Gemini can understand your business and potentially reference your brand in generated answers.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>Featured Snippet Optimization (AEO)</h4>
                  <p>Improve your chances of appearing in Google featured snippets and People Also Ask results with clear, direct, and authoritative answers.</p>
                </div>
              </div>

              <div className="smm-feature-box">
                <div className="smm-feature-icon-badge">✓</div>
                <div className="smm-feature-box-content">
                  <h4>High-Authority Link Building</h4>
                  <p>Earn relevant, quality backlinks from trusted websites to strengthen domain authority, build credibility, and support long-term organic search visibility.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="smm-feature-right" data-aos="fade-left" data-aos-duration="1200">
            <div className="smm-showcase-card">
              <img
                src={seoImg}
                alt="SEO, AEO and GEO Showcase"
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
          <h2 className="smm-section-title">Our SEO Capabilities</h2>
          <p className="smm-section-subtitle">
            Comprehensive SEO services covering technical optimization, relevant content, and AI-powered search visibility.
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
            SEARCH & AI ENGINES
          </div>
          <h2 className="smm-section-title dark">Engines We Dominate</h2>
          <p className="smm-section-subtitle dark">
            We ensure your business ranks across both conventional search algorithms and next-generation AI models.
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
            OUR RANKING FRAMEWORK
          </div>
          <h2 className="smm-section-title">How We Improve Your Rankings</h2>
          <p className="smm-section-subtitle">
            A structured 5-step approach designed to strengthen organic visibility, attract high-intent visitors, and generate qualified customer leads.
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
          <h2 className="smm-section-title dark">Questions About SEO, AEO & GEO?</h2>
          <p className="smm-section-subtitle dark">
            Clear insights into how modern search engines rank and cite your business.
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
                <span className="hd1-one">Dominate</span> Search Rankings
              </h2>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1300">
              Give us a call. Ready to claim Google #1 and AI recommendations?
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
              Thank you for reaching out. We have received your inquiry regarding SEO, AEO & GEO services and will get in touch with you shortly.
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

export default SeoAeoGeo;
