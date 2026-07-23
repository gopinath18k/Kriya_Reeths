import React, { useState } from 'react';
import "./Home.css";
import blog1 from "../../../../images/blog2.webp";
import blog2 from "../../../../images/blog3.webp";
import blog3 from "../../../../images/KR-BLOG-Why-Professional-Advertising (2).webp";
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
      image: blog1,
      smallHead: "Article",
      head:<Link className="head-sub-head" to='/blog-1'>Benefits of Social Media Marketing(Smm)</Link>,
      paragraph: "Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 2,
      image: blog2,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-2'>What Is the Significance of Digital Marketing</Link>,
      paragraph: "After the COVID-19 pandemic, every sector of businesses entered online platforms like medicines, dress, groceries etc. As per statistics, nearly 60% of small-medium businesses use digital marketing and plan to invest more in hence, the Global digital marketing and advertising market is forecast to hit $1.5 trillion by 2030.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 3,
      image: blog3,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/Why-Professional-Advertising-Is-Still-Essential-for-Business-Growth-in-2026'>Why Professional Advertising Is Still Essential for Business Growth in 2026</Link>,
      paragraph: "In today's competitive marketplace, simply offering a quality product or service is no longer enough to attract customers. Businesses across every industry are competing for attention both online and offline, making it increasingly difficult to stand out.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 4,
      image: blog1,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-1'>Benefits of Social Media Marketing(Smm)</Link>,
      paragraph: "Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 5,
      image: blog2,
      smallHead: "Article",
      head:<Link className="head-sub-head" to='/blog-2'>What Is the Significance of Digital Marketing</Link>,
      paragraph: "After the COVID-19 pandemic, every sector of businesses entered online platforms like medicines, dress, groceries etc. As per statistics, nearly 60% of small-medium businesses use digital marketing and plan to invest more in hence, the Global digital marketing and advertising market is forecast to hit $1.5 trillion by 2030.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 6,
      image: blog3,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-3'>Why Professional Advertising Is Still Essential for Business Growth in 2026</Link>,
      paragraph: "In today's competitive marketplace, simply offering a quality product or service is no longer enough to attract customers. Businesses across every industry are competing for attention both online and offline, making it increasingly difficult to stand out.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 7,
      image: blog1,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-1'>Benefits of Social Media Marketing(Smm)</Link>,
      paragraph: "Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 8,
      image: blog2,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-2'>What Is the Significance of Digital Marketing</Link>,
      paragraph: "After the COVID-19 pandemic, every sector of businesses entered online platforms like medicines, dress, groceries etc. As per statistics, nearly 60% of small-medium businesses use digital marketing and plan to invest more in hence, the Global digital marketing and advertising market is forecast to hit $1.5 trillion by 2030.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 9,
      image: blog3,
      smallHead: "Article",
      head:  <Link className="head-sub-head" to='/blog-3'>Why Professional Advertising Is Still Essential for Business Growth in 2026</Link>,
      paragraph: "In today's competitive marketplace, simply offering a quality product or service is no longer enough to attract customers. Businesses across every industry are competing for attention both online and offline, making it increasingly difficult to stand out.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 10,
      image: blog1,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-1'>Benefits of Social Media Marketing(Smm)</Link>,
      paragraph: "Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 11,
      image: blog2,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-2'>What Is the Significance of Digital Marketing</Link>,
      paragraph: "After the COVID-19 pandemic, every sector of businesses entered online platforms like medicines, dress, groceries etc. As per statistics, nearly 60% of small-medium businesses use digital marketing and plan to invest more in hence, the Global digital marketing and advertising market is forecast to hit $1.5 trillion by 2030.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 12,
      image: blog3,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-3'>Why Professional Advertising Is Still Essential for Business Growth in 2026</Link>,
      paragraph: "In today's competitive marketplace, simply offering a quality product or service is no longer enough to attract customers. Businesses across every industry are competing for attention both online and offline, making it increasingly difficult to stand out.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 13,
      image: blog1,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-1'>Benefits of Social Media Marketing(Smm)</Link>,
      paragraph: "Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 14,
      image: blog2,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-2'>What Is the Significance of Digital Marketing</Link>,
      paragraph: "After the COVID-19 pandemic, every sector of businesses entered online platforms like medicines, dress, groceries etc. As per statistics, nearly 60% of small-medium businesses use digital marketing and plan to invest more in hence, the Global digital marketing and advertising market is forecast to hit $1.5 trillion by 2030.",
      personImage: stark,
      personName: "Kriya & Reeths",
      personDescription: "Coimbatore"
    },
    {
      id: 15,
      image: blog3,
      smallHead: "Article",
      head: <Link className="head-sub-head" to='/blog-3'>Why Professional Advertising Is Still Essential for Business Growth in 2026</Link>,
      paragraph: "In today's competitive marketplace, simply offering a quality product or service is no longer enough to attract customers. Businesses across every industry are competing for attention both online and offline, making it increasingly difficult to stand out.",
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
