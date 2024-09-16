import React from 'react'

import styles from "./contact.module.scss"
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.contact}>
      <div className={styles.contact_nav}>
        <div className={styles.contact_nav__title}>
          {t("contact_title")}
        </div>
        <div className={styles.contact_nav__text} dangerouslySetInnerHTML={{ __html: t("contact_text") }} />
      </div>
      <div className={styles.form}>
        <input type="text" placeholder={t("contact_name")} />
        <input type="text" placeholder={t("contact_number")} />
        <textarea name="" id="" placeholder={t("contact_message")}></textarea>
        <button>{t("contact_send")}</button>
      </div>
    </div>
  )
}
