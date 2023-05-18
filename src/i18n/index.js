import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationHomeEng from '../locales/en/home.json';
import translationHomeDe from '../locales/de/home.json';

// Translations:
const resources = {
	en: {
		translation: translationHomeEng
	},
	de: {
		translation: translationHomeDe
	}
}

i18n
.use(initReactI18next)
.init({
	resources,
	lng: "de",
	debug: true,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false
	},
	ns: "translation",
	defaultNS: "translation"
});

export default i18n;
