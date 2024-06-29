import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// Initialize i18next with the necessary configuration
i18n
  .use(HttpApi) // Load translations using HTTP
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    supportedLngs: ['en', 'kn'], // Supported languages
    fallbackLng: 'en', // Fallback language
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    react: {
      useSuspense: false, // Disable suspense
    },
  });

export default i18n;
