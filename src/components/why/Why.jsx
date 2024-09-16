import React from 'react'

import styles from "./why.module.scss"
import { useTranslation } from 'react-i18next';

export const Why = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.why}>
      <div className={styles.why_nav}>
        <div className={styles.why_nav__title}>
          {t("why_title")}
        </div>
      </div>
      <div className={styles.why_content}>
        <img src={require('../../assets/1tanlash.png')} alt="" />
        <img src={require('../../assets/2tanlash.png')} alt="" />
        <img src={require('../../assets/3tanlash.png')} alt="" />
        <img src={require('../../assets/4tanlash.png')} alt="" />
      </div>
    </div>
  )
}
