import {
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/HorizontalProducts/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearProducts, getProdList } from '../../store/actions/productsList';

export default function Products({ route, navigation, item }) {
  const dispatch = useDispatch();
  const { condition, screenTitle } = route.params.routeParams;
  let { allProducts, filteredList } = useSelector((state) => state.products);

  const screenOptions = {
    title: screenTitle,
  };

  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getProdList(condition));
    };
    resolveAction();
    navigation.setOptions(screenOptions);

    return () => {
      dispatch(clearProducts());
    };
  }, []);

  return (
    <View style={styles.container}>
      {allProducts.length > 0 ? (
        <FlatList
          style={styles.prodListH}
          data={filteredList ? filteredList : allProducts}
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
  },
  devider: {
    backgroundColor: '#DDD',
    height: 0.5,
  },
});
