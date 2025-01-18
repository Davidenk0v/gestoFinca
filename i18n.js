import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: "Hello",
        world: "World",
      },
    },
    es: {
      translation: {
        hello: "Hola",
        world: "Mundo",
      },
    },
  },
  lng: "es", // Idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
