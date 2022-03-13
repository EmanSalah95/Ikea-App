import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

i18n.translations = {
    en: require('./locales/en/translations.json'),
    ar: require('./locales/ar/translations.json'),
};
i18n.fallbacks = true;

export const setLanguage = async (lang) => {
    i18n.locale=lang;
    await AsyncStorage.setItem('language', lang);
    
}
export default i18n;