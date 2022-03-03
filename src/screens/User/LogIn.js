// import React, { useState } from 'react'
// import { Text, View, TextInput } from "react-native"
// import { Button } from 'react-native-paper';
// import { styles } from './style';
// import firebase from 'firebase/app';
// import "firebase/auth";

// export default function Loginscreen({ navigation }) {

//     const [values, setValues] = useState({
//         email: "",
//         pwd: ""
//     })

//     function handleChange(text, eventName) {
//         setValues(prev => {
//             return {
//                 ...prev,
//                 [eventName]: text
//             }
//         })
//     }

//     function Login() {

//         const { email, pwd } = values

//         firebase.auth().signInWithEmailAndPassword(email, pwd)
//             .then(() => {
//             })
//             .catch((error) => {
//                 alert(error.message)
//                 // ..
//             });
//     }

//     return (
//     <View style={styles.container}>
//         <Text style={styles.userHeading}>Login</Text>
//         <Text style={styles.userSubHeading}>Log in to save your shopping lists and access them from any device.</Text>
//         <TextInput placeholder="Email Address" onChangeText={text => handleChange(text, "email")} />
//         <TextInput placeholder="Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
//         <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
//             <Button onClick={() => Login()} title="Login" style={{ width: "48%" }} ></Button>
//         </View>
//     </View>)
// }


import React, { Component } from 'react';
import { Text, Alert, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { styles } from './style';


export default class Loginscreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  go = () => {
           const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
               alert('valid');
           }
           else{
               alert();
           }
 
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.userHeading}>LogIn</Text>
         <Text style={styles.userSubbHeading}>Log in to save your shopping lists and access them from any device.</Text>
         <View style={styles.view}>
        <TextInput
          placeholder="Email Address"
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button style={styles.logBtn} mode='contained' onPress={() => navigation.navigate('Login')} >LogIn</Button>
        </View>

        <View style={styles.displayTxt}>
            <Text>Sign up</Text>
            <Text>|</Text>
            <Text>Forget Password?</Text>
        </View>
      </View>
    );
  }
}
