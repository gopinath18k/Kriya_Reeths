import { useState, useRef, useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './Nslider.css';

import slide_image_3 from '../../../images/team3.webp';
import slide_image_4 from '../../../images/team4.webp';
import slide_image_5 from '../../../images/shek.webp';
import slide_image_6 from '../../../images/team6.webp';
import slide_image_9 from '../../../images/team9.webp';
import slide_image_12 from '../../../images/team12.webp';

function Tslidern() {
  const slides = [
    // { src: slide_image_1, title: 'Hariprakash', subtitle1: '(Client Relationship Manager)', subtitle2: 'I excel at turning client frustrations into valuable learning experiences for our team.' },
    // { src: slide_image_2, title: 'Akshay', subtitle1: '(Digital Marketing Executive)', subtitle2: 'Turning your random ideas into engaging content.' },
    { src: slide_image_3, title: 'Santhana Raj', subtitle1: '(Graphic Designer)', subtitle2: 'Why worry about a bad take when you’ve got me to edit you into a movie star?' },
    { src: slide_image_4, title: 'Gopinath', subtitle1: '(Web Developer)', subtitle2: 'Building websites that look great, after 500 bug fixes.' },
    { src: slide_image_5, title: 'Sheik', subtitle1: '(Digital Marketing Executive)', subtitle2: "Getting your site noticed, slowly but surely." },
    { src: slide_image_6, title: 'Guna', subtitle1: '(Web Developer)', subtitle2: "I don't have bugs in my code, They're just unconventional features." },
    // { src: slide_image_7, title: 'Karuppaiya', subtitle1: '(Graphic Designer)', subtitle2: 'I Speak Fluently In Designs Sarcasm.' },
    // { src: slide_image_8, title: 'Arul', subtitle1: '(Digital Marketing Executive)', subtitle2: 'Getting your site noticed, slowly but surely.' },
    { src: slide_image_9, title: 'Naveen Raj', subtitle1: '(Web Developer)', subtitle2: "I didn't break the website, I just optimized its functionality." },
    // { src: slide_image_10, title: 'Sona', subtitle1: '(Graphic Designer)', subtitle2: 'Designing with a smile and a lot of minor revisions.' },
    // { src: slide_image_11, title: 'Mano', subtitle1: '(Marketing Manager)', subtitle2: "I don't always have a plan, But when I do it's a Marketing Strategy." },
    { src: slide_image_12, title: 'Kalai', subtitle1: '(Business Development Executive)', subtitle2: 'Making cold calls and warm rejections look like a full-time career.' },
  ];

  const [activeIndex, setActiveIndex] = useState(3); 
  const swiperInstance = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderLineRef = useRef(null);
  const ballRef = useRef(null);
  const ballOffsetX = useRef(0);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    ballRef.current.classList.add('dragging');
    const ballRect = ballRef.current.getBoundingClientRect();
    ballOffsetX.current = e.clientX - ballRect.left;
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;

    e.preventDefault();
    const lineRect = sliderLineRef.current.getBoundingClientRect();
    const ballRect = ballRef.current.getBoundingClientRect();
    const offsetX = e.clientX - lineRect.left - ballOffsetX.current;
    const constrainedX = Math.max(0, Math.min(offsetX, lineRect.width - ballRect.width));
    const percent = constrainedX / (lineRect.width - ballRect.width);
    const newIndex = Math.round((slides.length - 1) * percent);

    setActiveIndex(newIndex);
    if (swiperInstance.current) {
      swiperInstance.current.slideTo(newIndex);
    }

    ballRef.current.style.left = `${percent * 100}%`;
  }, [isDragging, slides.length]);

  const handleMouseUp = () => {
    setIsDragging(false);
    ballRef.current.classList.remove('dragging');
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    ballRef.current.classList.add('dragging');
    const ballRect = ballRef.current.getBoundingClientRect();
    ballOffsetX.current = e.touches[0].clientX - ballRect.left;
  };

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;

    e.preventDefault();
    const touch = e.touches[0];
    const lineRect = sliderLineRef.current.getBoundingClientRect();
    const ballRect = ballRef.current.getBoundingClientRect();
    const offsetX = touch.clientX - lineRect.left - ballOffsetX.current;
    const constrainedX = Math.max(0, Math.min(offsetX, lineRect.width - ballRect.width));
    const percent = constrainedX / (lineRect.width - ballRect.width);
    const newIndex = Math.round((slides.length - 1) * percent);

    setActiveIndex(newIndex);
    if (swiperInstance.current) {
      swiperInstance.current.slideTo(newIndex);
    }

    ballRef.current.style.left = `${percent * 80}%`;
  }, [isDragging, slides.length]);

  const handleTouchEnd = () => {
    setIsDragging(false);
    ballRef.current.classList.remove('dragging');
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleTouchMove]);

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
        initialSlide={4} 
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
        <div className="slider-line">
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

export default Tslidern; 