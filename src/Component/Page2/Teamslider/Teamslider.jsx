import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './Teamslider.css';

// Import new team member images
import sakthiVelImg from '../../../images/Sakthi Vel.webp';
import jayasreeImg from '../../../images/Jayasree.webp';
import nithyaVaniImg from '../../../images/Nithya Vani.webp';
import gokulImg from '../../../images/Gokul.webp';
import poornimaImg from '../../../images/Poornima.webp';
import preethishImg from '../../../images/Preethish.webp';
import allenImg from '../../../images/Allen.webp';
import abijithImg from '../../../images/Abijith.webp';
import matheshKumarImg from '../../../images/Mathesh Kumar.webp';
import mathivathananImg from '../../../images/Mathivathanan.webp';
import gopinathImg from '../../../images/Gopinath.webp';

const slides = [
  {
    src: sakthiVelImg,
    title: 'Sakthi Vel',
    subtitle1: '(SEO Expert)',
    subtitle2: "Convincing Google we're exactly what people are searching for"
  },
  {
    src: jayasreeImg,
    title: 'Jayasree',
    subtitle1: '(Growth Executive)',
    subtitle2: "Turning 'maybe' into 'let's get started' every single week."
  },
  {
    src: nithyaVaniImg,
    title: 'Nithya Vani',
    subtitle1: '( Social Lead)',
    subtitle2: 'Convincing strangers to become loyal customers through smarter strategies.'
  },
  {
    src: gokulImg,
    title: 'Gokul',
    subtitle1: '(Ads Specialist )',
    subtitle2: 'Testing ideas until the numbers finally start making sense'
  },
  {
    src: poornimaImg,
    title: 'Poornima',
    subtitle1: '(Visual Designer)',
    subtitle2: 'Living between artboards, deadlines, and endless creative possibilities every day.'
  },
  {
    src: preethishImg,
    title: 'Preethish',
    subtitle1: '(Video Editor)',
    subtitle2: 'Turning raw clips into stories people actually stop and watch'
  },
  {
    src: allenImg,
    title: 'Allen',
    subtitle1: '(Video Editor)',
    subtitle2: 'Making clients say "Wow" after countless tiny timeline adjustments'
  },
  {
    src: abijithImg,
    title: 'Abijith',
    subtitle1: '(Video Editor)',
    subtitle2: 'Watching the same clip 200 times, calling it creative process'
  },
  {
    src: matheshKumarImg,
    title: 'Mathesh Kumar',
    subtitle1: '(Web Developer)',
    subtitle2: 'Debugging today for a smoother tomorrow'
  },
  {
    src: mathivathananImg,
    title: 'Mathivathanan',
    subtitle1: '(Web Developer)',
    subtitle2: 'Building websites that work… after arguing with the code'
  },
  {
    src: gopinathImg,
    title: 'Gopinath',
    subtitle1: '(Full Stack Developer)',
    subtitle2: 'Building websites that look great, after 500 bug fixes'
  }
];

function Tslider() {
  const [activeIndex, setActiveIndex] = useState(4); 
  const swiperInstance = useRef(null);
  const sliderLineRef = useRef(null);
  const ballRef = useRef(null);
  
  // Use refs for drag state to avoid unnecessary re-renders and listener re-registration
  const isDraggingRef = useRef(false);
  const ballOffsetXRef = useRef(0);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    if (ballRef.current) {
      ballRef.current.classList.add('dragging');
    }
    const ballRect = ballRef.current.getBoundingClientRect();
    ballOffsetXRef.current = e.clientX - ballRect.left;
  };

  const handleTouchStart = (e) => {
    isDraggingRef.current = true;
    if (ballRef.current) {
      ballRef.current.classList.add('dragging');
    }
    const ballRect = ballRef.current.getBoundingClientRect();
    ballOffsetXRef.current = e.touches[0].clientX - ballRect.left;
  };

  const handleTrackClick = (e) => {
    // If user clicks directly on the ball, ignore track click to let drag handle it
    if (e.target === ballRef.current) return;

    const lineRect = sliderLineRef.current.getBoundingClientRect();
    const ballRect = ballRef.current.getBoundingClientRect();
    const clickX = e.clientX - lineRect.left;
    const maxOffset = lineRect.width - ballRect.width;
    
    // Center the ball on clicked point
    const constrainedX = Math.max(0, Math.min(clickX - ballRect.width / 2, maxOffset));
    const percent = maxOffset > 0 ? constrainedX / maxOffset : 0;
    const newIndex = Math.round((slides.length - 1) * percent);

    setActiveIndex(newIndex);
    if (swiperInstance.current) {
      swiperInstance.current.slideToLoop(newIndex, 300);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;

      const lineRect = sliderLineRef.current.getBoundingClientRect();
      const ballRect = ballRef.current.getBoundingClientRect();
      const offsetX = e.clientX - lineRect.left - ballOffsetXRef.current;
      const maxOffset = lineRect.width - ballRect.width;
      const constrainedX = Math.max(0, Math.min(offsetX, maxOffset));
      const percent = maxOffset > 0 ? constrainedX / maxOffset : 0;
      const newIndex = Math.round((slides.length - 1) * percent);

      setActiveIndex(newIndex);
      if (swiperInstance.current) {
        swiperInstance.current.slideToLoop(newIndex, 300);
      }
      if (ballRef.current) {
        ballRef.current.style.left = `${percent * 100}%`;
      }
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current) return;

      const touch = e.touches[0];
      const lineRect = sliderLineRef.current.getBoundingClientRect();
      const ballRect = ballRef.current.getBoundingClientRect();
      const offsetX = touch.clientX - lineRect.left - ballOffsetXRef.current;
      const maxOffset = lineRect.width - ballRect.width;
      const constrainedX = Math.max(0, Math.min(offsetX, maxOffset));
      const percent = maxOffset > 0 ? constrainedX / maxOffset : 0;
      const newIndex = Math.round((slides.length - 1) * percent);

      setActiveIndex(newIndex);
      if (swiperInstance.current) {
        swiperInstance.current.slideToLoop(newIndex, 300);
      }
      if (ballRef.current) {
        ballRef.current.style.left = `${percent * 100}%`;
      }
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        if (ballRef.current) {
          ballRef.current.classList.remove('dragging');
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleMouseUp);
    document.addEventListener('touchcancel', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('touchcancel', handleMouseUp);
    };
  }, []);

  return (
    <div className="container-ts">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="swiper_container"
        initialSlide={5} 
        onSlideChange={(swiper) => {
          // Only update index from Swiper slide changes if user is not actively dragging the slider ball
          if (!isDraggingRef.current) {
            setActiveIndex(swiper.realIndex);
          }
        }}
        onSwiper={(swiper) => { swiperInstance.current = swiper; }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.src} alt={`slide_image_${index}`} />
              <div className="slide-text">
                <h1 className='team-name'>{slide.title}</h1>
                <h3 className='team-role'>{slide.subtitle1}</h3>
                <p className='team-descr'>{slide.subtitle2}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={sliderLineRef}
        className="slider-line-container"
      >
        <div 
          className="slider-line"
          onMouseDown={handleTrackClick}
        >
          <div
            ref={ballRef}
            className="slider-ball"
            style={{ left: `${(activeIndex / (slides.length - 1)) * 100}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Tslider;
