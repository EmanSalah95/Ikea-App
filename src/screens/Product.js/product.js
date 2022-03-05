import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { getCollection, getDocumentByID } from '../../services/firebase';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartProducts';
import { addToFav, removeFromFav } from '../../store/actions/favourits';
import { styles } from './styles';
import HorizontalProducts from '../../components/HorizontalProducts/HorizontalProducts';
import { InfoSection } from './infoSection';
import { h, w } from '../../constants/dimentions';
export default function Product({ route, navigation }) {

  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const { favourits } = useSelector((state) => state.favourits);
  let { cartProducts } = useSelector((state) => state.cartProducts);

  let found = favourits?.find((i) => i.id === route.params.id);
  let foundInCart = cartProducts?.find((i) => i.id === route.params.id);

  const [isFavourite, setIsFavourite] = useState(found ? true : false);
  const [inCart, setInCart] = useState(foundInCart ? true : false);

  const dispatch = useDispatch();
  const toggleFavourite = () => {
    dispatch(
      isFavourite
        ? removeFromFav(route.params.id)
        : addToFav({ id: route.params.id, productData: product })
    );
    // addFavItemsToUser(localStorage.getItem('UID'), route.params.id);
    setIsFavourite(!isFavourite);
  };
  const addCart = () => {
    dispatch(
      addToCart({ id: route.params.id, productData: product, PurchasedAmount: 1 })
    );
    setInCart(true);
  };
  const getProduct = () => {
    getDocumentByID('Products', route.params.id).then((res) => {
      return setProduct(res);
    })
      .catch((err) => console.log('error :', err));
  };
  const getSimilarProducts = () => {
    getCollection('Products', ['SubCategory', '==', product.SubCategory])
      .then((res) => {
        return res.filter(prd => prd.id != route.params.id);
      })
      .then((res) => {
        setSimilarProducts(res)
      })
      .catch((err) => console.log('error :', err));
  };
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableOpacity>
            <Feather
              name='share'
              size={24}
              style={{ marginHorizontal: 15 }}
            />
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
    getSimilarProducts();
    setLoader(false);
  }, [product, isFavourite]);

  return (
    <View style={styles.container}>
      {
        (loader) && (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating={true} color='blue' />
          </View>
        )
      }
      {
        (!loader) && (
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
              {similarProducts.length != 0 && (
                <>
                  <Text style={styles.InfoContainer}>Similar products</Text>
                  <HorizontalProducts navigation={navigation} products={similarProducts} />
                </>
              )}
            </ScrollView>
            <View style={{ backgroundColor: 'white', width: w, height: h * 0.1, alignItems: 'center' }}>
              <Button
                style={inCart ? styles.addedTocart : styles.addToCartBtn}
                onPress={addCart}
                disabled={inCart}
                key={route.params.id}
              >
                {
                  (inCart) && <Text style={{ color: 'white' }}>Added to bag </Text>
                }
                {
                  (!inCart) && <Text style={{ color: 'white' }}>Add to bag <Text style={{ color: 'lightblue' }}> EGP {product.Price}</Text></Text>
                }
              </Button>
            </View>
          </>
        )
      }
    </View>
  );
}