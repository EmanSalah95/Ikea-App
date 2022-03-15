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

// import { OrdersHistory } from './screens/User/OrdersHistory/ordersHistory';
import { useEffect } from 'react';
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
import { OrdersTabs } from './screens/User/OrdersHistory/OrdersTabs';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartProducts.cartProducts);
  const favItems = useSelector(state => state.favourits.favourits);
  const lang = useSelector(state=>state.language.language);

  useEffect(async () => {
    const id = await AsyncStorage.getItem('UID');
    if (id != null) {
      updateUserStorageByID(id);
      // Handle Add toCart
      getCartItemsFromUser(id)
        .then(productIDs => {
          // console.log(productIDs);
          productIDs &&
            productIDs.forEach(productID => {
              getProductDataById(productID)
                .then(productData => {
                  // if there are cart items that already exist in store don't dispatch again and just skip it
                  if (!cartItems.some(item => item.id === productID))
                    // use this condition if the navbar will be rendered again, but as long as it is never rendered again this condition won't be needed
                    dispatch(
                      addToCart({
                        id: productID,
                        productData,
                        PurchasedAmount: 1,
                      })
                    );
                })
                .catch(err => console.log(err));
            });
        })
        .catch(err => console.log(err));

      // Handle Add to Favourite
      getFavItemsFromUser(id)
        .then(productIDs => {
          // console.log(productIDs);
          productIDs &&
            productIDs.forEach(productID => {
              getProductDataById(productID)
                .then(productData => {
                  // if there are cart items that already exist in store don't dispatch again and just skip it
                  if (!favItems.some(item => item.id === productID))
                    // use this condition if the navbar will be rendered again, but as long as it is never rendered again this condition won't be needed
                    dispatch(addToFav({ id: productID, productData }));
                })
                .catch(err => console.log(err));
            });
        })
        .catch(err => console.log(err));
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
          name='OrdersTabs'
          component={OrdersTabs}
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
