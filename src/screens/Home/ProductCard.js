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
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Product');
      }}
    >
      <Card style={styles.prodCardH}>
        <Image
          style={styles.prodCardImg}
          source={require('../../assets/plant.jpg')}
          resizeMode='contain'
        />
        <Text style={[styles.boldTitle, styles.blueText]}>
          IKEA Family price
        </Text>
        <Text style={styles.boldTitle}>Ylleved</Text>
        <Text style={styles.grayText}>collage frame plant</Text>
        <View style={styles.marV}>
          <FAB
            style={styles.fab}
            small
            icon='cart'
            color='#fff'
            onPress={() => console.log('Pressed')}
          />
          <Text style={styles.boldTitle}>EGP 59</Text>
          <Text style={styles.grayText}>{`regular price EGP${100}`}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
