import React, { Component } from 'react';
import { Text, Alert, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { styles } from './style';


export default function Loginscreen({navigation}){
    return (
      <View style={styles.container}>
        <Text style={styles.userHeading}>LogIn</Text>
         <Text style={styles.userSubbHeading}>Log in to save your shopping lists and access them from any device.</Text>
         <View style={styles.view}>
        <TextInput
          placeholder="Email Address"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
        />
        
        <Button style={styles.logBtn} mode='contained' onPress={() => navigation.navigate('Product')} >LogIn</Button>
        </View>

        <View style={styles.displayTxt}>
            <Text>Sign up</Text>
            <Text>|</Text>
            <Text>Forget Password?</Text>
        </View>
      </View>
    );
  
}
