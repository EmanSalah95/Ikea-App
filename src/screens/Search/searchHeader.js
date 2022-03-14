import React from 'react'
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import './searchStyle.js';
import { styles } from './searchStyle.js';
import { useContext } from 'react';
import { ModalContext } from '../../context';
import i18n from 'i18n-js';

export default function SearchHeader() {
  const { isSearchVisible, setSearchVisible } = useContext(ModalContext);

  return (
    <>
      <Text style={styles.text}>{i18n.t('Search')}</Text>

      <View style={styles.inputHead}>
        <TouchableHighlight
          underlayColor='#DDD'
          style={styles.searchIcon}
          onPress={() => setSearchVisible(true)}
        >
          <MaterialIcons name='search' color='#ccc' size={20} style={styles.icon} />
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#DDD'
          style={styles.searchText}
          onPress={() => setSearchVisible(true)}
        >

          <TextInput
            style={styles.input}
            placeholder={i18n.t('WhatAreYouLookingFor')}
          />
        </TouchableHighlight>
      </View>

      <View style={styles.proShow}>
        <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }}>{i18n.t('BrowseProducts')}</Text>
        <Text style={{ color: '#ccc', margin: 7, fontSize: 17 }}>{i18n.t('ViewAll')}</Text>

      </View>
    </>

  )
}




