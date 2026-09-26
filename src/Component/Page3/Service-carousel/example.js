import { Component } from "react";
import { Link } from "react-router-dom";
import { config } from "react-spring";
import "../Service-carousel/esxample.css";
import SliderSizes from "./SliderSizes";
import VerticalServiceCarousel from "./VerticalCarousel";
import smm from "../../../images/smm.webp";
import ppc from "../../../images/ppc.webp";
import develop from "../../../images/webdevelop.webp";
import VideoEditing from "../../../images/VideoEditing.webp";
import shoot from "../../../images/shoot.webp";
import design from "../../../images/design.webp";
import seo from "../../../images/SeoAeoGeo.webp";

let slides = [
  {
    key: 1,
    content: (
      <div className="row service-content-wrapper">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-text-content" >
          <h2 className="service-title">
            <Link to="/services/social-media-marketing" className="service-title-link" title="View Social Media Marketing Details">
              Social Media <br /> Marketing (SMM)
            </Link>
          </h2>
          <p className="service-description">
          Grow your brand with social media marketing, engaging content, targeted campaigns, and strategic audience engagement across popular social media platforms.
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
          <h2 className="service-title">
            <Link to="/services/performance-marketing" className="service-title-link" title="View Performance Marketing Details">
              Performance Marketing (PPC)
            </Link>
          </h2>
          <p className="service-description">
            Drive measurable business growth through performance marketing, targeted advertising, lead generation, conversion optimization, and data driven digital campaigns focused on better results.
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
          <h2 className="service-title">
            <Link to="/services/website-development" className="service-title-link" title="View Website Development Details">
              Website Development
            </Link>
          </h2>
          <p className="service-description">
            Custom web development services creating fast, responsive, SEO-friendly websites that improve user experience, strengthen your brand, and generate quality business leads.
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
          <h2 className="service-title">
            <Link to="/services/seo-aeo-geo" className="service-title-link" title="View SEO & AEO & GEO Details">
              SEO & AEO & GEO
            </Link>
          </h2>
          <p className="service-description">
            Improve search visibility with SEO, AEO, and GEO strategies designed to rank your business across Google, AI search engines, and generative platforms.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={seo} alt="Event Management" className="service-image-element" />
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
          <h2 className="service-title">
            <Link to="/services/video-editing" className="service-title-link" title="View Video Editing Details">
              Video Editing
            </Link>
          </h2>
          <p className="service-description">
            Professional video editing services that transform raw footage into engaging, high-quality videos for social media, advertising, branding, and digital marketing campaigns.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={VideoEditing} alt="Video and Photo Shoots" className="service-image-element" />
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
          <h2 className="service-title">
            <Link to="/services/graphic-design" className="service-title-link" title="View Graphic Design Details">
              Graphic Design
            </Link>
          </h2>
          <p className="service-description">
            Professional graphic design services creating impactful social media creatives, marketing materials, brand visuals, and promotional designs that strengthen your business identity.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={design} alt="Graphic Design" className="service-image-element" />
        </div>
        <div className="col-0 col-lg-0"></div>
      </div>
    )
  },
  {
    key: 7,
    content: (
      <div className="row service-content-wrapper">
        <div className="col-0 col-lg-1"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-text-content">
          <h2 className="service-title">
            <Link to="/services/videography" className="service-title-link" title="View Videography Details">
              Videography
            </Link>
          </h2>
          <p className="service-description">
            Professional videography services for brands, products, corporate events, and promotional campaigns, creating compelling visual content that strengthens your digital presence.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-image-wrapper">
          <img src={shoot} alt="SEO & AEO & GEO" className="service-image-element" />
        </div>
        <div className="col-0 col-lg-0"></div>
      </div>
    )
  }
];

const gradientStages = [100, 83.33, 66.66, 50, 33.33, 16.66, 0];

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
