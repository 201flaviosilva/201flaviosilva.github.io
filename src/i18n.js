import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { locales } from "./locales";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: locales.pages.home.en,
        components: locales.components.en,
      },
      pt: {
        home: locales.pages.home.pt,
        components: locales.components.pt,
      },
    },
    fallbackLng: "en",
    ns: ["home"],
    defaultNS: "home",
    interpolation: { escapeValue: false },
  });

export default i18n;
