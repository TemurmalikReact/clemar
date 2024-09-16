import { useParams } from "react-router-dom";
import { products } from "../../utils/data";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import styles from "./ProductPage.module.scss"

import { Products } from "../../components/products/Products";
import { useTranslation } from "react-i18next";


export const ProductPage = () => {
    const { product } = useParams();
    const { t, i18n } = useTranslation();

    const productContent = products.find((productFilter) => productFilter.id == product);
    return (
        <>
            <div className={styles.product}>
                <div className={styles.product_nav}>
                    <div className={styles.product_nav__title}>{t(productContent.title)}</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.picture}>
                        <div className={styles.picture_top}>
                            <img src={productContent.image} alt="" />
                        </div>
                        <div className={styles.picture_bottom}>
                            <Swiper
                                slidesPerView={4}
                                navigation={true}
                                breakpoints={{
                                    0: {
                                        spaceBetween: 10
                                    },
                                    500: {
                                        spaceBetween: 15
                                    },
                                    769: {
                                        spaceBetween: 20
                                    },
                                    1025: {
                                        spaceBetween: 25
                                    },
                                    1282: {
                                        spaceBetween: 30
                                    },
                                }}
                                loop
                                modules={[Navigation]}
                                className={styles.swiper}>
                                <SwiperSlide><img src={productContent.image} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={productContent.image} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={productContent.image} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={productContent.image} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={productContent.image} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.details_title}>{t("product_detail_1")}</div>
                        <div className={styles.details_text}>{t("product_detail_2")}</div>
                        <div className={styles.details_text}>{t("product_detail_3")}</div>
                        <div className={styles.details_text}>{t("product_detail_4")}</div>
                        <div className={styles.details_text}>{t("product_detail_5")}</div>
                        <div className={styles.details_text}>{t("product_detail_6")}</div>
                        <div className={styles.details_text}>{t("product_detail_7")}</div>
                        <div className={styles.details_text}>{t("product_detail_8")}</div>
                        <div className={styles.details_text}>{t("product_detail_9")}</div>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.form_title}>0 {t("products_cost")}</div>
                        <div className={styles.form_text} dangerouslySetInnerHTML={{ __html: t("product_devis") }} />
                        <button>{t("products_buy")}</button>
                    </div>
                </div>
            </div>
            <Products />
        </>
    );
}

export default ProductPage;
