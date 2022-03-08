import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import { styles } from '../../styles/filterStyles';
import { capitalize } from '../../services/utilities';

export default function Options({
  options,
  selectedOPtion,
  setSelectedOp,
  isSort,
}) {
  const lastOption = options.length - 1;

  const Option = ({ item, index, isSort }) => {
    //   sortOptions are objects ,others array
    return (
      <TouchableHighlight
        underlayColor='#DDD'
        onPress={() => setSelectedOp(item)}
      >
        <View
          style={[
            styles.optionRow,
            index == lastOption ? styles.borderBottom : {},
          ]}
        >
          <Text style={styles.optionText}>
            {capitalize(!isSort ? item : item.label)}
          </Text>
          <RadioButton value={item} style={styles.radio} color='#000' />
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View>
      <RadioButton.Group onValueChange={setSelectedOp} value={selectedOPtion}>
        {options.map((item, index) => (
          <Option item={item} key={index} index={index} isSort={isSort} />
        ))}
      </RadioButton.Group>
    </View>
  );
}
