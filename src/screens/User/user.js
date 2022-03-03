import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './style';

export default function User() {
  return (
    <View style={styles.container}>
      <View style={styles.firstSec}> 
        <Text style={styles.userHeading}>PROFILE</Text>
        <Text style={styles.userSubHeading}>Log in to save your shopping lists</Text>
        <Text style={styles.userSubHeading}>and access them from any device.</Text>
        <Button style={styles.logBtn} mode='contained' >Login</Button>
        <Button style={styles.signBtn} mode='contained' >Sign Up</Button>
        <Text style={styles.txtQues}>Forget Password?</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.secondSec}>
        <Text >Settings</Text>
        <View style={styles.line}></View>
        <Text >Information</Text>
      </View>
    </View>
  );
}



// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from "./LogIn"
// import HomeScreen from "./Home"
// import SignUpScreen from "./SignUp"
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
// import "firebase/auth";
// import app from '../../Firebase/fireStoreAuthConfig'

// const Stack = createNativeStackNavigator();

// function User() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   const firebaseConfig = {
//     apiKey: "AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4",
//     authDomain: "ikea-8dc72.firebaseapp.com",
//     projectId: "ikea-8dc72",
//     storageBucket: "ikea-8dc72.appspot.com",
//     messagingSenderId: "293717792182",
//     appId: "1:293717792182:web:f170e2edfe2370c9769d17"
//   };

//   // const app = initializeApp(firebaseConfig);

//   // //Checking if firebase has been initialized
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   } else {
//     firebase.app();
//   }

//   firebase.auth().onAuthStateChanged((user) => {
//     if (user != null) {
//       setIsLoggedIn(true)
//     } else {
//       setIsLoggedIn(false);
//     }
//   });



//   return (
//     <NavigationContainer>
//       {isLoggedIn ? <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//       </Stack.Navigator> :
//         <Stack.Navigator>
//           <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//           <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
//         </Stack.Navigator>}
//     </NavigationContainer>
//   );
// }

// export default User;
