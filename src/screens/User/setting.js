import { useEffect, useState } from "react"
import { View, TouchableOpacity } from "react-native"
import { Divider, Text } from "react-native-paper"
import { logout } from "../../Firebase/fireStoreAuthConfig"
import { styles } from "./style"
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from "../../store/store"
import { clearUser } from "../../store/actions/auth"
import RNPickerSelect from 'react-native-picker-select';
import {setLanguage} from "../../i18n/config"
import i18n from "i18n-js"
import { useDispatch } from "react-redux"
import changeLanguage from '../../store/actions/language'
export const ProfileSettings = ({ navigation }) => {
    const [logged, setLogged] = useState(false);
    const [lang,setLang]=useState();
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
    const handleLogout = () => {
        logout()
        .then(() => {
            AsyncStorage.removeItem('UID');
            store.dispatch(clearUser());
            setLogged(false);
            navigation.pop();
            // location.reload();
        })
        .catch((err)=>console.log(err))
    }
    const handleLanguage = (value) =>{
        setLanguage(value);
        setLang(value);
        // dispatch(changeLanguage(value));
    }
    useEffect(() => {
        navigation.setOptions({
            title: i18n.t('Settings')
        });
        getLogged();
    }, [i18n.locale])
    return (
        <View style={styles.settingsContainer}>
            <View style={{direction:i18n.locale=='en'?'left':'right'}}>
                <RNPickerSelect
                onValueChange={handleLanguage}
                items={[{
                    label:'English',
                    value:'en',
                    color:'black'
                },{
                    label:'العربية',
                    value:'ar',
                    color:'blacl'
                }]}
                value={lang}
                />
            </View>
            <Divider style={styles.dividerStyle} />
            {logged &&
                <TouchableOpacity
                    onPress={handleLogout}
                >
                    <Text style={{textAlign:i18n.locale=='en'?'left':'right'}}>{i18n.t('Logout')}</Text>
                </TouchableOpacity>}
        </View>
    )
}