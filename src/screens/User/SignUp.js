import React from 'react'
import { Button } from 'react-native-paper';
import { styles } from './style';
import { Text, View } from "react-native"
import firebase from 'firebase/app';
import "firebase/auth";

export default function SignUpScreen({ navigation }) {
        
    return (
    <View style={styles.container}>
        {/* <Text style={styles.userHeading}>Sign Up</Text> */}
        <View style={styles.signPage}>
            <Text style={styles.signInSub}>IKEA ACCOUNT BENEFITS:</Text>
            <View>
                <Text style={styles.signTxt}>- Have you shopping lists on your phone, tablet, and computer</Text>
                <Text style={styles.signTxt}>- See more IKEA offers</Text>
            </View>
            <Button style={styles.logBtn} mode='contained' onPress={() => navigation.navigate('SignForm')} >SIGN UP FOR IKEA ACCOUNT</Button>
        </View>
    </View>
    )
}