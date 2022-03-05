import React from 'react';
import { Text, Alert, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { styles } from './style';
import { login } from '../../Firebase/fireStoreAuthConfig';

export default function Loginscreen({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [EmailErr, setEmailErr] = useState('');
  const [PasswordErr, setPasswordErr] = useState('');
  const [allValid, setAllValid] = useState(
    EmailErr === null && PasswordErr === null
  );
  
  const handleValidation = () => {                          
    const regEmail = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/;
    const regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?_&]{8,}$/;
  
      if (email) {
        if (!regEmail.test(email)) {
          setEmailErr('Email is not valid') ,
          console.log(email)
        }
          else {
            setEmailErr('') ,
            console.log('err')
          }

      }

      if (password) {
        if (!regPassword.test(password)) {
          setPasswordErr('Password is not valid'),
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

    // if(email === '' && password === '') {
    //   Alert.alert('Enter details to signin!')
    //   console.log('Empty Field Input, Please fill it');
    // } 

    
    
    
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
    

    console.log(userObj);
    
}

  useEffect(()=>{
    setAllValid(EmailErr === null && PasswordErr === null);
  },[])
  
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
        <Text style={styles.textDanger}>{EmailErr}</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <Text style={styles.textDanger}>{PasswordErr}</Text>   
        <Button style={styles.logBtn} mode='contained' onPress={handleLogIn} disabled={email=='' || password==''} >LogIn</Button>
        </View>

        <View style={styles.displayTxt}>
            <Text style={styles.txxt} onPress={() => navigation.navigate('SignForm')}>Sign up</Text>
            <Text style={styles.txxt}>|</Text>
            <Text style={styles.txxt}>Forget Password?</Text>
        </View>
      </View>
    );
  
}
