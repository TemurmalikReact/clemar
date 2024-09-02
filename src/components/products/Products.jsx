import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';

import styles from "./products.module.scss"

import 'swiper/css';
import 'swiper/css/navigation';

export const Products = () => {
  const slides = [
    {
      title: "Santoemma sabrina sw15",
      image: require('../../assets/product1.png'),
    },
    {
      title: "Fantom Promidi 250M",
      image: require('../../assets/product2.png'),
    },
    {
      title: "TVX TS1300",
      image: require('../../assets/product3.png'),
    },
    {
      title: "Ecoway Globalway Original	1l",
      image: require('../../assets/product4.jpg'),
    },
    {
      title: "Santoemma sabrina sw15",
      image: require('../../assets/product1.png'),
    },
    {
      title: "Fantom Promidi 250M",
      image: require('../../assets/product2.png'),
    },
    {
      title: "TVX TS1300",
      image: require('../../assets/product3.png'),
    },
    {
      title: "Ecoway Globalway Original	1l",
      image: require('../../assets/product4.jpg'),
    }
  ];

  return (
    <div className={styles.products}>
      <div className={styles.products_nav}>
        <div className={styles.products_nav__title}>Eng Zo'r Mahsulotlar</div>
        <div className={styles.products_nav__link}>
          <a target='_blank' href="#">Hammasini ko'rish</a>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop
        navigation={true}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }}
        modules={[Navigation, Autoplay]}
        className={styles.swiper}>
        {slides.map((slide, i) => (
          <SwiperSlide key={i + 'a'}>
            <div className={styles.swiper_card}>
              <div className={styles.swiper_card__top}>
                <img src={slide.image} alt="" />
              </div>
              <div className={styles.swiper_card__bottom}>
                <div className={styles.swiper_card__text}>{slide.title}</div>
                <div className={styles.swiper_card__title}>0 So'm</div>
                <button>Sotib Olish</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className={styles.swiper}>
        {slides.reverse().map((slide, i) => (
          <SwiperSlide key={i + 'b'}>
            <div className={styles.swiper_card}>
              <div className={styles.swiper_card__top}>
                <img src={slide.image} alt="" />
              </div>
              <div className={styles.swiper_card__bottom}>
                <div className={styles.swiper_card__text}>{slide.title}</div>
                <div className={styles.swiper_card__title}>0 So'm</div>
                <button>Sotib Olish</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
