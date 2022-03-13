import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilters } from '../../store/actions/productsList';
import { styles } from '../../styles/filterStyles';
import FilterField from './filterField';
import i18n from 'i18n-js';

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
        const { Color, ColorAr , Material , MaterialAr ,Width,Length,Height} = product.data();

        let foundColor = colors.find((col) => col === (i18n.locale=='en'?Color:ColorAr));
        !foundColor && colors.push(i18n.locale=='en'?Color:ColorAr);

        let foundMaterial = materials.find((mat) => mat === (i18n.locale=='en'?Material:MaterialAr));
        !foundMaterial && Material != undefined && materials.push(i18n.locale=='en'?Material:MaterialAr);

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
        <FilterField title={i18n.t('Sort')} options={sortOptions} objectOP />
        {colors && <FilterField title={i18n.t('Color')} options={colors} field={i18n.locale=='en'?'Color':'ColorAr'}/>}
        {materials && <FilterField title={i18n.t('Material')} options={materials} field={i18n.locale=='en'?'Material':'MaterialAr'}/>}
        <FilterField title={i18n.t('Price')} options={priceOptions} objectOP />
        {widthes && <FilterField title={i18n.t('Width')} options={widthes} field='Width'/>}
        {lengthes && <FilterField title={i18n.t('Length')} options={lengthes} field='Length'/>}
        {heights && <FilterField title={i18n.t('Height')} options={heights} field='Height'/>}

      </ScrollView>

      <View style={styles.buttonsContainer}>
        <Button
          style={[styles.btn, styles.clear]}
          mode='outlined'
          onPress={() => dispatch(clearFilters())}
        >
          <Text style={{ color: '#000' }}>{i18n.t('ClearAll')}</Text>
        </Button>
        <Button
          style={[styles.btn, styles.view]}
          mode='contained'
          onPress={() => console.log('Pressed')}
        >
          {`${i18n.t('View')} ${filteredList?.length > 0 ? filteredList.length : ''}`}
        </Button>
      </View>
    </View>
  );
}

const sortOptions = [
  {
    label: i18n.t('Newest'),
    sortBy: ['CreatedAt', 'desc'],
  },
  {
    label: i18n.t('PriceLowToHigh'),
    sortBy: ['Price', 'asc'],
  },
  {
    label: i18n.t('PriceHighToLow'),
    sortBy: ['Price', 'desc'],
  },
  {
    label: i18n.t('Name'),
    sortBy: ['Name', 'asc'],
  },{
    label: i18n.t('Width'),
    sortBy: ['Width', 'asc'],
  },{
    label: i18n.t('Length'),
    sortBy: ['Length', 'asc'],
  },
];

const priceOptions = [
  {
    label: i18n.t('LessThan100'),
    condition: ['Price','<=', 100],
  },{
    label: i18n.t('LessThan250'),
    condition: ['Price','<=', 250],
  },{
    label: i18n.t('LessThan500'),
    condition: ['Price','<=', 500],
  },{
    label: i18n.t('LessThan1000'),
    condition: ['Price','<=', 1000],
  },{
    label: i18n.t('LessThan5000'),
    condition: ['Price','<=', 5000],
  },{
    label: i18n.t('LessThan10000'),
    condition: ['Price','<=', 10000],
  },
  


];
