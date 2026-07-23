import { Component } from "react";
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
        <h1 className="service-heading"><span className="service-number">01</span>Media Branding</h1>
        <p className="service-para ">
        Build a thriving online community, engage your audience on major platforms, and drive conversions with our social media management and paid advertising expertise. 
        </p>
      </div>
    )
  },
  {
    key: 2,
    content: (
      <div className="home-service-container">
        <h1 className="service-heading-2"><span className="service-number">02</span>Content Marketing</h1>
        <p className="service-para ">
        We create high-quality content like blog posts, articles, and website copy that resonates with your audience and achieves your marketing goals.
  
        </p>
      </div>
    )
  },
  {
    key: 3,
    content: (
      <div className="home-service-container">
        <h1 className="service-heading"><span className="service-number">03</span>Email Marketing</h1>
        <p className="service-para">
        Gain valuable insights into email campaign performance to optimize your strategy and maximize your ROI.

 
        </p>
      </div>
    )
  },
  {
    key: 4,
    content: (
      <div className="home-service-container">
        <h1 className="service-heading-2"><span className="service-number">04</span>Influencer Marketing</h1>
        <p className="service-para">
        
  
        We help you find influencers in your industry who can spread your brand message and reach more people.  
        </p>
      </div>
    )
  },
  {
    key: 5,
    content: (
      <div className="home-service-container">
        <h1 className="service-heading-2"><span className="service-number">05</span>Online Advertising </h1>
        <p className="service-para">
        Maximize your advertising ROI with targeted PPC campaigns, conversion rate optimization (CRO), and comprehensive campaign performance tracking.  
 
        </p>
      </div>
    )
  },
  {
    key: 6,
    content: (
      <div className="home-service-container">
        <h1 className="service-heading-2"><span className="service-number">06</span>Branding</h1>
        <p className="service-para">
        We develop a strong and memorable brand identity that connects with your target audience and sets you apart from the competition.  
 
        </p>
      </div>
    )
  },
  {
    key: 7,
    content: (
      <div className="home-service-container">
        <h1 className="service-heading-2"><span className="service-number">07</span>Web Design</h1>
        <p className="service-para">
        Ensure your website looks and functions flawlessly on all devices, mobile, tablet, and desktop, for optimal user experience.

  
 
        </p>
      </div>
    )
  },
  {
    key: 8,
    content: (
      <div className="home-service-container">
        <h1 className="service-heading-2"><span className="service-number">08</span>Video Marketing</h1>
        <p className="service-para">
        We create engaging video content that captures attention, educates your audience about your brand or product, and drives action.  
 
        </p>
      </div>
    )
  },
  {
    key: 9,
    content: (
      <div className="home-service-container">
        <h1 className="service-heading-2"><span className="service-number">09</span> Photography</h1>
        <p className="service-para">
        Our professional photographers create high-quality product images that showcase your products in the best light and increase sales.  
 
        </p>
      </div>
    )
  },
  {
    key: 10,
    content: (
      <div className="home-service-container">
        <h1 className="service-heading-2"><span className="service-number">10</span>Event Management</h1>
        <p className="service-para">
        We take the stress out of event planning. Our team will develop a comprehensive plan, manage logistics, and execute flawless events that achieve your goals.
  
 
        </p>
      </div>
    )
  }
];

const gradientStages = [100,88.88,77.77,66.66,55.55,44.44,33.33,22.22,11.11,0];

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
          <h1 className="our-head">Our</h1>
          <h1 className="service-heade">Services</h1>
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