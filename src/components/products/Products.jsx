import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';

import styles from "./products.module.scss"

import 'swiper/css';
import 'swiper/css/navigation';
import { products } from '../../utils/data';
import { Link } from 'react-router-dom';

export const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.products_nav}>
        <div className={styles.products_nav__title}>Eng Zo'r Mahsulotlar</div>
        <div className={styles.products_nav__link}>
          <Link to="/products-page/all">Hammasini ko'rish</Link>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop
        navigation={true}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        modules={[Navigation, Autoplay]}
        className={styles.swiper}>
        {products.map((product, i) => (
          <SwiperSlide key={i + 'product-1'}>
            <div className={styles.swiper_card}>
              <div className={styles.swiper_card__top}>
                <img className={styles.swiper_card__image} src={product.image} alt="" />
                <img className={styles.swiper_card__icon} src={require('../../assets/net.png')} alt="" />
              </div>
              <div className={styles.swiper_card__bottom}>
                <div className={styles.swiper_card__text}>{product.title}</div>
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
        {products.reverse().map((product, i) => (
          <SwiperSlide key={i + 'product-2'}>
            <div className={styles.swiper_card}>
              <div className={styles.swiper_card__top}>
                <img className={styles.swiper_card__image} src={product.image} alt="" />
                <img className={styles.swiper_card__icon} src={require('../../assets/net.png')} alt="" />
              </div>
              <div className={styles.swiper_card__bottom}>
                <div className={styles.swiper_card__text}>{product.title}</div>
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
