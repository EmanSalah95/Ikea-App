import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { getCollection, getDocumentByID } from '../../services/firebase';
import HorizontalProducts from '../../components/HorizontalProducts/HorizontalProducts';

export default function Products({ route, navigation }) {
  const { subId, SalePrice, screenTitle } = route.params;
  const [products, setProducts] = useState(null);
  const [currentSub, setCurrentSub] = useState(null);

  const getProducts = () => {
    getCollection(
      'Products',
      subId ? ['SubCategory', '==', subId] : ['SalePrice', '>=', 0]
    )
      .then((res) => {
        setProducts(res);
        console.log('res', res.data().Description);
      })
      .catch((err) => console.log('error :', err));
  };

  const getCurrentSub = () => {
    getDocumentByID('subCategory', subId).then((current) => {
      setCurrentSub(current);
      console.log('res', current.Name);
    });
  };

  useEffect(() => {
    subId && getCurrentSub();
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('sub', subId)}>
          <Text>filter</Text>
        </TouchableOpacity>
      ),
      title: screenTitle ? screenTitle : currentSub?.Name,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>{subId && subId}</Text>
      <Text>{SalePrice && 'Sale'}</Text>
      <Text>Products</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
