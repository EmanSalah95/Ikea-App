import React, { Component } from 'react';
import { Text, Alert, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState, useRef } from 'react';
import { styles } from './style';
import {app} from '../../Firebase/fireStoreAuthConfig';
// import { login, useAuth } from '../../Firebase/fireStoreAuthConfig';

export default function Loginscreen({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState({
    EmailErr: null,
    PasswordErr: null,
  });
  
  const signIn = () => {                          
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

  // const userLogin = () => {
  //   if(email === '' && password === '') {
  //     Alert.alert('Enter details to signin!')
  //   } 

  //   app
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       console.log(res)
  //       console.log('User logged-in successfully!')
  //       this.setState({
  //         email: '', 
  //         password: ''
  //       })
  //       this.props.navigation.navigate('Product')
  //     })
  //     .catch(error => this.setState({ errorMessage: error.message }))
    
  // }

  
  
    return (
      <View style={styles.container}>
        <Text style={styles.userHeading}>LogIn</Text>
         <Text style={styles.userSubbHeading}>Log in to save your shopping lists and access them from any device.</Text>
         <View style={styles.view}>
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          onChangeText={(email) => setEmail(email)}
       
        />
        <Text style={styles.textDanger}>{errors.EmailErr}</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}

        />
        <Text style={styles.textDanger}>{errors.PasswordErr}</Text>   
        <Button style={styles.logBtn} mode='contained' onPress={() => signIn()}>LogIn</Button>
        </View>

        <View style={styles.displayTxt}>
            <Text>Sign up</Text>
            <Text>|</Text>
            <Text>Forget Password?</Text>
        </View>
      </View>
    );
  
}
