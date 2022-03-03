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
