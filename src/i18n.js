import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from "i18next-browser-languagedetector";
import Cookies from 'js-cookie';

// the translations
// (tip move them in a JSON file and import them)
import translationEN from './locales/US.json';
import translationTW from './locales/TW.json';
import translationCN from './locales/CN.json';

const lng = Cookies.get('locale') === undefined ? 'US' : Cookies.get('locale');

const resources = {
  US: { translation: translationEN },
  TW: { translation: translationTW },
  CN: { translation: translationCN },
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,

    lng, // get default from cookie

    returnObjects: true, // locale build with object

    keySeparator: false, // we do not use keys in form messages.welcome

    fallbackLng: 'US',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
