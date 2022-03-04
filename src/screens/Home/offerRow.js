import { TouchableWithoutFeedback, Image } from 'react-native';
import { styles } from '../../styles';

export default function OfferRow({ navigation, item }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Products');
      }}
    >
      <Image
        style={styles.homeListImg}
        source={require('../../assets/ramadanNight.jpg')}
      />
    </TouchableWithoutFeedback>
  );
}
