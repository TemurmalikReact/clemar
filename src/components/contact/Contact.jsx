import React from 'react'

import styles from "./contact.module.scss"

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_nav}>
        <div className={styles.contact_nav__title}>
          Biz bilan bog'lanish
        </div>
        <div className={styles.contact_nav__text}>
          Telefon raqamingizni qoldiring va menejerlarimiz tez <br /> orada siz bilan bog'lanadi
        </div>
      </div>
      <div className={styles.form}>
        <input type="text" placeholder='Ism' />
        <input type="text" placeholder='Telefon raqami' />
        <textarea name="" id="" placeholder='Sizning Xabar'></textarea>
        <button>Yuborish</button>
      </div>
    </div>
  )
}
