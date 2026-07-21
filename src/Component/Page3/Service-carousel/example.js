import React, { Component } from "react";
import { config } from "react-spring";
import "../Service-carousel/esxample.css";
import SliderSizes from "./SliderSizes";
import VerticalServiceCarousel from "./VerticalCarousel";
import smm from "../../../images/smm.png";
import ppc from "../../../images/ppc.png";
import develop from "../../../images/webdevelop.png";
import event from "../../../images/event.png";
import shoot from "../../../images/shoot.png";
import design from "../../../images/design.png";

let slides = [
  {
    key: 1,
    content: (
      <div className="row service-content-wrapper">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-text-content" >
          <h1 className="service-title">Social Media <br /> Marketing (SMM)</h1>
          <p className="service-description">
          Our social media marketing services encompass platform optimization, crafting engaging content, building strong community interactions, collaborating with influencers, email marketing, and meticulously analyzing performance.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={smm} alt="Social Media Marketing" className="service-image-element" />
        </div>
        <div className="col-0 col-lg-1"></div>
      </div>
    )
  },
  {
    key: 2,
    content: (
      <div className="row service-content-wrapper">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-text-content">
          <h1 className="service-title">Pay-Per-Click Advertising (PPC)</h1>
          <p className="service-description">
            Reach your target audience with our expert PPC management services. We
            optimize your campaigns for maximum ROI, creating compelling ad copy and
            landing pages that convert. Our data-driven approach ensures the best
            possible return on your investment.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={ppc} alt="Pay-Per-Click Advertising" className="service-image-element" />
        </div>
        <div className="col-0 col-lg-1"></div>
      </div>
    )
  },
  {
    key: 3,
    content: (
      <div className="row service-content-wrapper">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-text-content">
          <h1 className="service-title">Website Development</h1>
          <p className="service-description">
            As the best digital marketing company in Coimbatore, we provide website
            development with custom solutions that enhance user experience and
            functionality.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={develop} alt="Website Development" className="service-image-element" />
        </div>
        <div className="col-0 col-lg-1"></div>
      </div>
    )
  },
  {
    key: 4,
    content: (
      <div className="row service-content-wrapper">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-text-content">
          <h1 className="service-title">Event Management</h1>
          <p className="service-description">
            We are your trusted event management experts in Coimbatore. Our event
            management services cover venue selection, theme development, catering,
            entertainment, and flawless coordination to create unforgettable events.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={event} alt="Event Management" className="service-image-element" />
        </div>
        <div className="col-0 col-lg-1"></div>
      </div>
    )
  },
  {
    key: 5,
    content: (
      <div className="row service-content-wrapper">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-text-content">
          <h1 className="service-title">Video & Photo Shoots</h1>
          <p className="service-description">
            Capture your story through our stunning visuals. Our expert team
            specializes in capturing breathtaking photos and engaging videos that
            tell your brand's story. From product shoots to corporate events, we
            deliver high-quality content that leaves a lasting impression.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={shoot} alt="Video and Photo Shoots" className="service-image-element" />
        </div>
        <div className="col-0 col-lg-1"></div>
      </div>
    )
  },
  {
    key: 6,
    content: (
      <div className="row service-content-wrapper">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-text-content">
          <h1 className="service-title">Graphic Design</h1>
          <p className="service-description">
            Our graphic design services create lasting impressions with visually
            stunning designs. From logos and branding to print and digital
            materials, we deliver captivating visuals that align with your brand
            identity.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={design} alt="Graphic Design" className="service-image-element" />
        </div>
        <div className="col-0 col-lg-0"></div>
      </div>
    )
  }
];

const gradientStages = [100, 80, 60, 40, 20, 0];

export default class ServiceCarousel extends Component {
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
      <div className="carousel-main-wrapper">
        <div className="carousel-inner-container"  data-aos="zoom-in"
     data-aos-duration="1300" >
          <VerticalServiceCarousel
            slides={slides}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
            goToSlide={this.state.goToSlide}
            onSlideChange={this.handleSlideChange}
          />
        </div>
        <div className="slider-controls-wrapper" data-aos="fade-up"
     data-aos-duration="1300">
          <SliderSizes
            currentValue={this.state.sliderValue}
            onSliderChange={this.handleSliderChange}
          />
        </div>
      </div>
    );
  }
}
