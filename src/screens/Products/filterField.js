import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../styles/filterStyles';
import Options from './options';
import { updateFilter } from '../../store/actions/productsList';
import i18n from 'i18n-js';
export default function FilterField({ title, options, objectOP, field }) {
  const [opened, setOpened] = useState(false);
  let { filters, filteredList } = useSelector((state) => state.products);
  const [selectedOPtion, setSelectedOp] = useState('');

  const dispatsh = useDispatch();

  const chooseOption = async (newValue) => {
    let updateFilters = {};

    setSelectedOp(newValue);
    if (title == i18n.t('Sort')) {
      updateFilters = { ...filters, Sort: newValue.sortBy };
    } else if (title == i18n.t('Price')) {
      updateFilters = { ...filters, Price: newValue.condition };
    }else{
      updateFilters = { ...filters, [field]: [field, '==', newValue] };
    }

    dispatsh(await updateFilter(updateFilters));
  };

  useEffect(() => {
    !filteredList && setSelectedOp('');
  }, [filteredList]);

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
            <Text style={styles.bold}>{title ? title : i18n.t('Filter')}</Text>
          <View>
            {!opened && selectedOPtion != '' && (
              <Text style={styles.grayText}>
                {!objectOP ? selectedOPtion : selectedOPtion?.label}
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
          objectOP={objectOP}
        />
      )}
    </View>
  );
}
