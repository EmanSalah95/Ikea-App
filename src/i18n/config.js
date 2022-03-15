import i18n from 'i18n-js';
// import {RNLanguagesModule} from "react-native-languages";
import * as Localization from 'expo-localization'
import AsyncStorage from '@react-native-async-storage/async-storage';


i18n.locale = Localization.locale;
i18n.fallbacks = true;

i18n.translations = {
    en: require('./locales/en/translations.json'),
    ar: require('./locales/ar/translations.json'),
};

export const setLanguage = async (lang) => {
    i18n.locale=lang;
    await AsyncStorage.setItem('language', lang);
}
export default i18n;