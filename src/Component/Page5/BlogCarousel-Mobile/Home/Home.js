import React, { useState } from 'react';
import "./Home.css";
import EffectiveSocialMedia from "../../../../images/Social Media Marketing Services in Coimbatore.webp";
import DigitalSocialMedia from "../../../../images/Digital Marketing Company in Coimbatore.webp";
import significance_of_digital from "../../../../images/blog2.webp";
import Why_Professional_Advertising from "../../../../images/KR-BLOG-Why-Professional-Advertising (2).webp";
import Best_Website_Development_Company from "../../../../images/Best Website Development Company.webp";
import Digital_Marketing_Company_in_GandhiPuram from "../../../../images/Digital Marketing Company in GandhiPuram.webp";
import Digital_Marketing_Company_in_RSPuram from "../../../../images/digital-marketing-company-rs-puram-coimbatore.webp";
import Digital_Marketing_Company_in_Peelamedu from "../../../../images/digital-marketing-company-peelamedu-coimbatore.webp";
import Digital_Marketing_Agency_in_Coimbatore from "../../../../images/digital-marketing-agency-in-coimbatore.webp";
import Digital_Marketing_Company_in_Saravanampatti from "../../../../images/digital-marketing-company-saravanampatti-coimbatore.webp";
import Digital_Marketing_Company_in_Pollachi from "../../../../images/digital-marketing-company-pollachi-coimbatore.webp";
import Best_Branding_Company_in_Coimbatore from "../../../../images/best-branding-company-in-coimbatore.webp";
import SEO_Services_in_Coimbatore from "../../../../images/seo-services-in-coimbatore.webp";
import stark from "../../../../images/Logo.webp";
import { Link } from 'react-router-dom';



