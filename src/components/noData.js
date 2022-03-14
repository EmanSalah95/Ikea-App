import React from 'react';
import { View, Image, Text } from 'react-native';
import { Colors } from '../constants/colors';
import { h, w } from '../constants/dimentions';
import { styles } from '../screens/Favorites/styles';
import i18n from 'i18n-js';

export default function NoData() {
  return (
    <View
      style={[styles.emptyContainer, { flex: 1, backgroundColor: Colors.mint,height:h*0.9}]}
    >
      <Image
        source={require('./../assets/noCartItems.jpg')}
        style={{ width: w * 0.5, height: w * 0.5 }}
      />

      <Text style={styles.waitingText}>
          {i18n.t('NoData')}
      </Text>
    </View>
  );
}
