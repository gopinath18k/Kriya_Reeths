import React, { Component } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";
import "../Carousel/VerticalCarousel.css";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

class BlogsCarousel extends Component {
  state = {
    index: 0,
    goToSlide: null,
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
    // document.addEventListener("wheel", this.handleScroll);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
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
        content: PropTypes.object,
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    animationConfig: PropTypes.object,
    onSlideChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    animationConfig: { tension: 120, friction: 14 },
  };

  modBySlidesLength = (index) => {
    return mod(index, this.props.slides.length);
  };

  moveSlide = (direction) => {
    this.setState((prevState) => {
      const newIndex = this.modBySlidesLength(prevState.index + direction);
      this.props.onSlideChange(newIndex);
      return { index: newIndex, goToSlide: null };
    });
  };

  handleScroll = (event) => {
    const { deltaY } = event;
    if (deltaY > 0) {
      this.moveSlide(1); // Scroll down
    } else {
      this.moveSlide(-1); // Scroll up
    }
  };

  handleKeyDown = (event) => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (event.keyCode === 38) {
      this.moveSlide(-1);
    }
    if (event.keyCode === 40) {
      this.moveSlide(1);
    }
  };

  render() {
    const { animationConfig, showNavigation, slides } = this.props;
    const { index } = this.state;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <div className="BlogsNavigationButtons">
          <button className="BlogsNavBtn" onClick={() => this.moveSlide(-1)}>
            &#8593;
          </button>
          <button className="BlogsNavBtn" onClick={() => this.moveSlide(1)}>
            &#8595;
          </button>
        </div>
      );
    }

    return (
      <React.Fragment>
        <Wrapper>
          {slides.length > 0 && index >= 0 && index < slides.length && (
            <Slide
              key={slides[index].key}
              content={slides[index].content}
              moveSlide={this.moveSlide}
              index={index}
              animationConfig={animationConfig}
              disableClick={true} // Disable clicking
            />
          )}
        </Wrapper>
        {navigationButtons}
      </React.Fragment>
    );
  }
}

export default BlogsCarousel;
