import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './src/tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Provider, useSelector } from 'react-redux';
import store from './src/store/store';
import { LogBox } from 'react-native';
import HomeStack from './src/homeStack';
import Checkout from './src/screens/Checkout/checkout';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
import { useEffect, useState } from 'react';
import { updateUserStorageByID } from './src/services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js';
import Loading from './src/components/Loading';

export default function App() {
  const [id, setID] = useState();
  const [updateLang,setUpdateLang]=useState(false);

  useEffect(async () => {
    const id = await AsyncStorage.getItem('UID');
    if (id != null) {
      setID(id);
      updateUserStorageByID(id);
    } else {
      setID(null);
    }
    AsyncStorage.getItem("language")
			.then(language => {
        if(language==null)
				{
          i18n.locale = 'en';
        }
        else{
          i18n.locale = language;
        }
			})
      .then(()=>{
        setUpdateLang(true);
      })
  }, []);
  useEffect(()=>{
    console.log(updateLang)
  },[updateLang])
  return (
    <>
    {!updateLang? <Loading/>
    :
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='HomeStack'
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Checkout'
            component={Checkout}
            options={({ navigation }) => ({
              title: i18n.t('Checkout'),
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 16 },
              headerLeft: () => (
                <AntDesign
                  name='close'
                  size={25}
                  color='#000'
                  onPress={() => navigation.goBack()}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    }
    </>
  );
}
LogBox.ignoreLogs([
  'Setting a timer',
  'Async Storage has been extracted from react-native core',
]);
