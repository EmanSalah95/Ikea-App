import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { styles } from '../../styles';

export default function ProductCard({ navigation, item }) {
  const { Name, ProductName, Price, SalePrice, Width, Length, Images, Height } =item.data();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Product');
      }}
    >
      <Card style={styles.prodCardH}>
        <Image
          style={styles.prodCardImg}
          source={{uri:Images?Images[0]:'https://timeoutcomputers.com.au/wp-content/uploads/2016/12/noimage.jpg'}}
          resizeMode='contain'
        />
        <Text style={[styles.boldTitle, styles.blueText]}>
          IKEA Family price
        </Text>
        <Text style={styles.boldTitle}>{ProductName}</Text>
        <Text style={styles.grayText}>{Name}</Text>
        <View style={styles.marV}>
          <FAB
            style={styles.fab}
            small
            icon='cart'
            color='#fff'
            onPress={() => console.log('Pressed')}
          />
          <Text style={styles.boldTitle}>{`EGP ${Price}`}</Text>
         {SalePrice&& <Text style={styles.grayText}>{`regular price EGP${SalePrice}`}</Text>}
        </View>
      </Card>
    </TouchableOpacity>
  );
}
