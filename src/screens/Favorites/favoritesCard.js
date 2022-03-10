import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartProducts';
import { removeFromFav, setFavItemAmount } from '../../store/actions/favourits';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addCartItemToUser } from '../../services/firebase';

export default function FavoritesCard({ item, allInCart, setAllInCart }) {
  const productData = item.productData;
  const [quantityArr, setQuantityArr] = useState([]);
  const [selectedValue, setSelectedValue] = useState(1);

  const { cartProducts } = useSelector(state => state.cartProducts);
  // let foundInCart = cartProducts?.find(i => i.id === item.id);

  // const [inCart, setInCart] = useState(foundInCart ? true : false);

  const dispatch = useDispatch();

  const addCart = async () => {
    dispatch(
      addToCart({
        id: item.id,
        productData: productData,
        PurchasedAmount: selectedValue,
      })
    );
    // setInCart(true);

    const localID = await AsyncStorage.getItem('UID');
    localID && addCartItemToUser(localID, item.id);
  };

  useEffect(() => {
    if (allInCart) {
      // setInCart(true);
      // setAllInCart(false);
    }
  }, [allInCart]);

  useEffect(() => {
    const arr = [{ label: '0', value: 0 }];
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
                if (value === 0 && item.id) {
                  console.log('alert');
                  return Alert.alert(
                    '',
                    'Do you want to remove this product?',
                    [
                      {
                        text: 'No',
                        onPress: () => {
                          setSelectedValue(1);
                        },
                      },
                      {
                        text: 'Yes',
                        onPress: () => {
                          dispatch(removeFromFav(item.id));
                        },
                      },
                    ]
                  );
                }
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
        disabled={cartProducts?.find(i => i.id === item.id)}
      >
        <Text style={styles.boldUpperCaseText}>Add To Bag</Text>
      </TouchableOpacity>
    </View>
  );
}
