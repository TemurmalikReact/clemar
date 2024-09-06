import React from 'react'
import styles from "./news.module.scss"

export const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.news_nav}>
        <div className={styles.news_nav__title}>Bizning yangiliklar</div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_column}>
          <div className={styles.content_wrap}>
            <div className={styles.content_wrap__title}>
              Clemardan bo'lib to'lash rejasi
            </div>
            <div className={styles.content_wrap__text}>
              Siz professional uskunani sotib olishni xohlaysizmi, lekin to'liq miqdorni ajratishga tayyor emasmisiz? Bizda siz uchun yechim bor! Bizning qulay bo'lib to'lash tizimimiz haqida bilib oling, bu sizga kerakli uskunani hoziroq sotib olish va uni bosqichma-bosqich to'lash imkonini beradi. Barcha tafsilotlarni bilish va bugun buyurtma berish uchun “Toʻlov” boʻlimiga tashrif buyuring. Clemar bilan xaridingizni yanada arzonroq qiling!
            </div>
            <button>Batafsil</button>
          </div>
          <div className={styles.content_img}>
            <img src={require('../../assets/percent.png')} alt="" />
          </div>
        </div>
        <div className={`${styles.content_column} ${styles.right}`}>
          <div className={styles.content_wrap}>
            <div className={styles.content_wrap__title}>
              Clemardagi aktsiyalar
            </div>
            <div className={styles.content_wrap__text}>
              Bizning maxsus takliflarimiz va chegirmalarimiz haqida bilib oling! Clemarning barcha foydali imkoniyatlaridan xabardor bo'lish uchun Aktsiyalar bo'limiga tashrif buyuring. Xaridlarni tejang va qo'shimcha bonuslarga ega bo'ling. Sizni ijtimoiy tarmoqlarimizda bundanda kattaroq syurprizlar uchun kutamiz</div>
            <button>Batafsil</button>
          </div>
          <div className={`${styles.content_img} ${styles.right}`}>
            <img src={require('../../assets/precent.png')} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
