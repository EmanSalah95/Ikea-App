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
  const [widthes,setWidthes]=useState(null);
  const [lengthes,setLengthes]=useState(null);
  const [heights,setHeights]=useState(null);

  const dispatch = useDispatch();

  const getUniqueFilters = () => {
    if (allProducts.length > 0) {
      let colors = [];
      let materials = [];
      let widthes = [];
      let lengthes = [];
      let heights = [];
      allProducts.forEach((product) => {
        const { Color, Material ,Width,Length,Height} = product.data();

        let foundColor = colors.find((col) => col === Color);
        !foundColor && colors.push(Color);

        let foundMaterial = materials.find((mat) => mat === Material);
        !foundMaterial && Material != undefined && materials.push(Material);

        let foundWidth= widthes.find((wid) => wid === Width);
        !foundWidth && Width != undefined && widthes.push(Width);
        
        let foundLength= lengthes.find((len) => len === Length);
        !foundLength && Length != undefined && lengthes.push(Length);
        
        let foundHeight= heights.find((height) => height === Height);
        !foundHeight && Height != undefined && heights.push(Height);

      });

      materials.length > 0 && setMaterials(materials);
      widthes.length > 0 && setWidthes(widthes);
      colors.length > 0 && setColors(colors);
      lengthes.length > 0 && setLengthes(lengthes);
      heights.length > 0 && setHeights(heights);
    }
  };

  useEffect(() => {
    getUniqueFilters();
  }, [allProducts]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>

        {/* objectOP prop mean every option item is object */}
        <FilterField title='Sort' options={sortOptions} objectOP />
        {colors && <FilterField title='Color' options={colors} />}
        {materials && <FilterField title='Material' options={materials} />}
        <FilterField title='Price' options={priceOptions} objectOP/>
        {widthes && <FilterField title='Width' options={widthes} />}
        {lengthes && <FilterField title='Length' options={lengthes} />}
        {heights && <FilterField title='Height' options={heights} />}

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
  },{
    label: 'Width',
    sortBy: ['Width', 'asc'],
  },{
    label: 'Length',
    sortBy: ['Length', 'asc'],
  },
];

const priceOptions = [
  {
    label: 'less than 100',
    condition: ['Price','<=', 100],
  },{
    label: 'less than 250',
    condition: ['Price','<=', 250],
  },{
    label: 'less than 500',
    condition: ['Price','<=', 500],
  },{
    label: 'less than 1000',
    condition: ['Price','<=', 1000],
  },{
    label: 'less than 5000',
    condition: ['Price','<=', 5000],
  },{
    label: 'less than 10000',
    condition: ['Price','<=', 10000],
  },
  


];
