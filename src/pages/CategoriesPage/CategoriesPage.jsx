import { Link } from "react-router-dom";
import { categories } from "../../utils/data";
import styles from "./CategoriesPage.module.scss"
import { useTranslation } from "react-i18next";
import { useProduct } from "../../contexts/ProductContext";

export const CategoriesPage = () => {
    const { t, i18n } = useTranslation();
    const { categoriesData, setCategoriesData } = useProduct();

    return (
        <div className={styles.categories}>
            <div className={styles.categories_nav}>
                <div className={styles.categories_nav__title}>{t("categories_title")}</div>
            </div>
            <div className={styles.content}>
                {categoriesData.map((category, i) => (
                    <Link key={i + 'category-page'} to={`/products-page/${category.id}`}>
                        <div className={styles.content_card}>
                            <div className={styles.content_card__title}>
                                {i18n.language == "ru"
                                    ? category.name_ru.split('/rn/')[0]
                                    : (i18n.language == "en" ? category.name_en.split('/rn/')[0] : category.name_uz.split('/rn/')[0])
                                }
                            </div>
                            <img src={category.image} alt="" />
                            <div className={styles.content_card__text}>0 {t("categories_count")}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoriesPage;
