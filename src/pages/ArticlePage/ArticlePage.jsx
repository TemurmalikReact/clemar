import { Link, useParams } from "react-router-dom";
import { articles } from "../../utils/data";
import styles from "./ArticlePage.module.scss"
import { useTranslation } from "react-i18next";

export const ArticlePage = () => {
  const { t, i18n } = useTranslation();

    const { article } = useParams();

    let articleContent = articles.find((articleFilter => articleFilter.id == article));

    const filtered = articles.filter((filter, i) => i != 0 && filter.id != articleContent.id);

    return (
        <>
            <div className={styles.article}>
                <div className={styles.article_nav}>
                    <div className={styles.article_nav__title}>{t(articleContent.title)}</div>
                </div>
                <img className={styles.article_banner} src={articleContent.img} alt="" />
                <div className={styles.content}>
                    {t(articleContent.text)}
                </div>
                {article != "about" &&
                    <div className={styles.others}>
                        <div className={styles.others_title}>{t("others_title")}</div>
                        <div className={styles.others_content}>
                            {filtered.map((filter) => (
                                <div className={styles.card}>
                                    <div className={styles.card_top}>
                                        <img src={filter.img} alt="" />
                                    </div>
                                    <div className={styles.card_bottom}>
                                        <div className={styles.card_title}>{t(filter.title)}</div>
                                        <div className={styles.card_text}>
                                            {t(filter.text).split(' ').slice(0, 11).join(' ')}...
                                        </div>
                                        <Link to={`/article/${filter.id}`}>{t("article_more")}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default ArticlePage;

