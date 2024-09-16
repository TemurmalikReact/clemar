import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Initialize i18next
i18n
  .use(HttpApi) // Load translations using http (default public/assets/locales folder)
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    fallbackLng: 'en', // Use English if the detected language is not available
    debug: true,
    supportedLngs: ['en', 'ru', 'uz'],
    interpolation: {
      escapeValue: false // React already does escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json' // Path to translation files
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie']
    }
  });

export default i18n;
