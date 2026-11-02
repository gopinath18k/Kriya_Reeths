import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const metadataMap = {
  "/": {
    title: "Digital Marketing Company in Coimbatore | Kriya & Reeths",
    description: "Grow your brand with Kriya & Reeths, offering SEO, social media marketing, performance marketing, branding, and web development in Coimbatore.",
    keywords: "digital marketing agency coimbatore, best digital marketing company coimbatore, SEO services coimbatore, web development company coimbatore"
  },
  "/about": {
    title: "Best Digital Marketing Agency in Coimbatore | Kriya & Reeths",
    description: "Discover Kriya & Reeths for SEO, social media marketing, branding, web development, and digital marketing solutions in Coimbatore.",
    keywords: "about kriya and reeths, digital marketing agency coimbatore, branding company coimbatore"
  },
  "/services": {
    title: "Digital Marketing Services in Coimbatore | Kriya & Reeths",
    description: "Explore digital marketing services in Coimbatore by Kriya & Reeths, including SEO, social media marketing, performance marketing, branding, and web development.",
    keywords: "digital marketing services, seo services, branding services, social media marketing"
  },
  "/services/social-media-marketing": {
    title: "Social Media Marketing Company in Coimbatore | Kriya & Reeths",
    description: "Grow your brand with social media marketing services in Coimbatore from Kriya & Reeths. Build engagement, reach target audiences, and generate leads.",
    keywords: "social media marketing coimbatore, smm services, instagram marketing, facebook ads, linkedin marketing coimbatore, social media agency"
  },
  "/services/performance-marketing": {
    title: "Performance Marketing Company in Coimbatore | Kriya & Reeths",
    description: "Kriya & Reeths is a performance marketing company in Coimbatore offering Google Ads, Meta Ads, PPC campaigns, lead generation and ROI-focused advertising solutions.",
    keywords: "performance marketing coimbatore, ppc services coimbatore, google ads agency, meta ads, lead generation, roas optimization"
  },
  "/services/website-development": {
    title: "Website Development Company in Coimbatore | Kriya & Reeths",
    description: "Kriya & Reeths is a website development company in Coimbatore creating responsive, SEO-friendly and user-focused business websites and e-commerce solutions.",
    keywords: "website development coimbatore, web design company coimbatore, custom react development, ecommerce web development, wordpress agency"
  },
  "/services/seo-aeo-geo": {
    title: "SEO Services in Coimbatore | Kriya & Reeths",
    description: "Improve your online visibility with SEO services in Coimbatore from Kriya & Reeths. We offer technical SEO, local SEO, on-page optimization, AEO and GEO strategies.",
    keywords: "seo services coimbatore, aeo agency, geo search optimization, ai search rankings, answer engine optimization, local seo coimbatore"
  },
  "/services/video-editing": {
    title: "Branding Agency in Coimbatore | Kriya & Reeths",
    description: "Build a memorable brand with Kriya & Reeths, a branding agency in Coimbatore offering brand identity, logo design, brand strategy and creative communication solutions.",
    keywords: "video editing services coimbatore, reels video editing, youtube video editor, commercial video editing, color grading, motion graphics"
  },
  "/services/graphic-design": {
    title: "Graphic Design Company in Coimbatore | Kriya & Reeths",
    description: "Kriya & Reeths is a graphic design company in Coimbatore offering creative logo designs, social media creatives, brochures, packaging and professional branding materials.",
    keywords: "graphic design coimbatore, logo design company, social media creatives, brochure design, packaging design coimbatore, branding agency"
  },
  "/services/videography": {
    title: "Video Production Company in Coimbatore | Kriya & Reeths",
    description: "Kriya & Reeths is a video production company in Coimbatore offering brand films, product videos, corporate films, commercial shoots and professional videography services.",
    keywords: "videography services coimbatore, corporate video production, product shoot coimbatore, commercial ad film makers, drone videography"
  },
  "/portfolio": {
    title: "Digital Marketing Portfolio in Coimbatore | Kriya & Reeths",
    description: "Explore the digital marketing portfolio of Kriya & Reeths in Coimbatore, featuring branding, SEO, advertising, performance marketing, videography and creative projects.",
    keywords: "digital marketing portfolio, case studies, client work, web design portfolio"
  },
  "/blog": {
    title: "Digital Marketing Blog in Coimbatore | Kriya & Reeths",
    description: "Explore the digital marketing blog by Kriya & Reeths for insights on SEO, AEO, GEO, social media marketing, website development and the latest digital trends.",
    keywords: "digital marketing blog, marketing trends 2026, seo tips, branding strategies"
  },
  "/careers": {
    title: "Careers | Join Our Team – Kriya & Reeths",
    description: "Explore career opportunities at Kriya & Reeths, a digital marketing agency in Coimbatore. Join our creative team across SEO, design, marketing and web development.",
    keywords: "careers, digital marketing jobs coimbatore, web developer jobs, job openings"
  },
  "/reach": {
    title: "Contact Us | Digital Marketing in Coimbatore – Kriya & Reeths",
    description: "Contact Kriya & Reeths, the best digital marketing company in Coimbatore, for SEO, social media marketing, performance marketing, website development and creative solutions.",
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
    title: "Website Development Company in Coimbatore | Kriya & Reeths",
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
  },
  "/digital-marketing-company-in-coimbatore": {
    title: "Best Digital Marketing Company in Coimbatore | Kriya & Reeths",
    description: "Looking for the best digital marketing company in Coimbatore? Kriya & Reeths delivers result-driven SEO, performance marketing, web development, and branding solutions to scale your business.",
    keywords: "best digital marketing company in coimbatore, digital marketing company in coimbatore, digital marketing agency coimbatore, SEO company coimbatore, social media marketing coimbatore, web development coimbatore, lead generation coimbatore"
  }
};

