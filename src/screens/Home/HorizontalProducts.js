import { SafeAreaView, FlatList } from 'react-native';
import FollowCard from './followCard';
import ListHeader from './ListHeader';
import ProductCard from './ProductCard';
import { styles } from '../../styles';
import { useEffect, useState } from 'react';
import { getCollection } from '../../services/firebase';

export default function HorizontalProducts({navigation}) {
  const [products,setProducts]=useState(null);
  const getProducts = () => {
    getCollection('Products',['SalePrice','>=',0])
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log('error :', err));
  };
  useEffect(()=>getProducts(),[]);

  return (
    <SafeAreaView >
      <ListHeader/>
     { products&&<FlatList
       style={styles.prodListH}
        data={products}
        renderItem={({item}) => <ProductCard item={item} navigation={navigation} />}
        keyExtractor={(item,index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
      />}
      <FollowCard/>
    </SafeAreaView>
  );
}


