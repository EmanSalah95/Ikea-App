import Home from './screens/Home/home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './screens/Product.js/product';
import Loginscreen from './screens/User/LogIn';
import SignUpScreen from './screens/User/SignUp';
import SignUpForm from './screens/User/SignUpForm';
import Products from './screens/Products/Products';
import Tabs from './tabs';
import { Text, TouchableOpacity } from 'react-native';
import { ProductDetails } from './screens/Product.js/productDetails';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const { favourits } = useSelector((state) => state.favourits);
// let found = favourits?.find((i) => i.id === item.id);
// const [isFavourite, setIsFavourite] = useState(found ? true : false);
// const dispatch = useDispatch();

const toggleFavourite = () => {
  // dispatch(
  //   isFavourite
  //     ? removeFromFav(item.id)
  //     : addToFav({ id: item.id, productData: item.data() })
  // );
};
export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 18,
        },
      }}
    >
      {/* <Stack.Screen name='Home' component={Home} /> */}
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
      <Stack.Screen name='Products' component={Products} />
    </Stack.Navigator>
  );
}