const schemaMap = {
  "/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kriyareeths.com/#organization",
        "name": "Kriya & Reeths",
        "url": "https://kriyareeths.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://kriyareeths.com/#logo",
          "url": "https://kriyareeths.com/static/Logo-D-FtqDKU.webp",
          "contentUrl": "https://kriyareeths.com/static/Logo-D-FtqDKU.webp"
        },
        "image": {
          "@id": "https://kriyareeths.com/#logo"
        },
        "telephone": "+91 73059 79062",
        "email": "info@kriyareeths.com",
        "description": "Kriya & Reeths is a digital marketing, SEO, branding, advertising and web development company in Coimbatore.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "71/42, Vadavalli, Marutham Nagar",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641041",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "City",
          "name": "Coimbatore"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kriyareeths.com/#website",
        "url": "https://kriyareeths.com/",
        "name": "Kriya & Reeths",
        "publisher": {
          "@id": "https://kriyareeths.com/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://kriyareeths.com/#business",
        "name": "Kriya & Reeths",
        "url": "https://kriyareeths.com/",
        "image": {
          "@id": "https://kriyareeths.com/#logo"
        },
        "logo": {
          "@id": "https://kriyareeths.com/#logo"
        },
        "telephone": "+91 73059 79062",
        "email": "info@kriyareeths.com",
        "priceRange": "$$",
        "description": "Kriya & Reeths provides digital marketing, SEO, branding, advertising and web development services in Coimbatore.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "71/42, Vadavalli, Marutham Nagar",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641041",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "City",
          "name": "Coimbatore"
        },
        "parentOrganization": {
          "@id": "https://kriyareeths.com/#organization"
        }
      }
    ]
  },
  "/about": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://kriyareeths.com/about/#webpage",
        "url": "https://kriyareeths.com/about/",
        "name": "About Kriya & Reeths",
        "description": "Learn about Kriya & Reeths, a digital marketing company in Coimbatore providing SEO, branding, advertising and web development services.",
        "isPartOf": {
          "@id": "https://kriyareeths.com/#website"
        },
        "about": {
          "@id": "https://kriyareeths.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://kriyareeths.com/about/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kriyareeths.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://kriyareeths.com/about/"
          }
        ]
      }
    ]
  },
  "/services": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://kriyareeths.com/services/#webpage",
        "url": "https://kriyareeths.com/services/",
        "name": "Services | Kriya & Reeths",
        "description": "Explore SEO, digital marketing, branding, advertising, web development and other digital services offered by Kriya & Reeths in Coimbatore.",
        "isPartOf": {
          "@id": "https://kriyareeths.com/#website"
        },
        "about": {
          "@id": "https://kriyareeths.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://kriyareeths.com/services/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kriyareeths.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://kriyareeths.com/services/"
          }
        ]
      }
    ]
  },
  "/services/social-media-marketing": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://kriyareeths.com/services/social-media-marketing/#service",
        "name": "Social Media Marketing (SMM) Services",
        "serviceType": "Social Media Marketing",
        "provider": {
          "@id": "https://kriyareeths.com/#organization"
        },
        "description": "Full-funnel social media marketing services in Coimbatore including content strategy, Reels & Shorts production, community management, and paid Meta/LinkedIn ads.",
        "areaServed": {
          "@type": "City",
          "name": "Coimbatore"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://kriyareeths.com/services/social-media-marketing/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kriyareeths.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://kriyareeths.com/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Social Media Marketing",
            "item": "https://kriyareeths.com/services/social-media-marketing/"
          }
        ]
      }
    ]
  },
  "/services/smm": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://kriyareeths.com/services/smm/#service",
        "name": "Social Media Marketing (SMM) Services",
        "serviceType": "Social Media Marketing",
        "provider": {
          "@id": "https://kriyareeths.com/#organization"
        },
        "description": "Full-funnel social media marketing services in Coimbatore including content strategy, Reels & Shorts production, community management, and paid Meta/LinkedIn ads.",
        "areaServed": {
          "@type": "City",
          "name": "Coimbatore"
        }
      }
    ]
  },
  "/portfolio": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://kriyareeths.com/portfolio/#webpage",
        "url": "https://kriyareeths.com/portfolio/",
        "name": "Portfolio | Kriya & Reeths",
        "description": "Explore the Kriya & Reeths portfolio featuring creative branding, graphic design, web development, digital marketing and advertising projects.",
        "isPartOf": {
          "@id": "https://kriyareeths.com/#website"
        },
        "about": {
          "@id": "https://kriyareeths.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://kriyareeths.com/portfolio/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kriyareeths.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": "https://kriyareeths.com/portfolio/"
          }
        ]
      }
    ]
  },
  "/blog": {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://kriyareeths.com/blog/#blog",
    "url": "https://kriyareeths.com/blog/",
    "name": "Kriya & Reeths Blog",
    "description": "Read insights and guides from Kriya & Reeths covering SEO, digital marketing, branding, web development and online growth.",
    "publisher": {
      "@id": "https://kriyareeths.com/#organization"
    },
    "inLanguage": "en-IN"
  },
  "/careers": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://kriyareeths.com/careers/#webpage",
    "url": "https://kriyareeths.com/careers/",
    "name": "Careers | Kriya & Reeths",
    "description": "Explore career opportunities at Kriya & Reeths in digital marketing, graphic design, branding, web development and other creative fields.",
    "isPartOf": {
      "@id": "https://kriyareeths.com/#website"
    },
    "about": {
      "@id": "https://kriyareeths.com/#organization"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kriyareeths.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Careers",
          "item": "https://kriyareeths.com/careers/"
        }
      ]
    }
  },
  "/digital-marketing-company-in-coimbatore": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://kriyareeths.com/digital-marketing-company-in-coimbatore/#business",
        "name": "Kriya & Reeths - Best Digital Marketing Company in Coimbatore",
        "url": "https://kriyareeths.com/digital-marketing-company-in-coimbatore",
        "image": "https://kriyareeths.com/static/Logo-D-FtqDKU.webp",
        "logo": "https://kriyareeths.com/static/Logo-D-FtqDKU.webp",
        "telephone": "+91 73059 79062",
        "email": "info@kriyareeths.com",
        "priceRange": "$$",
        "description": "Accelerate your business digital growth with high-performing strategies, cutting-edge creative branding, data-driven performance marketing, and industry-leading SEO solutions crafted specifically for Coimbatore businesses.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "71/42, Vadavalli, Marutham Nagar",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641041",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.0168",
          "longitude": "76.9558"
        },
        "areaServed": {
          "@type": "City",
          "name": "Coimbatore"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services Coimbatore",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Creative Branding & Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Design & Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO & Search Visibility"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media & Performance Marketing"
              }
            }
          ]
        },
        "parentOrganization": {
          "@id": "https://kriyareeths.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://kriyareeths.com/digital-marketing-company-in-coimbatore/#webpage",
        "url": "https://kriyareeths.com/digital-marketing-company-in-coimbatore",
        "name": "Best Digital Marketing Company in Coimbatore | Kriya & Reeths",
        "description": "Accelerate your business digital growth with high-performing strategies, cutting-edge creative branding, data-driven performance marketing, and industry-leading SEO solutions crafted specifically for Coimbatore businesses.",
        "isPartOf": {
          "@id": "https://kriyareeths.com/#website"
        },
        "about": {
          "@id": "https://kriyareeths.com/digital-marketing-company-in-coimbatore/#business"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://kriyareeths.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Best Digital Marketing Company in Coimbatore",
              "item": "https://kriyareeths.com/digital-marketing-company-in-coimbatore"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What digital marketing services do you provide in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide end-to-end 360-degree digital marketing solutions tailored for Coimbatore businesses. This includes Local & National SEO, Generative AI Search Optimization (AEO/GEO), Google Ads & Meta Ads (Performance Marketing), Social Media Marketing (SMM), Custom Web Development, Creative Branding & Logo Design, Video Production & Reel Editing."
            }
          },
          {
            "@type": "Question",
            "name": "How can digital marketing help grow my Coimbatore business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital marketing puts your brand directly in front of active customers searching for your products or services in Coimbatore and across Tamil Nadu. Through hyper-targeted local SEO, social media funnels, and performance ads, you acquire qualified high-intent leads, build brand authority, and achieve measurable ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Why is local SEO important for Coimbatore businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO enables your business to rank #1 on Google Maps 3-pack and localized organic search results when users search for keywords like 'near me', 'in Coimbatore', 'in RS Puram', 'in Gandhipuram', or 'in Peelamedu'."
            }
          },
          {
            "@type": "Question",
            "name": "How do you manage and optimize social media marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We create viral, aesthetic visual content, cinematic Reels, engaging carousel posts, and data-backed paid ad campaigns across Instagram, Facebook, LinkedIn, and YouTube."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from SEO and Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With Performance Marketing (Google Search & Meta Ads), you can start generating qualified inquiries within 24 to 72 hours. For organic SEO, significant ranking climbs and traffic surges typically compound over 3 to 6 months."
            }
          },
          {
            "@type": "Question",
            "name": "How do you track and measure marketing campaign results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We employ advanced tracking tools including Google Analytics 4 (GA4), Google Search Console, Meta Pixel, and custom conversion tracking dashboards with transparent monthly reporting."
            }
          }
        ]
      }
    ]
  }
};

const PageMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, "") || "/";
    const data = metadataMap[path] || metadataMap["/"];

    // 1. Title
    let titles = document.querySelectorAll('title');
    if (titles.length === 0) {
      const titleElement = document.createElement('title');
      titleElement.textContent = data.title;
      document.head.appendChild(titleElement);
    } else {
      titles[0].textContent = data.title;
      for (let i = 1; i < titles.length; i++) {
        titles[i].remove();
      }
    }
    document.title = data.title;

    // Helper to query and update or create elements, cleaning up any duplicates
    const setMetaTag = (selector, nameOrProperty, value, attribute) => {
      let elements = document.querySelectorAll(selector);
      if (elements.length === 0) {
        const element = document.createElement('meta');
        element.setAttribute(attribute, nameOrProperty);
        element.setAttribute('content', value || '');
        document.head.appendChild(element);
      } else {
        elements[0].setAttribute('content', value || '');
        for (let i = 1; i < elements.length; i++) {
          elements[i].remove();
        }
      }
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

    // 6. Dynamic JSON-LD Structured Data Injection
    const schemaData = schemaMap[path];
    let schemaScript = document.getElementById('page-schema');
    if (schemaData) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'page-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData, null, 2);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

  }, [location]);

  return null;
};

export default PageMetadata;
