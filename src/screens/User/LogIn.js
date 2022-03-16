import React, { useState } from 'react';
import { Text, Alert, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { styles } from './style';
import { login } from '../../Firebase/fireStoreAuthConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUserStorageByID } from '../../services/firebase';
import i18n from 'i18n-js';
import { useEffect } from 'react';
import { toggleSnackbarError, toggleSnackbarOpen } from '../../store/actions/snackbar';
import { useDispatch } from 'react-redux';

export default function Loginscreen({ navigation, route }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [EmailErr, setEmailErr] = useState('');
  const [PasswordErr, setPasswordErr] = useState('');
  const dispatch= useDispatch();

  const isNavigatedFromShoppingList = route.params.navigatedFromShoppingList;

  const handleValidation = () => {
    const regEmail = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/;
    const regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?_&]{8,}$/;

    if (email) {
      if (!regEmail.test(email)) {
        setEmailErr(i18n.t('EmailInvalid')), console.log(email);
      } else {
        setEmailErr(''), console.log('err');
      }

      if (password) {
        if (!regPassword.test(password)) {
          setPasswordErr(i18n.t('PasswordInvalid')), console.log(password);
        } else {
          setEmailErr('');
        }
      } else {
        console.log('success LogIn Validation');
      }
    } else {
      console.log('success LogIn Validation');
    }
  };

  async function handleLogIn(e) {
    var userObj = {
      Email: email,
      Password: password,
    };

    handleValidation();

    await login(email, password)
      .then(userCredentials => {
        if (isNavigatedFromShoppingList) {
          navigation.navigate('Favorites');
        } else {
          navigation.navigate('HomeStack');
        }

        AsyncStorage.setItem('UID', userCredentials.user.uid);
        navigation.navigate('User');
        updateUserStorageByID(userCredentials.user.uid);
        // console.log('function LogIn Success',userCredentials);
      })
      .catch(err => {
        // Alert.alert(i18n.t('UserNotFound'));
        dispatch(toggleSnackbarError(i18n.t('UserNotFound')));

        

      });
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
          onChangeText={email => setEmail(email)}
          value={email}
          theme={{ colors: { primary: '#2e73b8' } }}
        />
        <Text style={styles.textDanger}>{EmailErr}</Text>
        <TextInput
          placeholder={i18n.t('Password')}
          style={styles.input}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
          value={password}
          theme={{ colors: { primary: '#2e73b8' } }}
        />
        <Text style={styles.textDanger}>{PasswordErr}</Text>
        <Button
          style={styles.logBtn}
          mode='contained'
          onPress={handleLogIn}
          disabled={email == '' || password == ''}
        >
          <Text style={{ color: 'white' }}>{i18n.t('Login')}</Text>
        </Button>
      </View>

      <View style={styles.displayTxt}>
        <Text
          style={styles.txxt}
          onPress={() => navigation.navigate('SignForm')}
        >
          {i18n.t('SignUp')}
        </Text>
        <Text style={[styles.txxt, styles.txxtColor]}>|</Text>
        <Text style={styles.txxt}>{i18n.t('ForgotPassword')}</Text>
      </View>
    </View>
  );
}