export const Homese = () => {
  const [visibleContent, setVisibleContent] = useState(3);

  const handleViewMore = () => {
    setVisibleContent(visibleContent + 3);
  };

  const Mobileblogs = [
    {
      id: 1,
      image: EffectiveSocialMedia,
      smallHead: "Article",
      head:<Link className="head-sub-head" to='/blog/effective-social-media-marketing-services-in-coimbatore'>Effective Social Media Marketing Services in Coimbatore: Boost Your Brand's Online Presence</Link>,
      paragraph: "Kriya and Reeths believe that social media is more than an engagement platform-it is a growth tool. The company is one of the leading social media marketing services in Coimbatore, whose services help businesses connect with their target audience.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 2,
      image: significance_of_digital,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/significance-of-digital-marketing'>What Is the Significance of Digital Marketing</Link>,
      paragraph: "After the COVID-19 pandemic, every sector of businesses entered online platforms like medicines, dress, groceries etc. As per statistics, nearly 60% of small-medium businesses use digital marketing and plan to invest more in hence, the Global digital marketing and advertising market is forecast to hit $1.5 trillion by 2030.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 3,
      image: Why_Professional_Advertising,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/why-professional-advertising-is-still-essential-for-business-growth-in-2026'>Why Professional Advertising Is Still Essential for Business Growth in 2026</Link>,
      paragraph: "In today's competitive marketplace, simply offering a quality product or service is no longer enough to attract customers. Businesses across every industry are competing for attention both online and offline, making it increasingly difficult to stand out.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 4,
      image: DigitalSocialMedia,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/digital-marketing-company-in-coimbatore'>Digital Marketing Company in Coimbatore</Link>,
      paragraph: "In the fast-paced digital age of today, companies have to keep up to remain competitive. An established online presence is essential to reach and engage your audience effectively. This is where digital marketing company in Coimbatore come in handy. Whether a new business or an old one, using the right digital marketing tools can give your brand's visibility and engagement a big boost.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 5,
      image: Best_Website_Development_Company,
      smallHead: "Article",
      head:<Link className="head-sub-head" to='/blog/best-website-development-company-in-coimbatore'>Finding the Best Website Development Company in Coimbatore: Kriya Reeths</Link>,
      paragraph: "In today’s digital world, web development is crucial for businesses to stay competitive and reach their target audience effectively. A well-designed website acts as the face of a business, fostering customer trust and driving sales. Kriya & Reeths stands out as one of the Best Website Development Company in Coimbatore.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 6,
      image: Digital_Marketing_Company_in_GandhiPuram,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/digital-marketing-company-in-gandhiPuram-coimbatore'>Outline for Long-Form Article: "Digital Marketing Company in GandhiPuram, Coimbatore"</Link>,
      paragraph: "In today’s digital age, having a solid online presence is crucial for business growth. Whether you’re a new startup or an established brand, finding the right digital marketing company in Gandhipuram, Coimbatore, can make a world of difference. With more and more businesses shifting online.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 7,
      image: Digital_Marketing_Company_in_RSPuram,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/digital-marketing-company-in-rs-puram-coimbatore'>Digital Marketing Company in Rs Puram, Coimbatore</Link>,
      paragraph: "In today’s rapidly evolving digital world, businesses in Rs Puram, Coimbatore, need to embrace digital marketing to stay ahead of the competition and drive growth. As a leading digital marketing company in Rs Puram, Coimbatore, Kriya & Reeths understands the importance of tailored strategies that boost visibility, engage customers, and ultimately increase sales.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 8,
      image: Digital_Marketing_Company_in_Peelamedu,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/digital-marketing-company-in-peelamedu-coimbatore'>Digital Marketing Company in Peelamedu, Coimbatore: Boost Your Business with Kriya & Reeths</Link>,
      paragraph: "In today’s digital-first world, businesses in Peelamedu, Coimbatore, need to adapt quickly to stay ahead. A strong online presence isn’t just an advantage—it’s a necessity. It helps you attract new customers, engage with your audience, and build a brand that stands out.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 9,
      image: Digital_Marketing_Agency_in_Coimbatore,
      smallHead: "Article",
      head:  <Link className="head-sub-head" to='/blog/best-digital-marketing-agency-in-coimbatore'>Best Digital Marketing Agency in Coimbatore</Link>,
      paragraph: "In the fast-paced digital world today, finding the best digital marketing agency in Coimbatore can make or mar your business. The problem that you face is that there are so many agencies available, and you need to choose one that suits you the best concerning your customized goals.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 10,
      image: Digital_Marketing_Company_in_Saravanampatti,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/digital-marketing-saravanampatti-in-coimbatore'>Digital Marketing Company in Saravanampatti, Coimbatore</Link>,
      paragraph: "Saravanampatti is one of the fastest-growing tech hubs in Coimbatore, buzzing with IT companies, startups, and educational institutions. With businesses expanding rapidly, standing out in the digital space has become more important. A strong online presence helps attract customers, build trust, and drive growth.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 11,
      image: Digital_Marketing_Company_in_Pollachi,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/digital-marketing-pollachi-in-coimbatore'>The Ultimate Guide to Choosing the Best Digital Marketing Company in Pollachi, Coimbatore</Link>,
      paragraph: "An effort in the digital universe today is to exist, attract customers, and create a brand. A business owner working in Pollachi or Coimbatore would like digital marketing services that are aware of the local scenario to guide them through their day-to-day online business.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 12,
      image: Best_Branding_Company_in_Coimbatore,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/best-branding-company-in-coimbatore'>Best Branding Company in Coimbatore: Build a Powerful Brand with Kriya & Reeths</Link>,
      paragraph: "In today's competitive business world, branding goes beyond just having a catchy logo or an attractive website—it's about crafting a powerful identity that truly connects with your target audience. If you're looking for the best branding company in Coimbatore, you've come to the right place.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 13,
      image: SEO_Services_in_Coimbatore,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog/best-seo-services-in-coimbatore'>SEO Services in Coimbatore - Grow your Business with Kriya & Reeths</Link>,
      paragraph: "Any well-made business website needs visibility, traffic, and conversions. Search Engine Optimization (SEO) helps businesses obtain higher Google rankings for their websites. A higher ranking attracts and converts prospects, hence increasing revenue. Coimbatore has become an emerging industrial hub with global competition.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    
  ];

  const headings = ["Latest Articles", "Digital Marketing Tips", "Branding Strategies", "Event Management", "Guides"];

  return (
    <div className='blogs-mobile-main-container'>
      <div className="row blogs-full-container">
        {Mobileblogs.slice(0, visibleContent).map((blog, index) => (
          <React.Fragment key={blog.id}>
            {index % 3 === 0 && (
              <div className="blogs-heading">
                <h1 className="blogs-main-headings">{headings[(index / 3) % headings.length]}</h1>
              </div>
            )}
            <div className="col-12 col-sm-12 col-md-12 blog-content">
              <img src={blog.image} alt="" className='blogs-img'/>
              <h1 className="sml-head">{blog.smallHead}</h1>
              <h1 className="large-head">{blog.head}</h1>
              <p className="blogs-para">{blog.paragraph}</p>
              <div className="blog-image-contain">
                <img src={blog.personImage} alt="" className='person-img'/>
                <h1 className="person-namee">{blog.personName} <br/><span className="person-discrip">{blog.personDescription}</span></h1>
              </div>
            </div>
          </React.Fragment>
        ))}
        {visibleContent < Mobileblogs.length && (
          <div className="view-more-container">
            <button className="view-more-button" onClick={handleViewMore}>View More</button>
          </div>
        )}
      </div>
    </div>
  );
};
