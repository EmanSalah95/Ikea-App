import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import i18n from 'i18n-js';
import { CompletedOrders } from './completedOrders';
import { PendingOrders } from './pendingOrders';

const Tab = createMaterialTopTabNavigator();

export const OrdersTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={i18n.t('Delivered')} component={CompletedOrders} />
      <Tab.Screen name={i18n.t('Pending')} component={PendingOrders} />
    </Tab.Navigator>
  );
}