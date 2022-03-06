import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { styles } from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { addToFav, removeFromFav } from '../../store/actions/favourits';
import { addToCart } from '../../store/actions/cartProducts';
import { addFavItemsToUser } from '../../services/firebase';
import { useState } from 'react';

export default function ProductCard({ navigation, item ,horizontal }) {
  const { favourits } = useSelector((state) => state.favourits);
  const { cartProducts } = useSelector((state) => state.cartProducts);

  let found = favourits?.find((i) => i.id === item.id);
  let foundInCart = cartProducts?.find((i) => i.id === item.id);

  const [isFavourite, setIsFavourite] = useState(found ? true : false);
  const [inCart, setInCart] = useState(foundInCart ? true : false);
  const dispatch = useDispatch();

  const toggleFavourite = () => {
    dispatch(
      isFavourite
        ? removeFromFav(item.id)
        : addToFav({ id: item.id, productData: item.data() })
    );
    // addFavItemsToUser(localStorage.getItem('UID'), item.id);
    setIsFavourite(!isFavourite);
    console.log('cart', cartProducts.length);
  };

  const addCart = () => {
    dispatch(
      addToCart({ id: item.id, productData: item.data(), PurchasedAmount: 1 })
    );
    setInCart(true);
    // addCartItemToUser(localStorage.getItem('UID'), item.id);
  };

  const { Name, ProductName, Price, SalePrice, Width, Length, Images, Height } =
    item.data();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({
          name: 'Product',
          params: { id: item.id },
        });
      }}
    >
      <Card style={horizontal? styles.prodCardH:[styles.prodCardH,styles.prodCardV]}>
        <TouchableOpacity style={styles.heart} onPress={toggleFavourite}>
          <FontAwesome
            name={isFavourite ? 'heart' : 'heart-o'}
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
          IKEA Family price
        </Text>
        <Text style={styles.boldTitle}>{ProductName}</Text>
        <Text style={styles.grayText}>{Name}</Text>
        <View style={styles.marV}>
          
          <Text style={styles.boldTitle}>{`EGP ${Price}`}</Text>
          {SalePrice && (
            <Text
              style={styles.grayText}
            >{`regular price EGP${SalePrice}`}</Text>
          )}
          {!cartProducts?.find((i) => i.id === item.id) && (
            <TouchableOpacity style={horizontal? styles.cartIcon:styles.cartIconV} onPress={addCart}>
              <MaterialIcons name='shopping-basket' color='#fff' size={22} />
            </TouchableOpacity>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
}
