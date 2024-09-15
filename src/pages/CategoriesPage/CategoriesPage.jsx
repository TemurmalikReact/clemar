import { Link } from "react-router-dom";
import { categories } from "../../utils/data";
import styles from "./CategoriesPage.module.scss"

export const CategoriesPage = () => {
    return (
        <div className={styles.categories}>
            <div className={styles.categories_nav}>
                <div className={styles.categories_nav__title}>Kategoriyalar</div>
            </div>
            <div className={styles.content}>
                {categories.map((category, i) => (
                    <Link key={i + 'category-page'} to={`/products-page/${category.id}`}>
                        <div className={styles.content_card}>
                            <div className={styles.content_card__title} dangerouslySetInnerHTML={{ __html: category.title}} />
                            <img src={category.image} alt="" />
                            <div className={styles.content_card__text}>0 ta mahsulotlar</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoriesPage;
