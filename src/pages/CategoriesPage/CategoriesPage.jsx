import { Link } from "react-router-dom";
import { categories } from "../../utils/data";
import styles from "./CategoriesPage.module.scss"
import { useTranslation } from "react-i18next";

export const CategoriesPage = () => {
  const { t, i18n } = useTranslation();
    
    return (
        <div className={styles.categories}>
            <div className={styles.categories_nav}>
                <div className={styles.categories_nav__title}>{t("categories_title")}</div>
            </div>
            <div className={styles.content}>
                {categories.map((category, i) => (
                    <Link key={i + 'category-page'} to={`/products-page/${category.id}`}>
                        <div className={styles.content_card}>
                            <div className={styles.content_card__title} dangerouslySetInnerHTML={{ __html: t(category.title)}} />
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
