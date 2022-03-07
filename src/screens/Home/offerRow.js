import {
  TouchableWithoutFeedback,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import { styles } from '../../styles';
import { BlurView } from 'expo-blur';

export default function OfferRow({ navigation, item }) {
  const pressHandler = () => {
    navigation.navigate('Products', {
      screenTitle: item.data().Name,
      condition: ['SubCategory', '==', item.id],
    });
  };

  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      <ImageBackground
        style={styles.homeListImg}
        source={{ uri: item.data().Image }}
      >
        <BlurView intensity={180} style={styles.blurContainer}>
          <Text style={styles.description}>{item.data().Description}</Text>
        </BlurView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
