import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getDocumentByID } from '../../services/firebase';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { h, w } from '../../constants/dimentions';

export default function Product({ route }) {
  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
  const [product, setProduct] = useState({});
  const getProduct = () => {
    getDocumentByID('Products', route.params.id).then((res) => {
      setProduct(res);
    })
      .catch((err) => console.log('error :', err));
  }
  useEffect(() => getProduct(), []);
  return (
    <View style={styles.container}>
      <View>
        <SwiperFlatList
          index={0}
          showPagination
          data={product.Images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.ImageSize} />
          )}
          paginationStyle={styles.pagination}
          // PaginationComponent={()=>{return <View style={{height:2,backgroundColor:'black'}}></View>}}
          paginationActiveColor='grey'
          paginationDefaultColor='silver'
        />
      </View>
      <Text>HELLOOOOOOOOO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    height:h
  },
  ImageSize: {
    width: w,
    height: h * 0.50,
    padding: 0
  },
  pagination:{
    
  }
});