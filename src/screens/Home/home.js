import { SafeAreaView, ScrollView, View, FlatList } from 'react-native';
import { styles } from '../../styles';
import Ads from './ads';
import HomeHeader from './homeHeader';
import OfferRow from './offerRow';
import TextOffer from './textOffer';
import SearchModal from '../../components/SearchModal/SearchModal'
import ProductsAndFollow from './ProductsAndFollow';
import { useState } from 'react';

export default function Home({ navigation }) {
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
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => <OfferRow item={item} navigation={navigation} />}
        keyExtractor={(item,index) => index}
        ListFooterComponent={<ProductsAndFollow navigation={navigation}/>}
      />
    </SafeAreaView>
  );
}
