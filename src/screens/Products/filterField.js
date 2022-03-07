import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../styles/filterStyles';
import { capitalize } from '../../services/utilities';

export default function FilterField({ title, options }) {
  const [opened, setOpened] = useState(false);
  const [selectedOPtion, setSelectedOp] = useState('');

  return (
    <TouchableHighlight
      underlayColor='#DDD'
      style={styles.field}
      onPress={() => {
        setOpened(!opened);
      }}
    >
      <View style={styles.fieldRow}>
        <View>
          <Text>{title ? capitalize(title) : 'Sort'}</Text>
          <Text>BestMatch</Text>
        </View>

        <MaterialIcons name='add' color={'black'} size={26} />
      </View>
    </TouchableHighlight>
  );
}
