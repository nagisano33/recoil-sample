import i18next from "i18next";

i18next.init({
  lng: "jp", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        greet: "hello !",
      },
    },
    jp: {
      translation: {
        greet: "こんにちは！",
      },
    },
  },
});

export default i18next;
