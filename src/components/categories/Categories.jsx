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
        spaceBetween={30}
        loop
        navigation={true}
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
        modules={[Navigation]}
        className={styles.swiper}
      >
        {categories.map((category, i) => (
          <SwiperSlide key={i + 'category'}>
            <Link to={`/products-page/${category.id}`}>   
              <div className={styles.swiper_card}>
                <div className={styles.swiper_card__title} dangerouslySetInnerHTML={{ __html: category.title }} />
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
