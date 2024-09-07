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
                    <div key={i + 'category-page'}>
                        <div className={styles.content_card}>
                            <div className={styles.content_card__title}>{category.title}</div>
                            <img src={category.image} alt="" />
                            <div className={styles.content_card__text}>0 ta mahsulotlar</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoriesPage;
