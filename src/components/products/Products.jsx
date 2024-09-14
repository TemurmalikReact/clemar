import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';

import styles from "./products.module.scss"
import 'swiper/css';
import 'swiper/css/navigation';

import { products } from '../../utils/data';
import { Link } from 'react-router-dom';
import { useModal } from '../../contexts/ModalContext';
import { useProduct } from '../../contexts/ProductContext';

export const Products = () => {
  const { modalOpen, setModalOpen } = useModal();
  const { productsData, setProductsData } = useProduct();

  const toggleModal = (e) => {
    setModalOpen(prevState => !prevState);
    e.preventDefault()
  };

  const Card = (product) => {
    return (
      <div className={styles.swiper_card}>
        <div className={styles.swiper_card__top}>
          <img className={styles.swiper_card__image} src={product.image} alt="" />
          {product.favorite
            ? 
            <svg onClick={(e) => toggleFavorite(e, product.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="heart">
              <g>
                <path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21z"></path>
              </g>
            </svg>
            :
            <svg onClick={(e) => toggleFavorite(e, product.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="heart">
              <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
            </svg>
          }
        </div>
        <div className={styles.swiper_card__bottom}>
          <div className={styles.swiper_card__text}>{product.title}</div>
          <div className={styles.swiper_card__title}>0 So'm</div>
          <button onClick={toggleModal}>Sotib Olish</button>
        </div>
      </div>
    )
  }

  const toggleFavorite = (e, id) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem("products"));
    const filtered = stored.map((store) => store.id == id ? { ...store, favorite: !store.favorite } : store);

    setProductsData(filtered);
    localStorage.setItem("products", JSON.stringify(filtered));
  }

  return (
    <div className={styles.products}>
      <div className={styles.products_nav}>
        <div className={styles.products_nav__title}>Mahsulotlar</div>
        <div className={styles.products_nav__link}>
          <Link to="/products-page/all">Hamma Mahsulotlar</Link>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        loop
        navigation={true}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        modules={[Navigation, Autoplay]}
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
        className={styles.swiper}>
        {productsData.map((product, i) => (
          <SwiperSlide key={i + 'product-1'}>
            <Link to={`/product/${product.id}`}>
              {Card(product)}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={30}
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
        className={styles.swiper}>
        {productsData.reverse().map((product, i) => (
          <SwiperSlide key={i + 'product-2'}>
            <Link to={`/product/${product.id}`}>
              {Card(product)}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
