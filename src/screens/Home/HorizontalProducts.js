import { SafeAreaView, FlatList } from 'react-native';
import FollowCard from './followCard';
import ListHeader from './ListHeader';
import ProductCard from './ProductCard';
import { styles } from '../../styles';

export default function HorizontalProducts({navigation}) {
  return (
    <SafeAreaView >
      <ListHeader/>
      <FlatList
       style={styles.prodListH}
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => <ProductCard item={item} navigation={navigation} />}
        keyExtractor={(item,index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <FollowCard/>
    </SafeAreaView>
  );
}


