import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import enJson from './languages/en.json'
import ptJson from './languages/pt.json'
import esJson from './languages/es.json'

export default i18n.use(initReactI18next).init({
    fallbackLng: 'ptBR',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: enJson,
        ptBR: ptJson,
        es: esJson,
    },
})