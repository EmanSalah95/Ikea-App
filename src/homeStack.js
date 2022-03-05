import Home from './screens/Home/home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './screens/Product.js/product';
import Products from './screens/Products/Products';
import Tabs from './tabs';
import { w } from './constants/dimentions';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontSize: 18,
          maxWidth: w * 0.6,
          headerTitleAlign: 'center',
        },
      }}
    >
      <Stack.Screen name='Home' component={Tabs} />
      <Stack.Screen name='Product' component={Product} />
      <Stack.Screen
        name='Products'
        component={Products}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
