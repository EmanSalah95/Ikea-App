import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartProducts';
import { setFavItemAmount } from '../../store/actions/favourits';
import { styles } from './styles';

export default function FavoritesCard({ item, allInCart, setAllInCart }) {
  const productData = item.productData;
  const [quantityArr, setQuantityArr] = useState([]);
  const [selectedValue, setSelectedValue] = useState(1);

  const { cartProducts } = useSelector(state => state.cartProducts);
  let foundInCart = cartProducts?.find(i => i.id === item.id);

  const [inCart, setInCart] = useState(foundInCart ? true : false);

  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        productData: productData,
        PurchasedAmount: selectedValue,
      })
    );
    setInCart(true);
  };

  useEffect(() => {
    if (allInCart) {
      setInCart(true);
      // setAllInCart(false);
    }
  }, [allInCart]);

  useEffect(() => {
    const arr = [];
    for (const i of Array(productData.Quantity).keys()) {
      arr.push({ label: (i + 1).toString(), value: i + 1 });
    }
    setQuantityArr(arr);
  }, []);

  useEffect(() => {
    dispatch(setFavItemAmount({ id: item.id, PurchasedAmount: selectedValue }));
  }, [dispatch, selectedValue]);

  return (
    <View style={styles.favoritesCard}>
      <View style={styles.productData}>
        <Image
          source={{ uri: productData.Images[0] }}
          style={styles.imageCard}
        />
        <View>
          <Text style={styles.productName}>{productData.ProductName}</Text>
          <Text>{productData.Name}</Text>
          <Text>
            {productData.Material}, {productData.Color}
          </Text>
          <Text style={styles.productPrice}>EGP {productData.Price}</Text>
          <Text style={styles.productSalePrice}>
            Regular price EGP {productData.SalePrice}
          </Text>
          <View style={styles.pickerWrapper}>
            <RNPickerSelect
              style={styles.quantityPicker}
              onValueChange={value => {
                setSelectedValue(value);
                console.log(value);
              }}
              items={quantityArr}
              placeholder={{
                label: 'Select Quantity',
                value: selectedValue,
                color: '#0e2d64',
              }}
              value={selectedValue}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.addToBagButton}
        onPress={addCart}
        disabled={inCart}
      >
        <Text style={styles.boldUpperCaseText}>Add To Bag</Text>
      </TouchableOpacity>
    </View>
  );
}
