import { Component } from "react";
import { config } from "react-spring";
import "./example.css";
import BlogsSliderSizes from "./SliderSizes";
import BlogsCarousel from "./VerticalCarousel";
import blog1 from "../../../../images/blog2.webp";
import blog2 from "../../../../images/blog3.webp";
import blog3 from "../../../../images/KR-BLOG-Why-Professional-Advertising (2).webp";

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
          <img src={blog2} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog-1'><h1 className="blogs-head">Benefits of Social Media Marketing(Smm)</h1></Link>
          <p className="blogs-paragraph">
          Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.   
          </p>
          <div className="blog-image-name">
            <img src={stark} alt="" className='person-images'/>
            <h1 className="person-name">Kriya & Reeths <br></br><span className="person-discription">Coimbatore</span></h1>
          </div>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3   all-blog-content">
        <img src={blog1} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <Link className="head-sub-head" to='/blog-2'><h1 className="blogs-head">What Is the Significance of Digital Marketing </h1></Link>
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
          <Link className="head-sub-head" to='/Why-Professional-Advertising-Is-Still-Essential-for-Business-Growth-in-2026'><h1 className="blogs-head">Why Professional Advertising Is Still Essential for Business Growth in 2026</h1></Link>
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
          <img src={blog2} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <h1 className="blogs-head">Benefits of Social Media Marketing(Smm)</h1>
          <p className="blogs-paragraph">
          Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.   
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
    key: 3,
    content: (
      <div className="row all-blog-conatiner">
        <div className="all-blogs-heading">
          <h1 className="blogs-headings">Latest Articles</h1>
        </div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3  all-blog-content">
          <img src={blog2} alt="" className='blogs-images'/>
          <h1 className="blogs-small-head">Article </h1>
          <h1 className="blogs-head">Benefits of Social Media Marketing(Smm)</h1>
          <p className="blogs-paragraph">
          Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.   
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
          <h1 className="blogs-head">Benefits of Social Media Marketing(Smm)</h1>
          <p className="blogs-paragraph">
          Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.   
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
          <h1 className="blogs-head">Benefits of Social Media Marketing(Smm)</h1>
          <p className="blogs-paragraph">
          Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness.   
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
