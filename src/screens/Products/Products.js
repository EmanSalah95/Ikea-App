import { StyleSheet, View, FlatList, Text,ImageBackground } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { getCollection } from '../../services/firebase';
import ProductCard from '../../components/HorizontalProducts/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearDetails, getProdList } from '../../store/actions/productsList';
import OfferRow from '../Home/offerRow';

export default function Products({ route, navigation,item }) {
  const dispatch = useDispatch();
  const { condition, screenTitle } = route.params.routeParams;
  let { allProducts } = useSelector((state) => state.products);

  const screenOptions = {
    title: screenTitle,
  };

  // const getProducts = () => {
  //   getCollection('Products', condition)
  //     .then((res) => {
  //       setProducts(res);
  //     })
  //     .catch((err) => console.log('error :', err));
  // };

  useEffect(() => {
    // getProducts();
    const resolveAction = async () => {
      dispatch(await getProdList(condition));
    };
    resolveAction();
    navigation.setOptions(screenOptions);

    return () => {
      dispatch(clearDetails());
    };
  }, []);

  return (
    <View style={styles.container}>
      {allProducts.length > 0 ? (
        <FlatList
          style={styles.prodListH}
          data={allProducts}
          renderItem={({ item }) => (
            <ProductCard item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={styles.devider} />}
        />
      ) : (
        <>
          <Text>Loading...</Text>
          
          </>
      )}
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  devider: {
    backgroundColor: '#DDD',
    height: 0.5,
  },
});
