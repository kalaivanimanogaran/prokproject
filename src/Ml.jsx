import i18next from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslation from "./locales/en/translation.json"
import esTranslation from "./locales/es/translation.json"
import ptTranslation from "./locales/pt/translation.json"

const ML = i18next.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    pt: { translation: ptTranslation },
  },
  lng: localStorage.getItem("i18nextLng") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default ML
