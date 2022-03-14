import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import { getCollection } from '../../services/firebase';
// import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import i18n from 'i18n-js';

export default function SubCatSearch({ navigation, item }) {


  return (
    <View style={{ backgroundColor: '#F1EAF1', padding: 15, margin: 5 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Products', {
            screenTitle: i18n.locale=='en'?item.data().Name:item.data().NameAr,
            condition: ['SubCategory', '==', item.id],
          });
        }}
      >
        <View>
          <Image
            source={{ uri: item.data().Image }}
            style={{ height: 120, width: 150 }}
          />
          <Text style={{ fontSize: 15, marginTop: 7 }}>{i18n.locale=='en'?item.data().Name:item.data().NameAr}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
