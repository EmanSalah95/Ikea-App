import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { styles } from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { addToFav, removeFromFav } from '../../store/actions/favourits';
import { addToCart } from '../../store/actions/cartProducts';
import {
  addCartItemToUser,
  addFavItemsToUser,
  removeFavItemFromUser,
} from '../../services/firebase';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js';

export default function ProductCard({ navigation, item, horizontal }) {
  const { favourits } = useSelector(state => state.favourits);
  const { cartProducts } = useSelector(state => state.cartProducts);

  let found = favourits?.find(i => i.id === item.id);
  let foundInCart = cartProducts?.find(i => i.id === item.id);

  const [isFavourite, setIsFavourite] = useState(
    favourits?.find(i => i.id === item.id) ? true : false
  );
  const [inCart, setInCart] = useState(
    cartProducts?.find(i => i.id === item.id) ? true : false
  );
  const dispatch = useDispatch();

  const toggleFavourite = async () => {
    console.log(favourits);

    dispatch(
      favourits?.find(i => i.id === item.id)
        ? removeFromFav(item.id)
        : addToFav({ id: item.id, productData: item.data() })
    );

    const shoppingListInStorage = await AsyncStorage.getItem('shopping-list');

    if (shoppingListInStorage) {
      const shoppingList = JSON.parse(shoppingListInStorage);
      const items = [...shoppingList.items];

      if (favourits?.find(i => i.id === item.id)) {
        // const filteredItems = items.filter(
        //   itemFromStorage => itemFromStorage.id !== item.id
        // );

        const itemsObj = { items: newCartProduct };
        await AsyncStorage.setItem('shopping-list', JSON.stringify(itemsObj));
      } else {
        items.push(item.data());
        const itemsObj = { items: items };
        await AsyncStorage.setItem('shopping-list', JSON.stringify(itemsObj));
      }

      console.log('items in storage');
      console.log(shoppingList.items.length);
      // console.log('Items in storage');
      // const itemsss = await AsyncStorage.getItem('shopping-list');
      // console.log(JSON.parse(itemsss).items.length);
    } else {
      const items = [];
      items.push(item.data());
      const itemsObj = { items: items };
      await AsyncStorage.setItem('shopping-list', JSON.stringify(itemsObj));

      // console.log('Items in storage');
      // const itemsss = await AsyncStorage.getItem('shopping-list');
      // console.log(JSON.parse(itemsss).items.length);
    }

    // addFavItemsToUser(localStorage.getItem('UID'), item.id);
    const localID = await AsyncStorage.getItem('UID');
    if (localID != null) {
      favourits?.find(i => {
        console.log('i.id ' + i.id);
        console.log('item.id ' + item.id);
        return i.id === item.id;
      })
        ? removeFavItemFromUser(localID, item.id)
        : addFavItemsToUser(localID, item.id);
    }
    setIsFavourite(!favourits?.find(i => i.id === item.id));
    console.log('cart', cartProducts.length);
  };

  const addCart = async () => {
    dispatch(
      addToCart({ id: item.id, productData: item.data(), PurchasedAmount: 1 })
    );
    const localID = await AsyncStorage.getItem('UID');
    if (localID != null) {
      addCartItemToUser(localID, item.id);
    }
    setInCart(true);
  };

  const {
    Name,
    NameAr,
    ProductName,
    Price,
    SalePrice,
    Width,
    Length,
    Images,
    Height,
    Thickness,
    Quantity,
  } = item.data();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({
          name: 'Product',
          params: { id: item.id },
        });
      }}
    >
      <Card
        style={
          horizontal ? styles.prodCardH : [styles.prodCardH, styles.prodCardV]
        }
      >
        <TouchableOpacity style={styles.heart} onPress={toggleFavourite}>
          <FontAwesome
            name={favourits?.find(i => i.id === item.id) ? 'heart' : 'heart-o'}
            color={'gray'}
            size={24}
          />
        </TouchableOpacity>

        <Image
          style={styles.prodCardImg}
          source={{
            uri: Images
              ? Images[0]
              : 'https://timeoutcomputers.com.au/wp-content/uploads/2016/12/noimage.jpg',
          }}
          resizeMode='contain'
        />

        <Text style={[styles.boldTitle, styles.blueText]}>
          {i18n.t('IKEAfamilyPrice')}
        </Text>
        <Text style={styles.boldTitle}>{ProductName}</Text>
        <Text style={styles.grayText}>{i18n.locale=='en'?Name:NameAr}</Text>
        {(Width || Length) && (
          <Text style={styles.grayText}>
            {Width}{' '}
            {Length
              ? (Width && 'x ') + Length
              : Height
              ? 'x ' + Height
              : Thickness
              ? 'x ' + Thickness
              : ''}{' '}
            {i18n.t('CM')}
          </Text>
        )}

        <View style={styles.marV}>
          <Text style={styles.boldTitle}>{`${i18n.t('EGP')} ${Price}`}</Text>
          {SalePrice && (
            <Text
              style={styles.grayText}
            >{i18n.t('RegularPrice')} {i18n.t('EGP')} {SalePrice}</Text>
          )}
          {Quantity !== 0 && !cartProducts?.find(i => i.id === item.id) && (
            <TouchableOpacity
              style={horizontal ? styles.cartIcon : styles.cartIconV}
              onPress={addCart}
            >
              <MaterialIcons name='shopping-basket' color='#fff' size={22} />
            </TouchableOpacity>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
}
