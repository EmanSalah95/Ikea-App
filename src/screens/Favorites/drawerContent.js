import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import i18n from 'i18n-js'
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { h, w } from '../../constants/dimentions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function DrawerContent() {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View
          style={{
            backgroundColor: '#0051ba',
            height: h * 0.2,
            justifyContent: 'flex-end',
            paddingLeft: 15,
            paddingBottom: 20,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 25 }}>{i18n.t('SelectList')}</Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#f4f8f8',
              flexDirection: i18n.locale=='en' ? 'row' : 'row-reverse',
              justifyContent: 'space-between',
              padding: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: '#0051ba', fontWeight: 'bold' }}>
              {i18n.t('ShoppingFav')}
            </Text>
            <Text style={{ color: '#0051ba', fontWeight: 'bold' }}>0</Text>
          </View>
          <View style={{ margin: 20, flexDirection: i18n.locale=='en' ? 'row' : 'row-reverse' }}>
            <FontAwesome
              name='warning'
              color='#8a8a8c'
              size={15}
              style={{ marginRight: i18n.locale=='en' ? 10 : 0, marginLeft: i18n.locale=='en' ? 0 : 10 }}
            />
            <Text style={{ marginRight: i18n.locale=='en' ? 10 : 0, marginLeft: i18n.locale=='en' ? 0 : 10,textAlign: i18n.locale=='en' ? 'left' : 'right' }}>
              {i18n.t('DrawerNote')}
            </Text>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <View style={{ padding: 15 }}>
          <Text style={{ paddingBottom: 15, paddingRight: 8, textAlign: i18n.locale=='en' ? 'left' : 'right' }}>
            {i18n.t('LoginShoppingList')}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#0051ba',
              padding: 18,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{i18n.t('LOGIN')}</Text>
          </TouchableOpacity>
        </View>
      </Drawer.Section>
    </View>
  );
}

export const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});
