import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home/home';
import Favourits from './screens/Favourits/favourits';
import Search from './screens/Search/Search';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './screens/Product.js/product';
import Loginscreen from './screens/User/LogIn';
import SignUpScreen from './screens/User/SignUp'
import SignUpForm from './screens/User/SignUpForm'


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Product' component={Product} />
      <Stack.Screen name='Login' component={Loginscreen} />
      <Stack.Screen name='Sign' component={SignUpScreen} />
      <Stack.Screen name='SignForm' component={SignUpForm} />
    </Stack.Navigator>
  );
}


