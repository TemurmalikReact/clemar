import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import styles from "./ProductPage.module.scss"

import { Products } from "../../components/products/Products";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../contexts/ProductContext";

export const ProductPage = () => {
    const { product } = useParams();
    const { t, i18n } = useTranslation();

    const { productsData, setProductsData } = useProduct();

    const productContent = productsData.find((productFilter) => productFilter.id == product);
    if (!productContent) {
        return <div></div>
    } 

    const description = i18n.language == "ru" ? productContent.description_ru : productContent.description_uz;

    return (
        <>
            <div className={styles.product}>
                <div className={styles.product_nav}>
                    <div className={styles.product_nav__title}>{i18n.language == "ru" ? productContent.name_ru : productContent.name_uz}</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.picture}>
                        <div className={styles.picture_top}>
                            <img src={productContent.image1} alt="" />
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
                                <SwiperSlide style={{ height: "auto" }}><img src={productContent.image1} alt="" /></SwiperSlide>
                                <SwiperSlide style={{ height: "auto" }}><img src={productContent.image2} alt="" /></SwiperSlide>
                                <SwiperSlide style={{ height: "auto" }}><img src={productContent.image3} alt="" /></SwiperSlide>
                                <SwiperSlide style={{ height: "auto" }}><img src={productContent.image4} alt="" /></SwiperSlide>
                                <SwiperSlide style={{ height: "auto" }}><img src={productContent.image5} alt="" /></SwiperSlide>
                                <SwiperSlide style={{ height: "auto" }}><img src={productContent.image6} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.details_title}>{t("product_detail_1")}</div>
                        {description.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                            <div className={styles.details_text}>{line}</div>
                        ))}
                    </div>

                    <div className={styles.form}>
                        <div className={styles.form_title}>{productContent.price} {t("products_cost")}</div>
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
