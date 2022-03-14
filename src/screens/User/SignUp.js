import React from 'react'
import { Button } from 'react-native-paper';
import { styles } from './style';
import { Text, View } from "react-native"
import firebase from 'firebase/app';
import "firebase/auth";
import i18n from 'i18n-js';

export default function SignUpScreen({ navigation }) {
        
    return (
    <View style={styles.container}>
        {/* <Text style={styles.userHeading}>Sign Up</Text> */}
        <View style={styles.signPage}>
            <Text style={styles.signInSub}>{i18n.t('IkeaBenifits')}:</Text>
            <View>
                <Text style={styles.signTxt}>- {i18n.t('HaveYourShoppingList')}</Text>
                <Text style={styles.signTxt}>- {i18n.t('SeemoreOffers')}</Text>
            </View>
            <Button style={styles.logBtn} mode='contained' onPress={() => navigation.navigate('SignForm')} >{i18n.t('SignUpAccount')}</Button>
        </View>
    </View>
    )
}