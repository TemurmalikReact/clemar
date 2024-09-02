import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./banner.module.scss"

export const Banner = () => {

  return (
    <div className={styles.banner}>
      <Swiper
        slidesPerView={1}
        loop
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide><img src={require('../../assets/banner1.png')} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require('../../assets/banner2.png')} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}
