import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from './Translations/fr/fr.json';
import en from './Translations/en/en.json';
import commonEN from './Translations/en/common.json';
import commonFR from './Translations/fr/common.json';
import burnoutEN from './Translations/en/quiz/burnout_quiz.json';
import burnoutFR from './Translations/fr/quiz/burnout_quiz.json';
import falloutEN from './Translations/en/quiz/fallout_quiz.json';
import falloutFR from './Translations/fr/quiz/fallout_quiz.json';
import skillsEN from './Translations/en/quiz/skills_quiz.json';
import skillsFR from './Translations/fr/quiz/skills_quiz.json';

const resources = {
  en: {
    common: commonEN,
    burnoutQuiz: burnoutEN,
    falloutQuiz: falloutEN,
    techSkillsQuiz: skillsEN,
    translation: en
  },
  fr: {
    common: commonFR,
    burnoutQuiz: burnoutFR,
    falloutQuiz: falloutFR,
    techSkillsQuiz: skillsFR,
    translation: fr
  }
};

i18n
  .use(initReactI18next)
  .init({
    ns: ["translation", "common", "burnoutQuiz", "falloutQuiz", "skillsQuiz"],
    defaultNS: "translation",
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;