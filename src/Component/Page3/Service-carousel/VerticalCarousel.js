import { Component } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";
import "./vertical-service-carousel.css"; // Ensure correct path

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

class VerticalServiceCarousel extends Component {
  state = {
    index: 0,
    goToSlide: null,
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("wheel", this.handleScroll); // Enable scroll handling if needed
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("wheel", this.handleScroll);
  }

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
    return (
      ((index % this.props.slides.length) + this.props.slides.length) %
      this.props.slides.length
    );
  };

  moveSlide = (direction) => {
    this.setState((prevState) => {
      const newIndex = this.modBySlidesLength(prevState.index + direction);
      this.props.onSlideChange(newIndex);
      return { index: newIndex, goToSlide: null };
    });
  };

  handleScroll = (event) => {
    // Handle scroll if needed
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
    const { animationConfig, slides } = this.props;
    const { index } = this.state;

    return (
      <>
        <CarouselWrapper>
          {slides.length > 0 && (
            <Slide
              key={slides[index].key}
              content={slides[index].content}
              moveSlide={this.moveSlide}
              index={index}
              animationConfig={animationConfig}
            />
          )}
        </CarouselWrapper>
      </>
    );
  }
}

export default VerticalServiceCarousel;
