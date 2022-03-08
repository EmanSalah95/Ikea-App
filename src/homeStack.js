import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './screens/Product/product';
import Loginscreen from './screens/User/LogIn';
import SignUpScreen from './screens/User/SignUp';
import SignUpForm from './screens/User/SignUpForm';
import {ProfileSettings} from './screens/User/setting';
import Tabs from './tabs';
import { w } from './constants/dimentions';

import { ProductDetails } from './screens/Product/productDetails';
import SearchModalProvider from './context';
import ProductsDrawer from './productDrawer';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <SearchModalProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            maxWidth: w * 0.6,
            headerTitleAlign: 'center',
          },
        }}
      >
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='Login' component={Loginscreen} />
        <Stack.Screen name='Sign' component={SignUpScreen} />
        <Stack.Screen name='SignForm' component={SignUpForm} />
        <Stack.Screen
          name='Product'
          component={Product}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name='Products'
          component={ProductsDrawer}
        />
        <Stack.Screen
          name='ProfileSettings'
          component={ProfileSettings}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </SearchModalProvider>
  );
}
