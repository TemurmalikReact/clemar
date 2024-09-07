import { useParams } from "react-router-dom";
import { products } from "../../utils/data";
import styles from "./ProductsPage.module.scss"

export const ProductsPage = () => {
    const { category } = useParams();
    return (
        <div className={styles.products}>
            <div className={styles.products_nav}>
                <div className={styles.products_nav__title}>Kategoriyalar</div>
            </div>
            <div className={styles.content}>
                {products.filter((product) => {
                    if (category == 'all') return product;
                    else return product.category == category
                }).map((product, i) => (
                    <div key={i + 'product-page'} className={styles.content_card}>
                        <div className={styles.content_card__top}>
                            <img className={styles.content_card__image} src={product.image} alt="" />
                            <img className={styles.content_card__icon} src={require('../../assets/net.png')} alt="" />
                        </div>
                        <div className={styles.content_card__bottom}>
                            <div className={styles.content_card__text}>{product.title}</div>
                            <div className={styles.content_card__title}>0 So'm</div>
                            <button>Sotib Olish</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
