import React from 'react'
import styles from "./news.module.scss"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export const News = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.news}>
      <div className={styles.news_nav}>
        <div className={styles.news_nav__title}>{t("news_title")}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_column}>
          <div className={styles.content_wrap}>
            <div className={styles.content_wrap__title}>
              {t("news_content_title_1")}
            </div>
            <div className={styles.content_wrap__text}>
              {t("news_content_text_1")}
            </div>
            <Link to={`/article/1`}>
              <button>{t("news_content_button")}</button>
            </Link>
          </div>
          <div className={styles.content_img}>
            <img src={require('../../assets/percent.png')} alt="" />
          </div>
        </div>
        <div className={`${styles.content_column} ${styles.right}`}>
          <div className={styles.content_wrap}>
            <div className={styles.content_wrap__title}>
              {t("news_content_title_2")}
            </div>
            <div className={`${styles.content_wrap__text} ${styles.right}`}>
              {t("news_content_text_2")}
            </div>
            <Link to={`/article/2`}>
              <button>{t("news_content_button")}</button>
            </Link>
          </div>
          <div className={styles.content_img}>
            <img src={require('../../assets/precent.png')} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
