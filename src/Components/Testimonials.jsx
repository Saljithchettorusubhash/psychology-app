import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import the autoplay CSS
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module
import Person1 from '../assets/Person1.jpg';
import Person2 from '../assets/Person2.jpg';
import Person3 from '../assets/Person3.jpg';
import Person4 from '../assets/Person4.jpg';
import Person5 from '../assets/Person5.jpg';
import Person6 from '../assets/Person6.jpg';
import styles from '../Style/Testimonial.module.css'; // Import the CSS module

const testimonials = [
  {
    name: 'John Doe',
    text: 'Working with Alia has been a life-changing experience. Her empathetic and professional approach helped me navigate through some of the toughest times in my life. I am forever grateful for the support and guidance I received.',
    image: Person1
  },
  {
    name: 'Jane Smith',
    text: 'Alia\'s sessions have been incredibly insightful and empowering. She has a unique ability to understand and address the root of the issues, providing practical strategies to overcome them. I highly recommend her services.',
    image: Person2
  },
  {
    name: 'Michael Brown',
    text: 'I was skeptical about therapy at first, but Alia\'s compassionate and non-judgmental approach made me feel comfortable from the start. Her expertise and dedication have made a significant positive impact on my mental health.',
    image: Person3
  },
  {
    name: 'Emily Johnson',
    text: 'Alia has a gift for making you feel heard and understood. Her techniques are effective and personalized, and I have seen remarkable improvements in my well-being since I started working with her. She is truly exceptional.',
    image: Person4
  },
  {
    name: 'David Lee',
    text: 'Alia\'s holistic approach to therapy has helped me achieve a better balance in my life. Her insights and advice have been invaluable, and I feel more confident and empowered than ever before. I can\'t thank her enough.',
    image: Person5
  },
  {
    name: 'Sarah Wilson',
    text: 'Alia\'s warm and genuine personality, combined with her professional expertise, has created a safe and supportive environment for my healing journey. I highly recommend her to anyone seeking transformative therapy.',
    image: Person6
  },
];

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Testimonials</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{delay:3000}}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className={styles.swiperContainer}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.card}>
              <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.text}>{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.sliderController}>
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Testimonials;
