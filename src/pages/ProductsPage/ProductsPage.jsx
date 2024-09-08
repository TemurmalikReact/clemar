import { Link, useParams } from "react-router-dom";
import { categories, products } from "../../utils/data";
import styles from "./ProductsPage.module.scss"

export const ProductsPage = () => {
    const { category } = useParams();
    let productTitle = categories.find((categoryFilter => categoryFilter.id == category))?.title;
    if (category == 'all') productTitle = 'Mahsulotlar';

    return (
        <div className={styles.products}>
            <div className={styles.products_nav}>
                <div className={styles.products_nav__title}>{productTitle}</div>
            </div>
            <div className={styles.content}>
                {products.filter((product) => {
                    if (category == 'all') return product;
                    else return product.category == category
                }).map((product, i) => (
                    <Link key={i + 'product-page'} to={`/product/${product.id}`}>
                        <div className={styles.content_card}>
                            <div className={styles.content_card__top}>
                                <img className={styles.content_card__image} src={product.image} alt="" />
                                <img className={styles.content_card__icon} src={require('../../assets/net.png')} alt="" />
                            </div>
                            <div className={styles.content_card__bottom}>
                                <div className={styles.content_card__text}>{product.title}</div>
                                <div className={styles.content_card__title}>0 So'm</div>
                                <button onClick={e => e.preventDefault()}>Sotib Olish</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
