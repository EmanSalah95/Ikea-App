import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/tabs';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { LogBox } from 'react-native';
import HomeStack from './src/homeStack';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack />
        {/* <Tabs /> */}

      </NavigationContainer>
    </Provider>
  );
}
LogBox.ignoreLogs(['Setting a timer','Async Storage has been extracted from react-native core']);

