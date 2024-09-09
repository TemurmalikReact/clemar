import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import styles from "./categories.module.scss"

import 'swiper/css';
import 'swiper/css/navigation';
import { categories } from '../../utils/data';
import { Link } from 'react-router-dom';

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.categories_nav}>
        <div className={styles.categories_nav__title}>Kategoriyalar</div>
        <div className={styles.categories_nav__link}>
          <Link to="/categories-page">Hamma Kategoriyalar</Link>
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
        {categories.map((category, i) => (
          <SwiperSlide key={i + 'category'}>
            <Link to={`/products-page/${category.id}`}>   
              <div className={styles.swiper_card}>
                <div className={styles.swiper_card__title}>{category.title}</div>
                <img src={category.image} alt="" />
                <div className={styles.swiper_card__text}>0 ta mahsulotlar</div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
