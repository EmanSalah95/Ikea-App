import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import { getCollection, getDocumentByID } from '../../services/firebase';
import HorizontalProducts from '../../components/HorizontalProducts/HorizontalProducts';
import ProductCard from '../../components/HorizontalProducts/ProductCard';

export default function Products({ route, navigation }) {
  const { subId, condition, screenTitle } = route.params;
  const [products, setProducts] = useState(null);

  const getProducts = () => {
    getCollection(
      'Products',condition)
      .then((res) => {
        setProducts(res);
        console.log('response', res.length);
      })
      .catch((err) => console.log('error :', err));
  };


  useEffect(() => {
    getProducts();
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('sub', subId)}>
          <Text>filter</Text>
        </TouchableOpacity>
      ),
      title: screenTitle ? screenTitle : currentSub?.Name,
      headerTitleAlign: 'start',
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.prodListH}
        data={products}
        renderItem={({ item }) => (
          <ProductCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.devider} />}
      />
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
