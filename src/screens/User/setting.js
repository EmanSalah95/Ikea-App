import { useEffect, useState } from "react"
import { View, TouchableOpacity } from "react-native"
import { Divider, Text } from "react-native-paper"
import { logout } from "../../Firebase/fireStoreAuthConfig"
import { styles } from "./style"
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from "../../store/store"
import { clearUser } from "../../store/actions/auth"

export const ProfileSettings = ({ navigation }) => {
    const [logged, setLogged] = useState(false);
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
        logout().then(() => {
            AsyncStorage.removeItem('UID');
            store.dispatch(clearUser());
            setLogged(false);
            // location.reload();
        })
    }
    useEffect(() => {
        navigation.setOptions({
            title: 'SETTINGS'
        });
        getLogged();
    }, [])
    return (
        <View style={styles.settingsContainer}>
            <Text>Language</Text>
            <Divider style={styles.dividerStyle} />
            {logged &&
                <TouchableOpacity
                    onPress={handleLogout}
                >
                    <Text>Log out</Text>
                </TouchableOpacity>}
        </View>
    )
}