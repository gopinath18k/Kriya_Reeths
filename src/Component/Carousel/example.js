import { Component } from "react";
import { Link } from "react-router-dom";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";
import "./example.css";
import SliderSizes from "./SliderSizes";
import greybg from '../../images/grey-text.svg'

let slides = [
  {
    key: 1,
    content: (
      <div className="home-service-container">
        <h3 className="service-heading">
            <span className="service-number">01</span>Creative Branding
        </h3>
        
        <p className="service-para ">
        Build a memorable brand identity with creative strategies, compelling visuals, and designs that connect with your audience. 
        </p>
      </div>
    )
  },
  {
    key: 2,
    content: (
      <div className="home-service-container">
        <h3 className="service-heading-2"><span className="service-number">02</span>Video Editing</h3>
        <p className="service-para ">
        Transform raw footage into engaging, polished videos with seamless editing, creative effects, and professional storytelling.
  
        </p>
      </div>
    )
  },
  {
    key: 3,
    content: (
      <div className="home-service-container">
        <h3 className="service-heading"><span className="service-number">03</span>Web Development</h3>
        <p className="service-para">
        Build fast, responsive, and user friendly websites designed to strengthen your brand and deliver seamless digital experiences.

 
        </p>
      </div>
    )
  },
  {
    key: 4,
    content: (
      <div className="home-service-container">
        <h3 className="service-heading-2"><span className="service-number">04</span>SEO & AEO & GEO</h3>
        <p className="service-para">
        
  
        Improve your online visibility across search engines and AI platforms with smart SEO, AEO, and GEO strategies.
        </p>
      </div>
    )
  },
  {
    key: 5,
    content: (
      <div className="home-service-container">
        <h3 className="service-heading-2"><span className="service-number">05</span>Social Strategy(SMM)</h3>
        <p className="service-para">
        Grow your social presence with strategic content, audience engagement, and campaigns designed to build meaningful connections.
 
        </p>
      </div>
    )
  },
  {
    key: 6,
    content: (
      <div className="home-service-container">
        <h3 className="service-heading-2"><span className="service-number">06</span>Growth Marketing</h3>
        <p className="service-para">
        Accelerate business growth with data driven marketing strategies, targeted campaigns, and continuous performance optimization.
 
        </p>
      </div>
    )
  },
  {
    key: 7,
    content: (
      <div className="home-service-container">
        <h3 className="service-heading-2"><span className="service-number">07</span>Graphic Design</h3>
        <p className="service-para">
        Create impactful visual designs that communicate your brand message clearly and leave a lasting impression.
        </p>
      </div>
    )
  },
  {
    key: 8,
    content: (
      <div className="home-service-container">
        <h3 className="service-heading-2"><span className="service-number">08</span>Videography</h3>
        <p className="service-para">
        Capture professional, visually compelling videos that tell your story and showcase your brand with creativity and impact.
 
        </p>
      </div>
    )
  }
];

const gradientStages = [100, 85.71, 71.43, 57.14, 42.86, 28.57, 14.29, 0];

export default class Examplee extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    sliderValue: gradientStages[0]
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
      <div className="main-container"
      >
        <div className='bg1-cont'>
                        <img className='bg-txt11' src={greybg} alt="" />
                    </div>
        <div className="our-service-conatiner"data-aos="zoom-in"
     data-aos-duration="1300">
          <h2 className="our-head">Our</h2>
          <h2 className="service-heade">Services</h2>
        </div>
        <div className="chiang-kuang" data-aos="fade-up"
     data-aos-duration="1000">
          <VerticalCarousel
            slides={slides}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
            goToSlide={this.state.goToSlide}
            onSlideChange={this.handleSlideChange}
          />
        </div>
        <div className="stick-scroll" data-aos="fade-up"
     data-aos-duration="1000">
          <SliderSizes
            currentValue={this.state.sliderValue}
            onSliderChange={this.handleSliderChange}
          />
        </div>
      </div>
    );
  }
}