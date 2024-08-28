import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../src/locales/en/translation.json';
import translationAR from '../src/locales/ar/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the selected language doesn't have a translation
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
