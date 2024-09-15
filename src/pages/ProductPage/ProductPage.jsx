import { useParams } from "react-router-dom";
import { products } from "../../utils/data";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import styles from "./ProductPage.module.scss"

import { Products } from "../../components/products/Products";


export const ProductPage = () => {
    const { product } = useParams();

    const productContent = products.find((productFilter) => productFilter.id == product);
    return (
        <>
            <div className={styles.product}>
                <div className={styles.product_nav}>
                    <div className={styles.product_nav__title}>{productContent.title}</div>
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
                        <div className={styles.details_title}>Mahsulot Xususiyati</div>
                        <div className={styles.details_text}>TS1900 tashqi yo'llar va ko'chalarni tozalash uchun eng kuchli sanoat pol supurgi mashinasi bo'lib, ish samaradorligi 19000㎡/soat va tozalash kengligi 1900mm va maksimal tezligi 10Km/soat bo'lib, u mehnat xarajatlarini tejash va tozalash samaradorligini oshirishi mumkin. . Yo'llarni tozalash va omborlar va fabrikalar kabi sanoat stsenariylari uchun yaxshi.</div>
                        <div className={styles.details_text}>160 litrli chang idishi barglar, qog'oz qoldiqlari, qum, qoldiqlar, mayda toshlar va shlaklarni tozalashi mumkin. Bundan tashqari, suv idishi changsiz tozalash qutisini etkazib berishi mumkin.</div>
                        <div className={styles.details_text}>Agar sizga kuchli tozalash vositasi kerak bo'lsa, hozir demo so'rashga xush kelibsiz.</div>
                        <div className={styles.details_text}>Tozalash kengligi (mm): 1900</div>
                        <div className={styles.details_text}>Mashina o'lchamlari (mm): 2275 * 1270 * 2200</div>
                        <div className={styles.details_text}>Ishlash quvvati (㎡/soat): 19000</div>
                        <div className={styles.details_text}>Eritma idishi (L): 230</div>
                        <div className={styles.details_text}>Gradient (%): 25/21</div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.form_title}>0 So'm</div>
                        <div className={styles.form_text}>
                            Ishonchingiz komil bo'lsin, <br /> mahsulotlarimiz eng yuqori <br /> sifatlilari!
                        </div>
                        <button>Xarid qilish</button>
                    </div>
                </div>
                {/* <div className={styles.more}>
                    <div className={styles.more_title}>Mahsulot haqida batafsil
                    </div>
                    <div className={styles.more_text}>Ride-on Floor Sweeper Machine TS1900
                    </div>
                </div> */}
            </div>
            <Products />
        </>
    );
}

export default ProductPage;
