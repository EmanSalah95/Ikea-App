import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector ,useDispatch } from 'react-redux';

export default function FilterMenu({condition}) {
  let { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const getUniqueFilters=()=>{
    if (allProducts.length>0) {
    }
  }


  useEffect(() => {
   console.log('effect................');
  }, [allProducts]);
  return (
    <View>
      <Button
        icon='camera'
        mode='contained'
        onPress={() => {}}
      >
        test
      </Button>
    </View>
  );
}
