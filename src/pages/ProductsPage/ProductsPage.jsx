import { Link, useParams } from "react-router-dom";
import { categories, products, subCategories } from "../../utils/data";
import styles from "./ProductsPage.module.scss"
import { useModal } from "../../contexts/ModalContext";
import { useState } from "react";
import { useProduct } from "../../contexts/ProductContext";
import { useTranslation } from "react-i18next";

export const ProductsPage = () => {
    const { category, subcategory } = useParams();
    const { t, i18n } = useTranslation();
    const { modalOpen, setModalOpen } = useModal();

    const { productsData, setProductsData, categoriesData, subCategoriesData } = useProduct();
    if (productsData.length == 0 && categoriesData.length == 0 && subCategoriesData.length == 0) {
        return <div></div>
    }

    let saved = JSON.parse(localStorage.getItem("saved"));
    saved = saved ? saved : [];

    let productTitle = '';

    const foundCategories = categoriesData.find((categoryFilter => categoryFilter.id == category));
    if (category && foundCategories) {
        productTitle = i18n.language === "ru"
            ? foundCategories.name_ru.split('/rn/')[0]
            : (i18n.language == "en" ? foundCategories.name_en.split('/rn/')[0] : foundCategories.name_uz.split('/rn/')[0])
    }

    if (category == 'all') productTitle = t("products_title");

    if (category == 'favorite') {
        productTitle = t("header_favorite");
    }

    const foundSubCategories = subCategoriesData.find((subcategoryFilter => subcategoryFilter.id == subcategory));
    if (category == undefined && subcategory && foundSubCategories) {
        productTitle = i18n.language == "ru" ? foundSubCategories.name_ru : (i18n.language == "en" ? foundSubCategories.name_en : foundSubCategories.name_uz);
    };

    const productFiltered = () => {
        return productsData.filter((product) => {
            if (category == 'all') return product;
            if (category == 'favorite') return saved.includes(product.id);
            else if (category == undefined && subcategory) return product.sub_category == subcategory
            else return product.category == category
        })
    }

    const toggleModal = (e) => {
        setModalOpen(prevState => !prevState);
        e.preventDefault()
    };

    const toggleFavorite = (e, id) => {
        e.preventDefault();

        const newProducts = productsData.map(save => ({ ...save, liked: !save.liked }));
        setProductsData(newProducts);

        let newSaved = [...saved];

        if (newSaved.includes(id)) {
            newSaved = newSaved.filter(save => save !== id)
        } else {
            newSaved.push(id)
        }
        localStorage.setItem("saved", JSON.stringify(newSaved));
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
                                <img className={styles.content_card__image} src={product.image1} alt="" />
                                {saved.includes(product.id)
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
                                <div className={styles.content_card__text}>
                                    {i18n.language == "ru" ? product.name_ru : (i18n.language == "en" ? product.name_en : product.name_uz)}
                                </div>
                                <div className={styles.content_card__title}>{product.price} {t("products_cost")}</div>
                                <button onClick={toggleModal}>{t("products_buy")}</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
