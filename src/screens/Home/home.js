import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { styles } from '../../styles';
import Ads from './ads';
import HomeHeader from './homeHeader';
import OfferRow from './offerRow';
import TextOffer from './textOffer';
import ProductsAndFollow from './ProductsAndFollow';
import { useEffect, useState } from 'react';
import { getCollection } from '../../services/firebase';
import { BlurView } from 'expo-blur';

export default function Home({ navigation }) {
  const [subCategories,setSubCategories]=useState(null);
  const data = [
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/6fe00db2519c240f/original/PH180057.jpg?f=xs',
    },
    {
      img: 'https://www.ikea.com/images/29/3d/293d38f490128b7e88853f2d9b409323.jpg?f=xl',
    },
    {
      img: 'https://www.ikea.com/images/b0/17/b0172bdf63e54fddd7dd24183fac5ab6.jpg?f=s',
    },
  ];

  const getSubCategories = () => {
    getCollection('subCategory', ['MobileHome', '>=', true])
      .then((res) => {
        setSubCategories(res);
      })
      .catch((err) => console.log('error :', err));
  };
  useEffect(()=>getSubCategories(),[])
  
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
