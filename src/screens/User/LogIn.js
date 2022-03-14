import React from 'react';
import { Text, Alert, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { styles } from './style';
import { login } from '../../Firebase/fireStoreAuthConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUserStorageByID } from '../../services/firebase';
import i18n from 'i18n-js';

export default function Loginscreen({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [EmailErr, setEmailErr] = useState('');
  const [PasswordErr, setPasswordErr] = useState('');
  
  const handleValidation = () => {                          
    const regEmail = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/;
    const regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?_&]{8,}$/;
  
      if (email) {
        if (!regEmail.test(email)) {
          setEmailErr(i18n.t('EmailInvalid')) ,
          console.log(email)
        }
          else {
            setEmailErr('') ,
            console.log('err')
          }

      }

      if (password) {
        if (!regPassword.test(password)) {
          setPasswordErr(i18n.t('PasswordInvalid')),
          console.log(password)
        }
        else {
          setEmailErr('') 
        }
      }
      
      else
      {
        console.log('success LogIn Validation')
      }
  }

  async function handleLogIn(e) {
        
    var userObj = {
    Email: email,
    Password: password,
    };

    handleValidation()

    await login(email, password).then(
      userCredentials => {
        AsyncStorage.setItem('UID', userCredentials.user.uid);
        navigation.navigate('User');
        updateUserStorageByID(userCredentials.user.uid)
        // console.log('function LogIn Success',userCredentials);
      }
    )
    .catch(err=>{
        Alert.alert(i18n.t('UserNotFound'))
          console.log('Failed LogIn',err)
          navigation.navigate('SignForm')
    })
    console.log(userObj);
}

  
    return (
      <View style={styles.container}>
        <Text style={styles.userHeading}>{i18n.t('Login')}</Text>
         <Text style={styles.userSubbHeading}>{i18n.t('LoginDescription')}</Text>
         <View style={styles.view}>
        <TextInput
          placeholder={i18n.t('EmailPlaceholder')}
          style={styles.input}
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
        <Text style={styles.textDanger}>{EmailErr}</Text>
        <TextInput
          placeholder={i18n.t('Password')}
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <Text style={styles.textDanger}>{PasswordErr}</Text>   
        <Button style={styles.logBtn} mode='contained' onPress={handleLogIn} disabled={email=='' || password==''} >{i18n.t('Login')}</Button>
        </View>

        <View style={styles.displayTxt}>
            <Text style={styles.txxt} onPress={() => navigation.navigate('SignForm')}>{i18n.t('SignUp')}</Text>
            <Text style={[styles.txxt, styles.txxtColor]}>|</Text>
            <Text style={styles.txxt}>{i18n.t('ForgotPassword')}</Text>
        </View>
      </View>
    );
  
}
