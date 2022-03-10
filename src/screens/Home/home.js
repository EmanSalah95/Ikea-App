import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { styles } from '../../styles';
import Ads from './ads';
import HomeHeader from './homeHeader';
import OfferRow from './offerRow';
import TextOffer from './textOffer';
import ProductsAndFollow from './ProductsAndFollow';
import { useEffect, useState } from 'react';
import { getCollection } from '../../services/firebase';

export default function Home({ navigation }) {
  const [subCategories, setSubCategories] = useState(null);

  const getSubCategories = () => {
    getCollection('subCategory', ['MobileHome', '==', true])
      .then((res) => {
        setSubCategories(res);
      })
      .catch((err) => console.log('error :', err));
  };
  useEffect(() => getSubCategories(), []);

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList
        ListHeaderComponent={
          <View>
            <HomeHeader />
            <Ads />
            <TextOffer navigation={navigation} />
          </View>
        }
        data={subCategories}
        renderItem={({ item }) => (
          <OfferRow item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index}
        ListFooterComponent={<ProductsAndFollow navigation={navigation} />}
      />
    </SafeAreaView>
  );
}
