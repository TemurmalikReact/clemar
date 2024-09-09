import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';

import styles from "./products.module.scss"
import 'swiper/css';
import 'swiper/css/navigation';

import { products } from '../../utils/data';
import { Link } from 'react-router-dom';
import { useModal } from '../../contexts/ModalContext';

export const Products = () => {
  const { modalOpen, setModalOpen } = useModal();

  const toggleModal = (e) => {
    setModalOpen(prevState => !prevState);
    e.preventDefault()
  };

  return (
    <div className={styles.products}>
      <div className={styles.products_nav}>
        <div className={styles.products_nav__title}>Eng Zo'r Mahsulotlar</div>
        <div className={styles.products_nav__link}>
          <Link to="/products-page/all">Hamma Mahsulotlar</Link>
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
            <Link to={`/product/${product.id}`}>
              <div className={styles.swiper_card}>
                <div className={styles.swiper_card__top}>
                  <img className={styles.swiper_card__image} src={product.image} alt="" />
                  <img className={styles.swiper_card__icon} src={require('../../assets/net.png')} alt="" />
                </div>
                <div className={styles.swiper_card__bottom}>
                  <div className={styles.swiper_card__text}>{product.title}</div>
                  <div className={styles.swiper_card__title}>0 So'm</div>
                  <button onClick={toggleModal}>Sotib Olish</button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className={styles.swiper}>
        {products.reverse().map((product, i) => (
          <SwiperSlide key={i + 'product-2'}>
            <Link to={`/product/${product.id}`}>
              <div className={styles.swiper_card}>
                <div className={styles.swiper_card__top}>
                  <img className={styles.swiper_card__image} src={product.image} alt="" />
                  <img className={styles.swiper_card__icon} src={require('../../assets/net.png')} alt="" />
                </div>
                <div className={styles.swiper_card__bottom}>
                  <div className={styles.swiper_card__text}>{product.title}</div>
                  <div className={styles.swiper_card__title}>0 So'm</div>
                  <button onClick={toggleModal}>Sotib Olish</button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
