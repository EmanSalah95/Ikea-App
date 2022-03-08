import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../styles/filterStyles';
import Options from './options';
import { updateFilter } from '../../store/actions/productsList';

export default function FilterField({ title, options, sort }) {
  const [opened, setOpened] = useState(false);
  const [selectedOPtion, setSelectedOp] = useState('');
  let { filters } = useSelector((state) => state.products);
  const dispatsh = useDispatch();

  const chooseOption = async (newValue) => {
    let updateFilters = {};

    setSelectedOp(newValue);
    if (title == 'Sort') {
      updateFilters = { ...filters, Sort: newValue.sortBy };
    } else {
      updateFilters = { ...filters, [title]: [title, '==', newValue] };
    }

    dispatsh(await updateFilter(updateFilters));
  };

  return (
    <View>
      <TouchableHighlight
        underlayColor='#DDD'
        style={styles.field}
        onPress={() => {
          setOpened(!opened);
        }}
      >
        <View style={[styles.fieldRow, opened ? {} : styles.borderBottom]}>
          <View>
            <Text style={styles.bold}>{title ? title : 'filter'}</Text>
            {!opened && selectedOPtion != '' && (
              <Text style={styles.grayText}>
                {!sort ? selectedOPtion : selectedOPtion?.label}
              </Text>
            )}
          </View>

          <MaterialIcons name='add' color={'black'} size={26} />
        </View>
      </TouchableHighlight>
      {opened && options && (
        <Options
          options={options}
          selectedOPtion={selectedOPtion}
          setSelectedOp={chooseOption}
          isSort={sort}
        />
      )}
    </View>
  );
}
