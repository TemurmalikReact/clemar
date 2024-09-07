import React from 'react'

import styles from "./why.module.scss"

export const Why = () => {
  return (
    <div className={styles.why}>
      <div className={styles.why_nav}>
        <div className={styles.why_nav__title}>
          Nega bizni tanlashadi?
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
