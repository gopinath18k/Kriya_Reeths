import { Component } from "react";
import { config } from "react-spring";
import "./example.css";
import BlogsSliderSizes from "./SliderSizes";
import BlogsCarousel from "./VerticalCarousel";
import EffectiveSocialMedia from "../../../../images/Social Media Marketing Services in Coimbatore.webp";
import DigitalSocialMedia from "../../../../images/Digital Marketing Company in Coimbatore.webp";
import blog1 from "../../../../images/blog2.webp";
import blog2 from "../../../../images/blog3.webp";
import blog3 from "../../../../images/KR-BLOG-Why-Professional-Advertising (2).webp";
import Best_Website_Development_Company from "../../../../images/Best Website Development Company.webp";
import Digital_Marketing_Company_in_GandhiPuram from "../../../../images/Digital Marketing Company in GandhiPuram.webp";

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
          <Link className="head-sub-head" to='/effective-social-media-marketing-services-in-coimbatore'><h1 className="blogs-head">Effective Social Media Marketing Services in Coimbatore: Boost Your Brand's Online Presence</h1></Link>
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
          <Link className="head-sub-head" to='/significance-of-digital-marketing'><h1 className="blogs-head">What Is the Significance of Digital Marketing </h1></Link>
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
          <Link className="head-sub-head" to='/why-professional-advertising-is-still-essential-for-business-growth-in-2026'><h1 className="blogs-head">Why Professional Advertising Is Still Essential for Business Growth in 2026</h1></Link>
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
          <Link className="head-sub-head" to='/digital-marketing-company-in-coimbatore'><h1 className="blogs-head">Digital Marketing Company in Coimbatore</h1></Link>
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
          <Link className="head-sub-head" to='/best-website-development-company-in-coimbatore'><h1 className="blogs-head">Finding the Best Website Development Company in Coimbatore: Kriya Reeths</h1></Link>
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
          <Link className="head-sub-head" to='/digital-marketing-company-in-gandhiPuram-coimbatore'><h1 className="blogs-head">Outline for Long-Form Article: "Digital Marketing Company in GandhiPuram, Coimbatore"</h1></Link>
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
          <img src={blog2} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <h1 className="blogs-head">Effective Social Media Marketing Services in Coimbatore: Boost Your Brand's Online Presence</h1>
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
          <h1 className="blogs-head">What Is the Significance of Digital Marketing </h1>
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
          <h1 className="blogs-head">Why Professional Advertising Is Still Essential for Business Growth in 2026</h1>
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
    key: 4,
    content: (
      <div className="row all-blog-conatiner">
        <div className="all-blogs-heading">
          <h1 className="blogs-headings">Latest Articles</h1>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3  all-blog-content">
          <img src={blog2} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <h1 className="blogs-head">Effective Social Media Marketing Services in Coimbatore: Boost Your Brand's Online Presence</h1>
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
          <h1 className="blogs-head">What Is the Significance of Digital Marketing </h1>
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
          <h1 className="blogs-head">Why Professional Advertising Is Still Essential for Business Growth in 2026</h1>
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
    key: 5,
    content: (
      <div className="row all-blog-conatiner">
        <div className="all-blogs-heading">
          <h1 className="blogs-headings">Latest Articles</h1>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3  all-blog-content">
          <img src={blog2} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <h1 className="blogs-head">Effective Social Media Marketing Services in Coimbatore: Boost Your Brand's Online Presence</h1>
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
          <h1 className="blogs-head">What Is the Significance of Digital Marketing </h1>
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
          <h1 className="blogs-head">Why Professional Advertising Is Still Essential for Business Growth in 2026</h1>
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
