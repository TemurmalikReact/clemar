import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import dropdown from '../../assets/dropdown.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProduct } from '../../contexts/ProductContext';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [categoriesActive, setCategoriesActive] = useState(0);
  const [katalogActive, setKatalogActive] = useState(false);
  const [search, setSearch] = useState('');

  const { categoriesData, subCategoriesData, productsData, setProductsData } = useProduct();

  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null); // To track input element reference
  const productListRef = useRef(null); // To track product list reference

  const katalogRef = useRef(null);

  const handleScroll = () => {
    setKatalogActive(false);

    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClickOutside = (event) => {
    if (katalogRef.current && !katalogRef.current.contains(event.target)) {
      setKatalogActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const filteredProducts = productsData.filter((product) => {
    if (i18n.language == "ru") {
      return product.name_ru.toLowerCase().includes(search.toLowerCase())
    } else if (i18n.language == "en") {
      return product.name_en.toLowerCase().includes(search.toLowerCase())
    }
    else {
      return product.name_uz.toLowerCase().includes(search.toLowerCase())
    }
  });

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = (event) => {
    setTimeout(() => {
      if (
        productListRef.current &&
        !productListRef.current.contains(event.relatedTarget)
      ) {
        setIsInputFocused(false);
      }
    }, 300); 
  };  

  const changeLanguage = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <div ref={katalogRef} className={`${styles.fixed} ${scrolled ? styles.scrolled : null}`}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <svg viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.532715 7.65932C0.544721 4.1255 3.41918 1.2705 6.953 1.28251C10.4868 1.29451 13.3418 4.16898 13.3298 7.7028V7.77526C13.2863 10.0724 12.0037 12.1956 10.4313 13.855C9.53197 14.7888 8.52772 15.6156 7.43851 16.3187C7.14727 16.5707 6.71526 16.5707 6.42402 16.3187C4.80027 15.2619 3.37516 13.9275 2.21387 12.3767C1.17884 11.0244 0.591186 9.38301 0.532715 7.68106L0.532715 7.65932Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6.93134" cy="7.78241" r="2.05072" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div div className={styles.header_logo__text}>
            <span>{t("header_address")}: </span>
            <a target='_blank' href="https://yandex.uz/navi/10335/tashkent/?ll=69.220719%2C41.290161&panorama%5Bdirection%5D=227.914276%2C-0.865454&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=69.220719%2C41.290161&panorama%5Bspan%5D=122.452399%2C60.000000&z=10">
              {t("header_tashkent")}
            </a>
          </div>
        </div>
        <nav className={styles.header_nav}>
          <div className={styles.header_nav__item}>
            <a target='_blank' href="https://www.instagram.com/cleanmarket.uz">
              <svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.65413 15.1116C1.77105 12.5566 2.1711 10.9088 2.71213 9.51005L2.7194 9.49073C3.25553 8.06738 4.0954 6.77797 5.18055 5.71222L5.19578 5.69727L5.21073 5.68205C6.27735 4.5955 7.56723 3.75645 8.98933 3.22175L9.01385 3.21238C10.4094 2.66965 12.054 2.27108 14.6111 2.15418M1.65413 15.1116C1.5312 17.8415 1.49988 18.6877 1.49988 25.7657C1.49988 32.8452 1.52948 33.6895 1.65405 36.42M1.65413 15.1116V15.8002M14.6111 2.15418C17.3417 2.0296 18.1876 2 25.2655 2C32.3435 2 33.189 2.0313 35.9187 2.1542M14.6111 2.15418H15.3015M1.65405 36.42C1.77095 38.9772 2.16953 40.6218 2.71225 42.0173L2.72163 42.042M1.65405 36.42L1.69593 36.6405M1.65405 36.42V35.7298M1.65413 15.8002C1.66368 15.5814 1.67398 15.3534 1.685 15.1108C1.81313 12.3153 2.28835 10.682 2.74133 9.5235C3.32758 8.01055 4.0702 6.8689 5.20475 5.72965C6.28315 4.6234 7.59413 3.77093 9.04265 3.23395C10.196 2.7866 11.8251 2.3128 14.61 2.18515C14.8533 2.1741 15.0821 2.16378 15.3015 2.15418M1.65413 15.8002C1.55295 18.1136 1.5312 19.3898 1.5312 25.7657C1.5312 32.1395 1.55295 33.4175 1.65405 35.7298M1.65413 15.8002L1.65405 35.7298M2.72163 42.042C3.25633 43.464 4.09538 44.7538 5.18193 45.8205L5.19713 45.8355L5.21205 45.8505C6.27785 46.9357 7.5673 47.7758 8.99065 48.3118L9.0119 48.3198C10.4087 48.8615 12.0541 49.2602 14.6111 49.3772M2.72163 42.042L2.68958 41.873M2.68958 41.873L1.69593 36.6405M2.68958 41.873C2.26755 40.7582 1.833 39.2025 1.69593 36.6405M2.68958 41.873C2.70438 41.9122 2.71915 41.9508 2.73393 41.9888C3.2691 43.4315 4.11708 44.738 5.21693 45.814C6.29265 46.9138 7.59855 47.7615 9.04085 48.2967C10.1983 48.7475 11.8293 49.2187 14.6107 49.3462C17.4177 49.474 18.2849 49.5 25.2655 49.5C32.2462 49.5 33.1142 49.474 35.9212 49.3462C38.706 49.2185 40.335 48.7447 41.4885 48.2975C42.9315 47.7625 44.2382 46.9143 45.3142 45.814C46.4137 44.7383 47.2615 43.4325 47.7967 41.9902C48.2475 40.8327 48.7187 39.202 48.846 36.4205C48.9737 33.6135 49 32.7445 49 25.7657C49 18.7868 48.9737 17.9171 48.846 15.1101C48.7177 12.3107 48.2397 10.6792 47.7902 9.5248C47.2027 8.00805 46.4577 6.86092 45.3125 5.71567C44.1695 4.57497 43.0255 3.82948 41.5075 3.24135C40.349 2.78843 38.7165 2.31327 35.9212 2.18515C35.678 2.1741 35.4495 2.1638 35.2302 2.1542M1.69593 36.6405C1.69205 36.5683 1.68843 36.4953 1.68503 36.4213C1.67398 36.178 1.66365 35.9493 1.65405 35.7298M35.2302 2.1542H35.9187M35.2302 2.1542L15.3015 2.15418M35.2302 2.1542C32.9177 2.0531 31.64 2.03133 25.2655 2.03133C18.8916 2.03133 17.6137 2.05308 15.3015 2.15418M35.9187 2.1542C38.4742 2.2711 40.1222 2.6711 41.5212 3.21217L41.5405 3.21952C42.9637 3.75565 44.2532 4.59553 45.319 5.68068L45.3337 5.69575L45.349 5.71055C46.4342 6.77638 47.274 8.06615 47.8097 9.4899L47.8187 9.51397C48.3615 10.9095 48.7602 12.5541 48.877 15.1113M48.877 36.42C48.7602 38.977 48.3615 40.6225 47.8197 42.0192L47.8117 42.0405C47.2755 43.464 46.4357 44.7532 45.3505 45.819L45.3352 45.834L45.3205 45.8492C44.2537 46.9357 42.964 47.7747 41.5417 48.3095L41.5172 48.319C40.1217 48.8617 38.477 49.2602 35.92 49.3772M21.0387 35.9703C22.3787 36.5253 23.815 36.811 25.2655 36.811C28.195 36.811 31.0045 35.6472 33.076 33.576C35.1472 31.5045 36.311 28.695 36.311 25.7657C36.311 22.8362 35.1472 20.0268 33.076 17.9554C31.0045 15.884 28.195 14.7202 25.2655 14.7202C23.815 14.7202 22.3787 15.0059 21.0387 15.561C19.6985 16.1161 18.4809 16.9297 17.4553 17.9554C16.4296 18.981 15.616 20.1987 15.0609 21.5388C14.5059 22.8787 14.2202 24.3152 14.2202 25.7657C14.2202 27.2162 14.5059 28.6525 15.0609 29.9925C15.616 31.3327 16.4296 32.5502 17.4553 33.576C18.4809 34.6015 19.6985 35.4153 21.0387 35.9703ZM17.4307 17.9308C19.5087 15.8528 22.327 14.6855 25.2655 14.6855C28.2042 14.6855 31.0225 15.8528 33.1005 17.9308C35.1785 20.0087 36.3457 22.827 36.3457 25.7657C36.3457 28.7042 35.1785 31.5225 33.1005 33.6005C31.0225 35.6785 28.2042 36.8458 25.2655 36.8458C22.327 36.8458 19.5087 35.6785 17.4307 33.6005C15.3527 31.5225 14.1854 28.7042 14.1854 25.7657C14.1854 22.827 15.3527 20.0087 17.4307 17.9308ZM42.585 12.1057C42.585 12.9468 42.2507 13.7535 41.6562 14.3482C41.0615 14.943 40.2547 15.2771 39.4137 15.2771C38.5725 15.2771 37.766 14.943 37.1712 14.3482C36.5765 13.7535 36.2422 12.9468 36.2422 12.1057C36.2422 11.2646 36.5765 10.458 37.1712 9.86325C37.766 9.2685 38.5725 8.93437 39.4137 8.93437C40.2547 8.93437 41.0615 9.2685 41.6562 9.86325C42.2507 10.458 42.585 11.2646 42.585 12.1057Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
              </svg>
              <span>{t("header_instagram")}</span>
            </a>
          </div>
          <div className={styles.header_nav__item}>
            <a target='_blank' href="https://t.me/cleaning_market">
              <svg viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0126 1.03345C16.4876 1.03345 16.8459 1.45011 16.6542 2.22511L14.3292 13.1834C14.1667 13.9626 13.6959 14.1501 13.0459 13.7876L7.50008 9.69178C7.47857 9.67635 7.46105 9.65602 7.44896 9.63247C7.43688 9.60892 7.43057 9.58283 7.43057 9.55636C7.43057 9.52989 7.43688 9.50381 7.44896 9.48026C7.46105 9.45671 7.47857 9.43638 7.50008 9.42095L13.9042 3.63761C14.1959 3.37928 13.8417 3.25428 13.4584 3.48761L5.42091 8.55845C5.39654 8.57435 5.36886 8.58448 5.33998 8.58809C5.3111 8.5917 5.28178 8.58869 5.25424 8.57928L1.84174 7.50011C1.08341 7.27928 1.08341 6.75845 2.01258 6.38761L15.6667 1.12095C15.775 1.069 15.8926 1.03925 16.0126 1.03345V1.03345Z" stroke="white" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t("header_telegram")}</span>
            </a>
          </div>
          <div className={styles.header_nav__item}>
            <span className={styles.phone}>+998 55 500 14 11</span>
          </div>
          <div className={styles.header_nav__item}>
            <select
              onChange={changeLanguage}
              value={i18n.language}
              className={styles.language_select}>
              <option value="en">Eng</option>
              <option value="ru">Рус</option>
              <option value="uz">O'zb</option>
            </select>
          </div>
          <div className={`${styles.header_nav__item} ${styles.button}`}>
            <button>{t("header_products")}</button>
          </div>
        </nav>
      </div>
      <div className={styles.sticky}>
        <svg onClick={() => navigate(-1)} className={styles.back} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 17"><path d="M7.75135 16.7197L0.885098 9.55347C0.683348 9.31347 0.600098 9.08847 0.600098 8.89722C0.600098 8.70597 0.68331 8.44834 0.850898 8.27509L7.71715 1.10884C8.06035 0.749066 8.6299 0.737366 8.9884 1.08189C9.34933 1.42408 9.36107 1.99576 9.01535 2.35351L2.7466 8.89722L9.0466 15.4747C9.39231 15.831 9.38057 16.404 9.01965 16.7463C8.6626 17.091 8.0926 17.0797 7.75135 16.7197Z"></path></svg>
        <div className={styles.sticky_item}>
          <button onClick={() => { setKatalogActive((prev) => !prev) }} className={styles.sticky_item__toggle}>
            <svg viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1Z" fill="#ffff" />
              <path d="M16 7C16 7.55228 15.5523 8 15 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H15C15.5523 6 16 6.44772 16 7Z" fill="#ffff" />
              <path d="M16 13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13C0 12.4477 0.447715 12 1 12H15C15.5523 12 16 12.4477 16 13Z" fill="#ffff" />
            </svg>
            <span>{t("header_katalog")}</span>
          </button>
        </div>
        <Link to="/" className={styles.sticky_item}>
          <img className={styles.sticky_item__logo} src={require('../../assets/logo.png')} alt="" />
        </Link>
        <div className={`${styles.sticky_item} ${styles.search_wrapper}`}>
          <div className={styles.sticky_item__search}>
            <input
              ref={inputRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type="text" placeholder={t("header_search")} />
            <button>
              <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.7666" cy="10.2666" r="8.98856" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.0183 16.9851L20.5423 20.5" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          {isInputFocused && filteredProducts.length > 0 && search &&
            <div ref={productListRef} className={styles.sticky_item__found}>
              {
                filteredProducts.map((product) => (
                  <Link 
                    // onClick={handleBlur} 
                    to={`/product/${product.id}`}>
                    {i18n.language == "ru" ? product.name_ru : (i18n.language == "en" ? product.name_en : product.name_uz)}
                  </Link>
                ))
              }
            </div>
          }
        </div>
        <div className={styles.sticky_item}>
          <Link to="/article/about" className={styles.sticky_item__link} href="#">
            <span>{t("header_about_us")}</span>
          </Link>
        </div>
        <div className={styles.sticky_item}>
          <Link to="/products-page/favorite" className={styles.sticky_item__link}>
            <span>{t("header_favorite")}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="heart">
              <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className={`${styles.sticky} ${styles.input}`}>
        <div className={`${styles.sticky_item} ${styles.search_wrapper}`}>
          <div className={styles.sticky_item__search}>
            <input
              ref={inputRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type="text" placeholder="Qidiruv" />
            <button>
              <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.7666" cy="10.2666" r="8.98856" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.0183 16.9851L20.5423 20.5" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          {isInputFocused && filteredProducts.length > 0 && search &&
            <div ref={productListRef} className={styles.sticky_item__found}>
              {
                filteredProducts.map((product) => (
                  <Link 
                    // onClick={handleBlur} 
                    to={`/product/${product.id}`}>
                    {i18n.language == "ru" ? product.name_ru : (i18n.language == "en" ? product.name_en : product.name_uz)}
                  </Link>
                ))
              }
            </div>
          }
        </div>
      </div>
      <div className={`${styles.katalog} ${katalogActive ? styles.active : null}`}>
        <div className={styles.katalog_categories}>
          {categoriesData.map((category, i) =>
            <div onMouseEnter={() => setCategoriesActive(i)} className={`${styles.katalog_categories__item} ${i == categoriesActive ? styles.active : null}`}>
              <img src={category.ico} alt="" /> <span>
                {i18n.language == "ru"
                  ? category.name_ru.split('/rn/')[0]
                  : (i18n.language == "en" ? category.name_en.split('/rn/')[0] : category.name_uz.split('/rn/')[0])
                }
              </span>
            </div>
          )}
        </div>
        <div className={styles.katalog_subcategories}>
          {subCategoriesData
            .filter((subCategory) => categoriesData.find((category, i) => i == categoriesActive && subCategory.category == category.id))
            .map((subCategory) =>
              <div className={styles.katalog_subcategories__item}>
                <Link onClick={() => { setKatalogActive((prev) => !prev) }} to={`/subcategory-products-page/${subCategory.id}`}>
                  {i18n.language == "ru" ? subCategory.name_ru : (i18n.language == "en" ? subCategory.name_en : subCategory.name_uz)}
                </Link>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
