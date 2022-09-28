import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    // debug: __IS_DEV__ ? true : false,
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, //   <---- this will do the magic
    },
  });

export default i18n;
