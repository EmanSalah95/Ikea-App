import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './screens/Product/product';
import Loginscreen from './screens/User/LogIn';
import SignUpScreen from './screens/User/SignUp';
import SignUpForm from './screens/User/SignUpForm';
import { ProfileSettings } from './screens/User/setting';
import Tabs from './tabs';
import { w } from './constants/dimentions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductDetails } from './screens/Product/productDetails';
import SearchModalProvider from './context';
import ProductsDrawer from './productDrawer';
import SnackBar from './components/SnackBar';

import { OrdersHistory } from './screens/User/OrdersHistory/ordersHistory';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCartItemsFromUser,
  getFavItemsFromUser,
  getProductDataById,
  updateUserStorageByID,
} from './services/firebase';
import { addToCart } from './store/actions/cartProducts';
import { addToFav } from './store/actions/favourits';
import i18n from 'i18n-js';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartProducts.cartProducts);
  const favItems = useSelector(state => state.favourits.favourits);
  const lang = useSelector(state=>state.language.language);

  const getItemsFromUser = async (cb, items, addFn) => {
    const uid = await AsyncStorage.getItem('UID');

    if (uid) {
      updateUserStorageByID(uid);
      cb(uid).then(productIDs => {
        productIDs &&
          productIDs.forEach(productID => {
            getProductDataById(productID).then(productData => {
              if (!items.some(item => item.id === productID))
                dispatch(
                  addFn({ id: productID, productData, PurchasedAmount: 1 })
                );
            });
          });
      });
    }
  };

  useEffect(async () => {
    const uid = await AsyncStorage.getItem('UID');

    if (uid) {
      getItemsFromUser(getCartItemsFromUser, cartItems, addToCart);
      getItemsFromUser(getFavItemsFromUser, favItems, addToFav);
    }
  }, []);

  useEffect(()=>{},[lang])

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
        <Stack.Screen name='Products' component={ProductsDrawer} />
        <Stack.Screen
          name='ProfileSettings'
          component={ProfileSettings}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name='OrdersHistory'
          component={OrdersHistory}
          options={{
            headerShown: true,
            title:i18n.t('OrderHistory')
          }}
        />
      </Stack.Navigator>
      <SnackBar />
    </SearchModalProvider>
  );
}
