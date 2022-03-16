import { useEffect, useState } from "react"
import { View, TouchableOpacity, I18nManager, Alert } from "react-native"
import { Divider, Text } from "react-native-paper"
import { logout } from "../../Firebase/fireStoreAuthConfig"
import { styles } from "./style"
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from "../../store/store"
import { clearUser } from "../../store/actions/auth"
import RNPickerSelect from 'react-native-picker-select';
import { setLanguage } from "../../i18n/config"
import i18n from "i18n-js"
import { useDispatch } from "react-redux"
import changeLanguage from '../../store/actions/language'
import { Restart } from 'fiction-expo-restart'
export const ProfileSettings = ({ navigation }) => {
    const [logged, setLogged] = useState(false);
    const [lang, setLang] = useState();
    const dispatch = useDispatch();
    const getLogged = async () => {
        try {
            const id = await AsyncStorage.getItem('UID');
            if (id != null) {
                setLogged(true)
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    const confirmLogOut=()=>{
        return Alert.alert(i18n.t('LogOutConfirm'), null, [
            {
              text: i18n.t('No'),
            },
            {
              text: i18n.t('Yes'),
              onPress:handleLogout,
            },
          ]);
    }
    const handleLogout = () => {
        
        logout()
            .then(() => {
                AsyncStorage.removeItem('UID');
                store.dispatch(clearUser());
                setLogged(false);
                navigation.pop();
                // location.reload();
            })
            .catch((err) => console.log(err))
    }
    const handleLanguage = (value) => {
        setLanguage(value);
        // setLang(value);
        // dispatch(changeLanguage(value));
        AsyncStorage.setItem("language", value)
            .then(() => {
                if (value === "ar") {
                    I18nManager.forceRTL(true);
                    if (!I18nManager.isRTL) {
                        Restart();
                    }
                } else {
                    I18nManager.forceRTL(false);
                    if (I18nManager.isRTL) {
                        Restart();
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        navigation.setOptions({
            title: i18n.t('Settings')
        });
        getLogged();
    }, [])
    return (
        <View style={styles.settingsContainer}>
            <View>
                <RNPickerSelect
                    onValueChange={handleLanguage}
                    items={[{
                        label: 'English',
                        value: 'en',
                        color: 'black'
                    }, {
                        label: 'العربية',
                        value: 'ar',
                        color: 'blacl'
                    }]}
                    value={i18n.locale?i18n.locale:'en'}
                    placeholder={{
                        label:i18n.t('SelectLanguage'),
                        value:i18n.locale
                    }}
                />
            </View>
            <Divider style={styles.dividerStyle} />
            {logged &&
                <TouchableOpacity
                    onPress={confirmLogOut}
                >
                    <Text>{i18n.t('Logout')}</Text>
                </TouchableOpacity>}
        </View>
    )
}