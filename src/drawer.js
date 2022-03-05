import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './screens/Favorites/favorites';
import DrawerContent from './screens/Favorites/drawerContent';

const Drawer = createDrawerNavigator();

export default function FavoritesDrawer() {
  return (
    <>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name='Favorites'
          component={Favorites}
          options={{
            title: 'Shopping List',
            headerTitleStyle: {
              textTransform: 'uppercase',
              fontSize: 16,
              fontWeight: 'bold',
            },
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
