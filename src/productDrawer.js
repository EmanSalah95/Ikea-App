import { createDrawerNavigator } from '@react-navigation/drawer';

import { Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/native';
import Products from './screens/Products/Products';
import FilterMenu from './screens/Products/filterMenu';
import i18n from 'i18n-js';

const Drawer = createDrawerNavigator();

const ProductsDrawer = ({ navigation, route }) => {
  const screenOptions = {
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <AntDesign
          name='filter'
          size={25}
          color={'gray'}
          style={{ marginStart:10}}
        />
      </TouchableOpacity>
    ),
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <FilterMenu {...props} condition={route.params.condition} se />
      )}
    >
      <Drawer.Screen
        name='ProductsDrawer'
        component={Products}
        initialParams={{ routeParams: route.params }}
        options={screenOptions}
      />
    </Drawer.Navigator>
  );
};

export default ProductsDrawer;
