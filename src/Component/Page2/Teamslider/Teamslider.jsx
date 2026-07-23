// Tslider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './Teamslider.css';

import slide_image_1 from '../../../images/team1.webp';
import slide_image_2 from '../../../images/team2.webp';
import slide_image_3 from '../../../images/team3.webp';
import slide_image_4 from '../../../images/team4.webp';
import slide_image_5 from '../../../images/team5.webp';
import slide_image_6 from '../../../images/team6.webp';
import slide_image_7 from '../../../images/team7.webp';
import slide_image_8 from '../../../images/team8.webp';
import slide_image_9 from '../../../images/team9.webp';
import slide_image_10 from '../../../images/team10.webp';
import slide_image_11 from '../../../images/team13.webp';
import slide_image_12 from '../../../images/team12.webp';

function Tslider() {
  const slides = [
    { src: slide_image_1, title: 'Hariprakash', subtitle1: '(Client Relationship Manager) ', subtitle2: 'I excel at turning client frustrations into valuable learning experiences for our team.' },
    { src: slide_image_2, title: 'Akshay', subtitle1: '(Digital Marketing Executive)', subtitle2: 'Turning your random ideas into ‘engaging content' },
    { src: slide_image_3, title: 'Santhana Raj', subtitle1: '(Graphic Designer)', subtitle2: 'Why worry about a bad take when you’ve got me to edit you into a movie star?' },
    { src: slide_image_4, title: ' Gopinath', subtitle1: '(Web Developer)', subtitle2: 'Building websites that look great, after 500 bug fixes.' },
    { src: slide_image_5, title: 'Varsha', subtitle1: ' (Ads specialist)', subtitle2: "I've mastered the art of making something out of nothing. It's called Advertising" },
    { src: slide_image_6, title: 'Guna', subtitle1: '(Web Developer)', subtitle2: "I don't have bugs in my code, They're just unconventional features " },
    { src: slide_image_7, title: 'Karuppaiya', subtitle1: '(Graphic Designer)', subtitle2: 'I Speak Fluently In Designs Sarcasm' },
    { src: slide_image_8, title: ' Gowtham', subtitle1: '(Digital Marketing Executive)', subtitle2: 'Getting your site noticed, slowly but surely' },
    { src: slide_image_9, title: 'Naveen Raj', subtitle1: '(Web Developer)', subtitle2: "I didn't break the website, I just optimised its functionality" },
    { src: slide_image_10, title: 'Sona', subtitle1: '(Graphic Designer)', subtitle2: 'Designing with a smile and a lot of ‘minor’ revisions' },
    { src: slide_image_11, title: 'Mano ', subtitle1: '(Marketing Manager)', subtitle2: "I don't always have a plan, But when I do it's a Marketing Strategy" },
    { src: slide_image_12, title: 'Kalai ', subtitle1: '(Business Development Executive)', subtitle2: 'Making cold calls and warm rejections look like a full-time career' },
  ];

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
    </div>
  );
}

export default Tslider;
