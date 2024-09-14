import { Link, useParams } from "react-router-dom";
import { categories, products, subCategories } from "../../utils/data";
import styles from "./ProductsPage.module.scss"
import { useModal } from "../../contexts/ModalContext";
import { useState } from "react";
import { useProduct } from "../../contexts/ProductContext";

export const ProductsPage = () => {
    const { category, subcategory } = useParams();

    let productTitle = categories.find((categoryFilter => categoryFilter.id == category))?.title;
    if (category == 'all') productTitle = 'Mahsulotlar';

    if (category == 'favorite') {
        productTitle = 'Sevimlilar';
    }

    if (category == undefined) productTitle = subCategories.find((subcategoryFilter => subcategoryFilter.id == subcategory))?.title;

    const productFiltered = () => {
        return productsData.filter((product) => {
            if (category == 'all') return product;
            if (category == 'favorite') return product.favorite;
            else if (category == undefined) return product.subcategory == subcategory
            else return product.category == category
        })
    }

    const { modalOpen, setModalOpen } = useModal();

    const toggleModal = (e) => {
        setModalOpen(prevState => !prevState);
        e.preventDefault()
    };

    const { productsData, setProductsData } = useProduct();

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
                <div className={styles.products_nav__title}>{productTitle}</div>
            </div>
            <div className={styles.content}>
                {productFiltered().map((product, i) => (
                    <Link key={i + 'product-page'} to={`/product/${product.id}`}>
                        <div className={styles.content_card}>
                            <div className={styles.content_card__top}>
                                <img className={styles.content_card__image} src={product.image} alt="" />
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
                            <div className={styles.content_card__bottom}>
                                <div className={styles.content_card__text}>{product.title}</div>
                                <div className={styles.content_card__title}>0 So'm</div>
                                <button onClick={toggleModal}>Sotib Olish</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
