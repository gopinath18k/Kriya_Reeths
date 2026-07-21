import React, { Component } from 'react';
import styled from '@emotion/styled';
import Slide from "./Slide";
import PropTypes from 'prop-types';
import '../Carousel/Verticalcarousel.css';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

class VerticalCarousel extends Component {
  state = {
    index: 0,
    goToSlide: null,
    isHovered: false,
    allowPageScroll: false,
    lastScrollTime: 0,  // Track the last scroll time
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyDown);
    this.carousel.addEventListener('mouseenter', this.enableScrollHandling);
    this.carousel.addEventListener('mouseleave', this.disableScrollHandling);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyDown);
    this.carousel.removeEventListener('mouseenter', this.enableScrollHandling);
    this.carousel.removeEventListener('mouseleave', this.disableScrollHandling);
    if (this.state.isHovered) {
      document.removeEventListener('wheel', this.handleWheel);
    }
    this.resetPageScroll(); 
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.goToSlide !== this.props.goToSlide) {
      this.setState({ index: this.props.goToSlide });
    }

    if (this.state.index === this.props.slides.length - 1 && !this.state.allowPageScroll) {
      this.setState({ allowPageScroll: true });
    } else if (this.state.index < this.props.slides.length - 1 && this.state.allowPageScroll) {
      this.setState({ allowPageScroll: false });
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
    offsetRadius: 1,
    animationConfig: { tension: 120, friction: 14 }
  };

  modBySlidesLength = index => {
    return mod(index, this.props.slides.length);
  };

  moveSlide = direction => {
    this.setState(prevState => {
      const { slides } = this.props;
      const { index } = prevState;

      let newIndex = index + direction;

      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= slides.length) {
        newIndex = slides.length - 1;
      }

      if (newIndex !== index) {
        this.props.onSlideChange(newIndex);
        return { index: newIndex, goToSlide: null };
      }

      return null;
    });
  };

  handleKeyDown = event => {
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

  handleWheel = (event) => {
    if (!this.state.isHovered || this.state.allowPageScroll) {
      return;
    }

    event.preventDefault();

    const now = Date.now();
    const timeDiff = now - this.state.lastScrollTime;

    const SCROLL_THRESHOLD = 10;
    const MIN_TIME_DIFF = 150;  

   
    let normalizedDeltaY = event.deltaY;
    if (event.deltaMode === 1) { 
        normalizedDeltaY *= 20; 
    }

    if (timeDiff > MIN_TIME_DIFF && Math.abs(normalizedDeltaY) > SCROLL_THRESHOLD) {
      this.setState({ lastScrollTime: now });

      if (normalizedDeltaY < 0) {
        this.moveSlide(-1);
      } else if (normalizedDeltaY > 0) {
        this.moveSlide(1);
      }
    }
  };

 

  resetPageScroll = () => {
    document.body.style.overflow = '';
  };

  getPresentableSlides() {
    const { slides } = this.props;
    const { index } = this.state;
    const presentableSlides = [];

    const previousIndex = this.modBySlidesLength(index - 1);
    if (previousIndex >= 0) {
      presentableSlides.push({ ...slides[previousIndex], type: 'previous' });
    }

    const currentIndex = this.modBySlidesLength(index);
    if (currentIndex < slides.length) {
      presentableSlides.push({ ...slides[currentIndex], type: 'current' });
    }

    const nextIndex = this.modBySlidesLength(index + 1);
    if (nextIndex < slides.length) {
      presentableSlides.push({ ...slides[nextIndex], type: 'next' });
    }

    return presentableSlides;
  }

  render() {
    const { animationConfig, showNavigation } = this.props;
    const { index } = this.state;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <div className="NavigationButtons">
          <button
            className="NavBtn"
            onClick={() => this.moveSlide(-1)}
            disabled={index === 0} 
          >
            &#8593;
          </button>
          <button
            className="NavBtn"
            onClick={() => this.moveSlide(1)}
            disabled={index === this.props.slides.length - 1} 
          >
            &#8595;
          </button>
        </div>
      );
    }

    return (
      <React.Fragment>
        <Wrapper
          ref={el => (this.carousel = el)} 
        >
          {this.getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={slide.key}
              content={slide.content}
              moveSlide={this.moveSlide}
              offsetRadius={1}
              index={presentableIndex}
              animationConfig={animationConfig}
              className={slide.type} 
              isPresent={this.modBySlidesLength(index) === presentableIndex}
            />
          ))}
        </Wrapper>
        {/* {navigationButtons} */}
      </React.Fragment>
    );
  }
}

export default VerticalCarousel;

