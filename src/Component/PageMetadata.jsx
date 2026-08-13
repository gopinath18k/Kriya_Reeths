import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const metadataMap = {
  "/": {
    title: "Best Digital Marketing Agency in Coimbatore | Kriya & Reeths",
    description: "Kriya & Reeths is a premier digital marketing agency in Coimbatore. We offer SEO, PPC, social media marketing, branding, and web development services to grow your business online.",
    keywords: "digital marketing agency coimbatore, best digital marketing company coimbatore, SEO services coimbatore, web development company coimbatore"
  },
  "/about": {
    title: "About Us | Top Digital Marketing Company in Coimbatore | Kriya & Reeths",
    description: "Learn about Kriya & Reeths, a leading digital marketing company in Coimbatore. Discover our mission, vision, and team of creative experts dedicated to driving business growth.",
    keywords: "about kriya and reeths, digital marketing agency coimbatore, branding company coimbatore"
  },
  "/services": {
    title: "Our Services | Digital Marketing & Web Development | Kriya & Reeths",
    description: "Explore the wide range of services offered by Kriya & Reeths, including SEO, social media marketing, web development, branding, graphic design, and content marketing.",
    keywords: "digital marketing services, seo services, branding services, social media marketing"
  },
  "/portfolio": {
    title: "Our Portfolio | Digital Marketing Success Stories | Kriya & Reeths",
    description: "View our portfolio of successful projects and digital marketing campaigns. See how we help clients in Coimbatore and beyond achieve outstanding online results.",
    keywords: "digital marketing portfolio, case studies, client work, web design portfolio"
  },
  "/blog": {
    title: "Blogs & Insights | Digital Marketing Trends | Kriya & Reeths",
    description: "Stay updated with the latest digital marketing trends, tips, and insights. Read our blogs on SEO, social media, web development, and branding strategies.",
    keywords: "digital marketing blog, marketing trends 2026, seo tips, branding strategies"
  },
  "/careers": {
    title: "Careers | Join Our Digital Marketing Team | Kriya & Reeths",
    description: "Join Kriya & Reeths, a dynamic and growing digital marketing agency in Coimbatore. Explore current career opportunities and work with creative professionals.",
    keywords: "careers, digital marketing jobs coimbatore, web developer jobs, job openings"
  },
  "/reach": {
    title: "Contact Us | Get in Touch with Kriya & Reeths | Coimbatore",
    description: "Contact Kriya & Reeths for the best digital marketing services in Coimbatore. Reach out to our team via phone, email, or visit our office to discuss your project.",
    keywords: "contact kriya and reeths, digital marketing agency phone, coimbatore office address"
  },
  "/blog/digital-marketing-a-boon-or-bane": {
    title: "Digital Marketing: A Boon or Bane? | Kriya & Reeths Blog",
    description: "Explore the pros and cons of digital marketing. Learn how businesses can leverage technologies to reach target customers and boost their online presence.",
    keywords: "digital marketing pros and cons, boon or bane, online marketing strategies"
  },
  "/blog/digital-marketing-company-in-coimbatore": {
    title: "Best Digital Marketing Company in Coimbatore | Kriya & Reeths",
    description: "Looking for the best digital marketing company in Coimbatore? Kriya & Reeths offers expert SEO, SMM, and web design solutions to accelerate business growth.",
    keywords: "digital marketing company in coimbatore, best marketing agency, online marketing coimbatore"
  },
  "/blog/significance-of-digital-marketing": {
    title: "The Significance of Digital Marketing for Modern Businesses | Kriya & Reeths",
    description: "Understand the key significance of digital marketing in today's competitive landscape. Discover how it enhances reach, builds brand equity, and drives conversions.",
    keywords: "importance of digital marketing, benefits of online marketing, business growth"
  },
  "/blog/why-professional-advertising-is-still-essential-for-business-growth-in-2026": {
    title: "Why Professional Advertising is Essential for Business Growth in 2026 | Kriya & Reeths",
    description: "Find out why professional advertising remains crucial for business success and growth in 2026. Explore modern advertising strategies and metrics.",
    keywords: "professional advertising, business growth 2026, advertising strategy"
  },
  "/blog/effective-social-media-marketing-services-in-coimbatore": {
    title: "Effective Social Media Marketing Services in Coimbatore | Kriya & Reeths",
    description: "Partner with Kriya & Reeths for top social media marketing services in Coimbatore. Build brand loyalty, engage audiences, and drive sales through custom campaigns.",
    keywords: "social media marketing coimbatore, smm services, facebook instagram marketing"
  },
  "/blog/best-website-development-company-in-coimbatore": {
    title: "Best Website Development Company in Coimbatore | Kriya & Reeths",
    description: "Get responsive, modern, and SEO-friendly websites designed by the best website development company in Coimbatore. Drive business growth with our custom web designs.",
    keywords: "website development company in coimbatore, web design agency, custom web development"
  },
  "/blog/digital-marketing-company-in-gandhipuram-coimbatore": {
    title: "Top Digital Marketing Company in Gandhipuram, Coimbatore | Kriya & Reeths",
    description: "Scale your business with the leading digital marketing company in Gandhipuram, Coimbatore. We deliver results-oriented SEO, PPC, and branding solutions.",
    keywords: "digital marketing company in gandhipuram, gandhipuram marketing agency, local SEO"
  },
  "/blog/digital-marketing-company-in-rs-puram-coimbatore": {
    title: "Leading Digital Marketing Company in RS Puram, Coimbatore | Kriya & Reeths",
    description: "Elevate your brand with the premier digital marketing company in RS Puram, Coimbatore. Custom campaigns for search engine optimization, branding, and PPC.",
    keywords: "digital marketing company in rs puram, rs puram marketing agency, coimbatore SEO"
  },
  "/blog/digital-marketing-company-in-peelamedu-coimbatore": {
    title: "Leading Digital Marketing Company in Peelamedu, Coimbatore | Kriya & Reeths",
    description: "Grow your business online with the best digital marketing company in Peelamedu, Coimbatore. We specialize in SMM, SEO, and custom lead generation.",
    keywords: "digital marketing company in peelamedu, peelamedu marketing agency, lead generation"
  },
  "/blog/best-digital-marketing-agency-in-coimbatore": {
    title: "Best Digital Marketing Agency in Coimbatore | Kriya & Reeths",
    description: "Choose Kriya & Reeths, the top-rated digital marketing agency in Coimbatore. Discover how our tailor-made strategies deliver maximum ROI and brand engagement.",
    keywords: "best digital marketing agency in coimbatore, digital marketing ROI, top marketing firm"
  },
  "/blog/digital-marketing-saravanampatti-in-coimbatore": {
    title: "Digital Marketing Services in Saravanampatti, Coimbatore | Kriya & Reeths",
    description: "Boost your search engine visibility and social presence with top digital marketing services in Saravanampatti, Coimbatore. Contact us today for a free audit.",
    keywords: "digital marketing saravanampatti, saravanampatti marketing agency, SEO audit"
  },
  "/blog/digital-marketing-pollachi-in-coimbatore": {
    title: "Best Digital Marketing Company in Pollachi, Coimbatore | Kriya & Reeths",
    description: "Kriya & Reeths is a trusted digital marketing company in Pollachi, Coimbatore. Helping local businesses build their digital brand and reach regional customers.",
    keywords: "digital marketing pollachi, pollachi marketing agency, local business growth"
  },
  "/blog/best-branding-company-in-coimbatore": {
    title: "Best Branding & Creative Company in Coimbatore | Kriya & Reeths",
    description: "Define your identity with the best branding company in Coimbatore. From logo design and brand strategy to creative marketing campaigns that stand out.",
    keywords: "branding company in coimbatore, brand identity design, logo design coimbatore"
  },
  "/blog/best-seo-services-in-coimbatore": {
    title: "Best SEO Services in Coimbatore | High Ranking SEO agency | Kriya & Reeths",
    description: "Rank #1 on Google with the best SEO services in Coimbatore. Proven track record of boosting organic traffic, keywords, and local search visibility.",
    keywords: "seo services in coimbatore, search engine optimization coimbatore, seo agency"
  }
};

const PageMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    
    const path = location.pathname.replace(/\/$/, "") || "/";
    const data = metadataMap[path] || metadataMap["/"];

    // 1. Title
    document.title = data.title;

    // Helper to query and update or create elements
    const setMetaTag = (selector, nameOrProperty, value, attribute) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value || '');
    };

    // 2. Description
    setMetaTag('meta[name="description"]', 'description', data.description, 'name');

    // 3. Keywords
    setMetaTag('meta[name="keywords"]', 'keywords', data.keywords, 'name');

    // 4. Open Graph Tags
    const currentUrl = window.location.origin + location.pathname;
    setMetaTag('meta[property="og:title"]', 'og:title', data.title, 'property');
    setMetaTag('meta[property="og:description"]', 'og:description', data.description, 'property');
    setMetaTag('meta[property="og:url"]', 'og:url', currentUrl, 'property');
    setMetaTag('meta[property="og:type"]', 'og:type', 'website', 'property');

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [location]);

  return null;
};

export default PageMetadata;
