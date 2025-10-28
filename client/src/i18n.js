import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from './Translations/fr/fr.json';
import en from './Translations/en/en.json';
import commonEN from './Translations/en/common.json';
import commonFR from './Translations/fr/common.json';

const resources = {
  en: {
    common: commonEN,
    translation: en
  },
  fr: {
    common: commonFR,
    translation: fr
  }
};

i18n
  .use(initReactI18next)
  .init({
    ns: ["translation", "common"],
    defaultNS: "translation",
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;