import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../styles/filterStyles';
import FilterField from './filterField';
import {capitalize} from '../../services/utilities'

export default function FilterMenu({ condition }) {
  let { allProducts } = useSelector((state) => state.products);
  const [materials, setMaterials] = useState(null);
  const [colors, setColors] = useState(null);

  const dispatch = useDispatch();

  const getUniqueFilters = () => {
    if (allProducts.length > 0) {
      let colors = [];
      let materials = [];
      allProducts.forEach((product) => {
        const { Color, Material } = product.data();

        let foundColor = colors.find((col) => col === Color);
        !foundColor && colors.push(Color);

        let foundMaterial = materials.find((mat) => mat.id === Material);
        !foundMaterial && Material != undefined && materials.push(Material);
      });

      console.log('all materials', materials);
      setMaterials(materials);
      setColors(colors);
      console.log('all colors', colors);
    }
  };

  useEffect(() => {
    console.log('effect................');
    getUniqueFilters();
  }, [allProducts]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <FilterField title='Sort'  />
        {colors&&<FilterField title='color' options={colors} />}
        {materials&&<FilterField title='material' options={materials}/>}
        <FilterField />
        <FilterField />
        <FilterField />
        <FilterField />
        <FilterField />
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <Button
          style={[styles.btn,styles.clear]}
          mode='outlined'
          onPress={() => console.log('Pressed')}
        >
         <Text style={{color:'#000'}}>Clear all</Text> 
        </Button>
        <Button
          style={[styles.btn,styles.view]}
          mode='contained'
          onPress={() => console.log('Pressed')}
        >
          View
        </Button>
      </View>
    </View>
  );
}
