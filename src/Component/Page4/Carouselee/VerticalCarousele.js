import React, { Component } from "react";
import styled from "@emotion/styled";
import Slide from "./Slidee";
import PropTypes from "prop-types";
import "./VerticalCarouselee.css";

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

class HorizontalCarousel extends Component {
  state = {
    index: 0,
    goToSlide: null,
    disableScroll: false, // Add this state
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
    // Remove this line
    // document.addEventListener("wheel", this.handleScroll);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
    // Remove this line
    // document.removeEventListener("wheel", this.handleScroll);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.goToSlide !== this.props.goToSlide) {
      this.setState({ index: this.props.goToSlide });
    }
  }

  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        content: PropTypes.object
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    offsetRadius: PropTypes.number,
    animationConfig: PropTypes.object,
    onSlideChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    offsetRadius: 2,
    animationConfig: { tension: 120, friction: 14 }
  };

  modBySlidesLength = index => {
    return mod(index, this.props.slides.length);
  };

  moveSlide = direction => {
    this.setState(prevState => {
      const newIndex = this.modBySlidesLength(prevState.index + direction);
      this.props.onSlideChange(newIndex);
      return { index: newIndex, goToSlide: null };
    });
  };

  getPresentableSlides() {
    const { slides } = this.props;
    const { index } = this.state;
    return [slides[this.modBySlidesLength(index)]];
  }

  // Remove this function
  // handleScroll = event => {
  //   if (this.state.disableScroll) return; // Check disableScroll state

  //   const { deltaY } = event;
  //   if (deltaY > 0) {
  //     this.moveSlide(1); // Scroll down
  //   } else {
  //     this.moveSlide(-1); // Scroll up
  //   }
  // };

  handleKeyDown = event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (event.keyCode === 37) {
      this.moveSlide(-1); // Left arrow
    }
    if (event.keyCode === 39) {
      this.moveSlide(1); // Right arrow
    }
  };

  handleMouseEnter = () => {
    this.setState({ disableScroll: true }); // Disable scroll on mouse enter
  };

  handleMouseLeave = () => {
    this.setState({ disableScroll: false }); // Enable scroll on mouse leave
  };

  render() {
    const { animationConfig, showNavigation } = this.props;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <div className="NavigationBtn">
          {/* <button className="Service-NavBtn" onClick={() => this.moveSlide(-1)}>&#8592;</button>
          <button className="Service-NavBtn" onClick={() => this.moveSlide(1)}>&#8594;</button> */}
        </div>
      );
    }

    return (
      <React.Fragment>
        <CarouselWrapper
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={slide.key}
              content={slide.content}
              moveSlide={this.moveSlide}
              offsetRadius={0}
              index={presentableIndex}
              animationConfig={animationConfig}
            />
          ))}
        </CarouselWrapper>
        {navigationButtons}
      </React.Fragment>
    );
  }
}

export default HorizontalCarousel;
