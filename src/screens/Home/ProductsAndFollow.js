import { SafeAreaView, FlatList } from 'react-native';
import FollowCard from './followCard';
import ListHeader from './ListHeader';
import { styles } from '../../styles';
import { useEffect, useState } from 'react';
import { getCollection } from '../../services/firebase';
import HorizontalProducts from '../../components/HorizontalProducts/HorizontalProducts';

export default function ProductsAndFollow({ navigation }) {
  const [products, setProducts] = useState(null);
  const getProducts = () => {
    getCollection('Products', ['SalePrice', '>=', 0])
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log('error :', err));
  };
  useEffect(() => getProducts(), []);

  return (
    <SafeAreaView>
      <ListHeader navigation={navigation} />
      {products && (
        <HorizontalProducts navigation={navigation} products={products} />
      )}
      <FollowCard />
    </SafeAreaView>
  );
}
