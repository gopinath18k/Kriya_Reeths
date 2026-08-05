import { Component } from "react";
import { config } from "react-spring";
import "./example.css";
import BlogsSliderSizes from "./SliderSizes";
import BlogsCarousel from "./VerticalCarousel";
import EffectiveSocialMedia from "../../../../images/Social Media Marketing Services in Coimbatore.webp";
import DigitalSocialMedia from "../../../../images/Digital Marketing Company in Coimbatore.webp";
import blog1 from "../../../../images/blog2.webp";
import blog3 from "../../../../images/KR-BLOG-Why-Professional-Advertising (2).webp";
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
let slides = [
  {
    key: 1,
    content: (
      <div className="row all-blog-conatiner">
        <div className="all-blogs-heading">
          <h1 className="blogs-headings">Latest Articles</h1>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3  all-blog-content">
          <img src={EffectiveSocialMedia} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog/effective-social-media-marketing-services-in-coimbatore'><h1 className="blogs-head">Effective Social Media Marketing Services in Coimbatore: Boost Your Brand's Online Presence</h1></Link>
          <p className="blogs-paragraph">
          Kriya and Reeths believe that social media is more than an engagement platform-it is a growth tool. The company is one of the leading social media marketing services in Coimbatore, whose services help businesses connect with their target audience.
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3   all-blog-content">
        <img src={blog1} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog/significance-of-digital-marketing'><h1 className="blogs-head">What Is the Significance of Digital Marketing </h1></Link>
          <p className="blogs-paragraph">
          After the COVID-19 pandemic, every sector of businesses entered online platforms like medicines, dress, groceries etc. As per statistics, nearly 60% of small-medium businesses use digital marketing and plan to invest more in hence, the Global digital marketing and advertising market is forecast to hit $1.5 trillion by 2030.    
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3   all-blog-content">
        <img src={blog3} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article</h1>
          <Link className="head-sub-head" to='/blog/why-professional-advertising-is-still-essential-for-business-growth-in-2026'><h1 className="blogs-head">Why Professional Advertising Is Still Essential for Business Growth in 2026</h1></Link>
          <p className="blogs-paragraph">
          In today's competitive marketplace, simply offering a quality product or service is no longer enough to attract customers. Businesses across every industry are competing for attention both online and offline, making it increasingly difficult to stand out.
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 2,
    content: (
      <div className="row all-blog-conatiner">
        <div className="all-blogs-heading">
          <h1 className="blogs-headings">Latest Articles</h1>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3  all-blog-content">
          <img src={DigitalSocialMedia} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog/digital-marketing-company-in-coimbatore'><h1 className="blogs-head">Digital Marketing Company in Coimbatore</h1></Link>
          <p className="blogs-paragraph">
          In the fast-paced digital age of today, companies have to keep up to remain competitive. An established online presence is essential to reach and engage your audience effectively. This is where digital marketing company in Coimbatore come in handy. Whether a new business or an old one, using the right digital marketing tools can give your brand's visibility and engagement a big boost.
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3   all-blog-content">
        <img src={Best_Website_Development_Company} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog/best-website-development-company-in-coimbatore'><h1 className="blogs-head">Finding the Best Website Development Company in Coimbatore: Kriya Reeths</h1></Link>
          <p className="blogs-paragraph">
          In today’s digital world, web development is crucial for businesses to stay competitive and reach their target audience effectively. A well-designed website acts as the face of a business, fostering customer trust and driving sales. Kriya & Reeths stands out as one of the Best Website Development Company in Coimbatore.    
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3   all-blog-content">
        <img src={Digital_Marketing_Company_in_GandhiPuram} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article</h1>
          <Link className="head-sub-head" to='/blog/digital-marketing-company-in-gandhiPuram-coimbatore'><h1 className="blogs-head">Outline for Long-Form Article: "Digital Marketing Company in GandhiPuram, Coimbatore"</h1></Link>
          <p className="blogs-paragraph">
          In today’s digital age, having a solid online presence is crucial for business growth. Whether you’re a new startup or an established brand, finding the right digital marketing company in Gandhipuram, Coimbatore, can make a world of difference. With more and more businesses shifting online.
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
      </div>
    )
  },
 
  {
    key: 3,
    content: (
      <div className="row all-blog-conatiner">
        <div className="all-blogs-heading">
          <h1 className="blogs-headings">Latest Articles</h1>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3  all-blog-content">
          <img src={Digital_Marketing_Company_in_RSPuram} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog/digital-marketing-company-in-rs-puram-coimbatore'><h1 className="blogs-head">Digital Marketing Company in Rs Puram, Coimbatore</h1></Link>
          <p className="blogs-paragraph">
          In today’s rapidly evolving digital world, businesses in Rs Puram, Coimbatore, need to embrace digital marketing to stay ahead of the competition and drive growth. As a leading digital marketing company in Rs Puram, Coimbatore, Kriya & Reeths understands the importance of tailored strategies that boost visibility, engage customers, and ultimately increase sales.
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3   all-blog-content">
        <img src={Digital_Marketing_Company_in_Peelamedu} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog/digital-marketing-company-in-peelamedu-coimbatore'><h1 className="blogs-head">Digital Marketing Company in Peelamedu, Coimbatore: Boost Your Business with Kriya & Reeths </h1></Link>
          <p className="blogs-paragraph">
          In today’s digital-first world, businesses in Peelamedu, Coimbatore, need to adapt quickly to stay ahead. A strong online presence isn’t just an advantage—it’s a necessity. It helps you attract new customers, engage with your audience, and build a brand that stands out.    
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3   all-blog-content">
        <img src={Digital_Marketing_Agency_in_Coimbatore} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article</h1>
          <Link className="head-sub-head" to='/blog/best-digital-marketing-agency-in-coimbatore'><h1 className="blogs-head">Best Digital Marketing Agency in Coimbatore</h1></Link>
          <p className="blogs-paragraph">
          In the fast-paced digital world today, finding the best digital marketing agency in Coimbatore can make or mar your business. The problem that you face is that there are so many agencies available, and you need to choose one that suits you the best concerning your customized goals.
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 4,
    content: (
      <div className="row all-blog-conatiner">
        <div className="all-blogs-heading">
          <h1 className="blogs-headings">Latest Articles</h1>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3  all-blog-content">
          <img src={Digital_Marketing_Company_in_Saravanampatti} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog/digital-marketing-saravanampatti-in-coimbatore'><h1 className="blogs-head">Digital Marketing Company in Saravanampatti, Coimbatore</h1></Link>
          <p className="blogs-paragraph">
          Saravanampatti is one of the fastest-growing tech hubs in Coimbatore, buzzing with IT companies, startups, and educational institutions. With businesses expanding rapidly, standing out in the digital space has become more important. A strong online presence helps attract customers, build trust, and drive growth.
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3   all-blog-content">
        <img src={Digital_Marketing_Company_in_Pollachi} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog/digital-marketing-pollachi-in-coimbatore'><h1 className="blogs-head">The Ultimate Guide to Choosing the Best Digital Marketing Company in Pollachi, Coimbatore</h1></Link>
          <p className="blogs-paragraph">
          An effort in the digital universe today is to exist, attract customers, and create a brand. A business owner working in Pollachi or Coimbatore would like digital marketing services that are aware of the local scenario to guide them through their day-to-day online business.    
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3   all-blog-content">
        <img src={Best_Branding_Company_in_Coimbatore} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article</h1>
          <Link className="head-sub-head" to='/blog/best-branding-company-in-coimbatore'><h1 className="blogs-head">Best Branding Company in Coimbatore: Build a Powerful Brand with Kriya & Reeths</h1></Link>
          <p className="blogs-paragraph">
          In today's competitive business world, branding goes beyond just having a catchy logo or an attractive website—it's about crafting a powerful identity that truly connects with your target audience. If you're looking for the best branding company in Coimbatore, you've come to the right place.
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 5,
    content: (
      <div className="row all-blog-conatiner">
        <div className="all-blogs-heading">
          <h1 className="blogs-headings">Latest Articles</h1>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3  all-blog-content">
          <img src={SEO_Services_in_Coimbatore} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog/best-seo-services-in-coimbatore'><h1 className="blogs-head">SEO Services in Coimbatore - Grow your Business with Kriya & Reeths</h1></Link>
          <p className="blogs-paragraph">
          Any well-made business website needs visibility, traffic, and conversions. Search Engine Optimization (SEO) helps businesses obtain higher Google rankings for their websites. A higher ranking attracts and converts prospects, hence increasing revenue. Coimbatore has become an emerging industrial hub with global competition.
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        
      </div>
    )
  }
];

const gradientStages = [100, 75, 50, 25, 0];

export default class Blogss extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    sliderValue: gradientStages[0],
  };

  handleSliderChange = (newValue) => {
    const index = gradientStages.indexOf(newValue);
    this.setState({ sliderValue: newValue, goToSlide: index });
  };

  handleSlideChange = (newIndex) => {
    const newValue = gradientStages[newIndex];
    this.setState({ sliderValue: newValue, goToSlide: newIndex });
  };

  render() {
    return (
      <div className="blogs-main-container">
        <div className="blogs-carousel-container">
          <BlogsCarousel
            slides={slides}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
            goToSlide={this.state.goToSlide}
            onSlideChange={this.handleSlideChange}
          />
        </div>
        <div className="blogs-sliding-main">
          <BlogsSliderSizes
            currentValue={this.state.sliderValue}
            onSliderChange={this.handleSliderChange}
          />
        </div>
      </div>
    );
  }
}
