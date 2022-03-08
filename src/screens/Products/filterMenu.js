import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilters } from '../../store/actions/productsList';
import { styles } from '../../styles/filterStyles';
import FilterField from './filterField';

export default function FilterMenu() {
  let { allProducts, filteredList } = useSelector((state) => state.products);
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

      materials.length > 0 && setMaterials(materials);
      setColors(colors);
    }
  };

  useEffect(() => {
    getUniqueFilters();
  }, [allProducts]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <FilterField title='Sort' options={sortOptions} sort />
        {colors && <FilterField title='Color' options={colors} />}
        {materials && <FilterField title='Material' options={materials} />}
        <FilterField />
        <FilterField />
        <FilterField />
        <FilterField />
        <FilterField />
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <Button
          style={[styles.btn, styles.clear]}
          mode='outlined'
          onPress={() => dispatch(clearFilters())}
        >
          <Text style={{ color: '#000' }}>Clear all</Text>
        </Button>
        <Button
          style={[styles.btn, styles.view]}
          mode='contained'
          onPress={() => console.log('Pressed')}
        >
          {`View ${filteredList?.length > 0 ? filteredList.length : ''}`}
        </Button>
      </View>
    </View>
  );
}

const sortOptions = [
  {
    label: 'Newest',
    sortBy: ['CreatedAt', 'desc'],
  },
  {
    label: 'Price: low to high',
    sortBy: ['Price', 'asc'],
  },
  {
    label: 'Price: high to low',
    sortBy: ['Price', 'desc'],
  },
  {
    label: 'Name',
    sortBy: ['Name', 'asc'],
  },
];
