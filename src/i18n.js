import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './languages/en.json'
import translationFR from './languages/fr.json'


//import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const supportedLanguages = {
    FR : 'fr',
    EN : 'en',
}


// translation files
const resources = {
    en: translationEN,
    fr:  translationFR
  };
   

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources, // list of languages translations files
    lng: supportedLanguages.FR, // default language
    fallbackLng: supportedLanguages.FR, // default fallback language
    debug: false,
    keySeparator: '.', // to support nested translations
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;