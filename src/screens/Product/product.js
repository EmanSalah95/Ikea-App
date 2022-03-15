import { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { addCartItemToUser, addFavItemsToUser, getCollection, getDocumentByID, removeFavItemFromUser } from '../../services/firebase';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartProducts';
import { addToFav, removeFromFav } from '../../store/actions/favourits';
import { styles } from './styles';
import HorizontalProducts from '../../components/HorizontalProducts/HorizontalProducts';
import { InfoSection } from './infoSection';
import { h, w } from '../../constants/dimentions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js';
export default function Product({ route, navigation }) {
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const { favourits } = useSelector(state => state.favourits);
  let { cartProducts } = useSelector(state => state.cartProducts);

  let found = favourits?.find(i => i.id === route.params.id);
  let foundInCart = cartProducts?.find(i => i.id === route.params.id);

  const [isFavourite, setIsFavourite] = useState(
    favourits?.find(i => i.id === route.params.id) ? true : false
  );
  const [inCart, setInCart] = useState(
    cartProducts?.find(i => i.id === route.params.id) ? true : false
  );

  const dispatch = useDispatch();
  const toggleFavourite = async () => {
    dispatch(
      isFavourite
        ? removeFromFav(route.params.id)
        : addToFav({ id: route.params.id, productData: product })
    );
    const localID = await AsyncStorage.getItem('UID');
    if (localID != null) {
      isFavourite
        ? removeFavItemFromUser(localID, route.params.id)
        : addFavItemsToUser(localID, route.params.id);
    }
    setIsFavourite(!isFavourite);
  };
  const addCart = async () => {
    dispatch(
      addToCart({
        id: route.params.id,
        productData: product,
        PurchasedAmount: 1,
      })
    );
    const localID = await AsyncStorage.getItem('UID');
    if (localID != null) {
      addCartItemToUser(localID, route.params.id);
    }
    setInCart(true);
  };

  const getProduct = () => {
    getDocumentByID('Products', route.params.id)
      .then((res) => {
        setProduct(res);

        //to get similar products in carousel
        getCollection('Products', ['SubCategory', '==', res.SubCategory])
          .then((res) => {
            return res.filter(prd => prd.id != route.params.id);
          })
          .then((res) => {
            setSimilarProducts(res);
            setLoader(false);
          })
          .catch((err) => console.log('error :', err));
      })
      .catch(err => console.log('error :', err));
  };
  useEffect(() => {
    getProduct()
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableOpacity>
            <Feather name='share' size={24} style={{ marginHorizontal: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFavourite}>
            <FontAwesome
              name={isFavourite ? 'heart' : 'heart-o'}
              color={'black'}
              size={24}
            />
          </TouchableOpacity>
        </View>
      ),
      title: product.ProductName
    })
  }, [product, isFavourite]);

  return (
    <View style={styles.container}>
      {loader && (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={true} color='blue' />
        </View>
      )}
      {!loader && (
        <>
          <ScrollView>
            <View>
              <SwiperFlatList
                index={0}
                showPagination
                data={product.Images}
                renderItem={({ item }) => (
                  <Image source={{ uri: item }} style={styles.ImageSize} />
                )}
                paginationActiveColor='grey'
                paginationDefaultColor='silver'
                key={route.params.id}
              />
            </View>
            <InfoSection product={product} navigation={navigation} />

            <View style={{ alignItems: 'center' }}>
              {product.Quantity > 2 && (
                <Text>{i18n.t('AvailableInStock')} : {product.Quantity}</Text>
              )}
              {product.Quantity <= 2 && product.Quantity !== 0 && (
                <Text style={styles.textDanger}>
                  {product.Quantity} {i18n.t('OnlyInStock')}
                </Text>
              )}
              {product.Quantity === 0 && (
                <Text style={styles.textDanger}>{i18n.t('OutOfStock')}</Text>
              )}
            </View>

            {similarProducts.length != 0 && (
              <>
                <Text style={styles.InfoContainer}>{i18n.t('SimilarProducts')}</Text>
                <HorizontalProducts
                  navigation={navigation}
                  products={similarProducts}
                />
              </>
            )}
          </ScrollView>

          {product.Quantity !== 0 && (
            <View
              style={{
                backgroundColor: 'white',
                width: w,
                height: h * 0.1,
                alignItems: 'center',
              }}
            >
              <Button
                style={inCart ? styles.addedTocart : styles.addToCartBtn}
                onPress={addCart}
                disabled={inCart}
                key={route.params.id}
              >
                {inCart && (
                  <Text style={{ color: 'white' }}>{i18n.t('AddedToBag')}</Text>
                )}
                {!inCart && (
                  <Text style={{ color: 'white' }}>
                    {i18n.t('AddToBag')}{' '}
                    <Text style={{ color: 'lightblue' }}>
                      {' '}
                      {i18n.t('EGP')} {product.Price}
                    </Text>
                  </Text>
                )}
              </Button>
            </View>
          )}
        </>
      )}
    </View>
  );
}
