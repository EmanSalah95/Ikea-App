import React from 'react';
import { Text, Alert, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState, useRef } from 'react';
import { styles } from './style';
import { login, useAuth } from '../../Firebase/fireStoreAuthConfig';

export default function Loginscreen({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState({
    EmailErr: null,
    PasswordErr: null,
  });
  
  const handleValidation = () => {                          
      const regEmail = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/;
      const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  
      if (email) {
        if (!regEmail.test(email)) {
          setError({
            ...errors,
            EmailErr: 'Email is not valid',
          });
        }
          else {
            setError({
              ...errors,
              EmailErr: '',
            });
          }
      }

      else if (password) {
        if (!regPassword.test(password)) {
          setError({
            ...errors,
            PasswordErr: 'Password is not valid',
          });
        }
        else {
          setError({
            ...errors,
            PasswordErr: '',
          });
        }
      }
      
      else
      {
        console.log('success LogIn')
      }
  }

  async function handleLogIn() {
        
    var userObj = {
    Email: email,
    Password: password,
    };

    if(email === '' && password === '') {
      Alert.alert('Enter details to signin!')
      console.log('Empty Field Input, Please fill it');
    } 
    
    else {
      try {
        await login(email, password).then(
          userCredentials => {
            localStorage.setItem('UID', userCredentials.user.uid);
            navigation.navigate('Products')
            console.log('function LogIn Success');
          }
          
        );
      } 
      catch {
        Alert.alert('User not found you can signup!')
          console.log('Failed LogIn')
          navigation.navigate('SignForm')
      }
    }

    console.log(userObj);
    
}
  
    return (
      <View style={styles.container}>
        <Text style={styles.userHeading}>LogIn</Text>
         <Text style={styles.userSubbHeading}>Log in to save your shopping lists and access them from any device.</Text>
         <View style={styles.view}>
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
        <Text style={styles.textDanger}>{errors.EmailErr}</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <Text style={styles.textDanger}>{errors.PasswordErr}</Text>   
        <Button style={styles.logBtn} mode='contained' onPress={handleLogIn}>LogIn</Button>
        </View>

        <View style={styles.displayTxt}>
            <Text>Sign up</Text>
            <Text>|</Text>
            <Text>Forget Password?</Text>
        </View>
      </View>
    );
  
}
