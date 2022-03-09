import { SafeAreaView, FlatList } from 'react-native';
import ProductCard from './ProductCard';
import { styles } from '../../styles';

export default function HorizontalProducts({navigation,products}) {
  return (
    <FlatList
       style={styles.prodListH}
        data={products}
        renderItem={({item}) => <ProductCard item={item} navigation={navigation} horizontal/>}
        keyExtractor={(item,index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
  );
}


