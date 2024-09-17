import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import styles from "./categories.module.scss"

import 'swiper/css';
import 'swiper/css/navigation';
import { categories } from '../../utils/data';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProduct } from '../../contexts/ProductContext';

export const Categories = () => {
  const { t, i18n } = useTranslation();
  const { categoriesData, setCategoriesData } = useProduct();

  return (
    <div className={styles.categories}>
      <div className={styles.categories_nav}>
        <div className={styles.categories_nav__title}>{t("categories_title")}</div>
        <div className={styles.categories_nav__link}>
          <Link to="/categories-page">{t("categories_all_link")}</Link>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        loop={categoriesData.length > 0}
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
        {categoriesData.map((category, i) => (
          <SwiperSlide style={{ height: "auto" }} key={category.id}>
            <Link className={styles.swiper_card} to={`/products-page/${category.id}`}>
              <div className={styles.swiper_card__title}>
                {i18n.language === "ru"
                  ? category.name_ru.split('/rn/')[0]
                  : category.name_uz.split('/rn/')[0]}
              </div>
              <img src={category.image} alt="" />
              <div className={styles.swiper_card__text}>0 {t("categories_count")}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
