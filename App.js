import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { LogBox } from 'react-native';
import HomeStack from './src/homeStack';
import { useEffect, useState } from 'react';
import { updateUserStorageByID } from './src/services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [id, setID] = useState();
  useEffect(async()=>{
    const id = await AsyncStorage.getItem('UID');
    if (id != null) {
      setID(id)
      updateUserStorageByID(id);
    }
    else {
      setID(null)
    }
  },[])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack />
        {/* <Tabs /> */}
      </NavigationContainer>
    </Provider>
  );
}
LogBox.ignoreLogs([
  'Setting a timer',
  'Async Storage has been extracted from react-native core',
]);
