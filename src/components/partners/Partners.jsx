import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';

import styles from "./partners.module.scss"

import 'swiper/css';

export const Partners = () => {
  const slides = [
    {
      image: require('../../assets/Artel-01_1.png'),
    },
    {
      image: require('../../assets/Ecobozor-01_1.png'),
    },
    {
      image: require('../../assets/IT_park-01_2_Xa6VCjz.png'),
    },
    {
      image: require('../../assets/akfa_group-01_1.png'),
    },
    {
      image: require('../../assets/chorvoh.png'),
    },
    {
      image: require('../../assets/imzo_akfa-01_1.png'),
    },
    {
      image: require('../../assets/pepsi.png'),
    },
    {
      image: require('../../assets/cola.png'),
    }
  ];

  return (
    <div className={styles.partners}>
      <div className={styles.partners_nav}>
        <div className={styles.partners_nav__title}>Bizga ishonganlar</div>
      </div>
      <Swiper
        spaceBetween={30}
        loop
        autoplay={{
          "delay": 3000,
          "disableOnInteraction": false
        }}
        breakpoints={{ 
          100: {
            slidesPerView: 1
          },
          501: {
            slidesPerView: 2
          },
          769: {
            slidesPerView: 3
          },
          1025: {
            slidesPerView: 4
          }
        }}
        modules={[Autoplay]}
        className={styles.swiper}>
        {slides.map((slide, i) => (
          <SwiperSlide key={i + 'a'}>
            <div className={styles.swiper_card}>
              <img src={slide.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
