import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from './Translations/fr/fr.json';
import en from './Translations/en/en.json';

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;