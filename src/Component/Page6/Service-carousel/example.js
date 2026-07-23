import { Component } from "react";
import { config } from "react-spring";
import "../Service-carousel/esxample.css";
import SliderSizes from "./SliderSizes";
import VerticalServiceCarousel from "./VerticalCarousel";
import carrer from "../../../images/c1.webp"
import intern from "../../../images/c2.webp"
import workshop from "../../../images/c3.webp"
import digital from "../../../images/c4.webp"
import { Link } from 'react-router-dom';


let slides = [
  {
    key: 1,
    
    content: (
      <div className="row all-service-conatinere">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5  all-images" data-aos="fade-right"
        data-aos-duration="1300">
          <img src={carrer} alt="" className='service-images'/>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 career-all"  data-aos="fade-left"
        data-aos-duration="1300">
        <div className="career-txt">
          <h1 className="services-head">Careers</h1>
          <p className="services-paragraph">
          At Kriya & Reeths, you'll have the opportunity to work on exciting projects, learn from industry experts, and grow your career.
          Explore our current openings, internship opportunities, and training programs below.
 
          </p>
          
          <Link className="Carrers-Link" to='https://docs.google.com/forms/d/e/1FAIpQLSeSPgYc06T--d2PRB9nrQ0DKA3plPu6l5bZOR7Qb7skR_iJcw/viewform?usp=sf_link'><div className='career-but'>Register</div></Link>
        </div>
        </div>
        
      </div>
    )
  },
  {
    key: 2,
    content: (
      <div className="row all-service-conatinere">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5  all-images" data-aos="fade-right"
        data-aos-duration="1300">
          <img src={intern} alt="" className='service-images'/>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6  career-all" data-aos="fade-left"
        data-aos-duration="1300">
        <div className="career-txt">
          <h1 className="services-head">Internship<br/> Opportunities</h1>
          <p className="services-paragraph">
          Gain practical experience and kickstart your digital marketing career with our internship program. Work alongside industry experts, learn from real-world projects, and build a strong foundation for your future. 
          </p>
          <Link className="Carrers-Link" to='https://docs.google.com/forms/d/e/1FAIpQLSeTWc2rt0hBzOO3JyGllzF8dnVuNcmCwEQ9BYf_w50FlnKsMA/viewform?usp=sf_link'><div className='career-but'>Register</div></Link>
        </div>
        </div>
        
      </div>
    )
  },
  {
    key: 3,
    content: (
      <div className="row all-service-conatinere">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 all-images" data-aos="fade-right"
        data-aos-duration="1300">
          <img src={workshop} alt="" className='service-images'/>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 career-all" data-aos="fade-left"
        data-aos-duration="1300">
        <div className="career-txt">
          <h1 className="services-head">Student <br></br> Workshops</h1>
          <p className="services-paragraph">
          Our student workshops are designed to introduce aspiring marketers to the exciting world of digital marketing. Learn about the latest trends, gain hands-on experience, and network with industry professionals. 
          </p>
          <Link className="Carrers-Link" to='https://docs.google.com/forms/d/e/1FAIpQLSdFR7E9yuqWAdk1wEAq_tPlmDTaodugHZAaUdJbpExO9dhnSg/viewform?usp=sf_link'><div className='career-but'>Register</div></Link>
        </div>
        </div>

        
      </div>
    )
  },
  {
    key: 4,
    content: (
      <div className="row all-service-conatinere">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5  all-images" data-aos="fade-right"
        data-aos-duration="1300">
          <img src={digital} alt="" className='service-images'/>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 career-all" data-aos="fade-left"
        data-aos-duration="1300">
        <div className="career-txt">
          <h1 className="services-head">Digital Marketing Training</h1>
          <p className="services-paragraph">
          Our comprehensive digital marketing training programs are designed to equip you with the skills and knowledge needed to succeed in today's competitive digital landscape. From SEO and social media to content marketing and analytics, our training covers all aspects of digital marketing.
 
          </p>
          <Link className="Carrers-Link" to='https://docs.google.com/forms/d/e/1FAIpQLSd1FJQgIyGs3TS5L5eG-4RXglq4js-jsO9IRrr0K1pKGJ_cMQ/viewform?usp=sf_link'><div className='career-but'>Register</div></Link>
        </div>
        </div>
        
      </div>
    )
  },
  
];

const gradientStages = [ 100,66.66,33.33, 0];

export default class Examplesscr extends Component {
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
      <div className="Vertical-main-container"
      >
        
        <div className="Vertical-carousel-container">
          <VerticalServiceCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
          goToSlide={this.state.goToSlide}
          onSlideChange={this.handleSlideChange}/>
          
        </div>
        <div className="sliding-main-contain">
          <SliderSizes
            currentValue={this.state.sliderValue}
            onSliderChange={this.handleSliderChange}
          />
        </div>
      </div>
    );
  }
}
