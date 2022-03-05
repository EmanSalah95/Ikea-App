import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

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
          <Text style={{ color: '#fff', fontSize: 25 }}>Select List</Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#f4f8f8',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: '#0051ba', fontWeight: 'bold' }}>
              Shopping list
            </Text>
            <Text style={{ color: '#0051ba', fontWeight: 'bold' }}>0</Text>
          </View>
          <View style={{ margin: 20, flexDirection: 'row' }}>
            <FontAwesome
              name='warning'
              color='#8a8a8c'
              size={15}
              style={{ marginRight: 10 }}
            />
            <Text style={{ marginRight: 10 }}>
              This list will be merged with an existing one when you log in with
              your IKEA account
            </Text>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <View style={{ padding: 15 }}>
          <Text style={{ paddingBottom: 15, paddingRight: 8 }}>
            Log in to access all your shopping lists
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#0051ba',
              padding: 18,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>LOG IN</Text>
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
