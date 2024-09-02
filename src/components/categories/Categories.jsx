import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import styles from "./categories.module.scss"

import 'swiper/css';
import 'swiper/css/navigation';

export const Categories = () => {
  const slides = [
    {
      title: "Qo'goz mahsulotlari",
      image: require('../../assets/product1.png'),
    },
    {
      title: "Professional changyutgichlar",
      image: require('../../assets/product2.png'),
    },
    {
      title: "Yuvish vositalari",
      image: require('../../assets/product3.png'),
    },
    {
      title: "Tozalash uskunalari",
      image: require('../../assets/product4.jpg'),
    },
    {
      title: "Qo'goz mahsulotlari",
      image: require('../../assets/product1.png'),
    },
    {
      title: "Professional changyutgichlar",
      image: require('../../assets/product2.png'),
    },
    {
      title: "Yuvish vositalari",
      image: require('../../assets/product3.png'),
    },
    {
      title: "Tozalash uskunalari",
      image: require('../../assets/product4.jpg'),
    }
  ];

  return (
    <div className={styles.categories}>
      <div className={styles.categories_nav}>
        <div className={styles.categories_nav__title}>Kategoriyalar</div>
        <div className={styles.categories_nav__link}>
          <a target='_blank' href="#">Hammasini ko'rish</a>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className={styles.swiper_card}>
                <div className={styles.swiper_card__title}>{slide.title}</div>
                <img src={slide.image} alt="" />
                <div className={styles.swiper_card__text}>0 ta mahsulotlar</div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
