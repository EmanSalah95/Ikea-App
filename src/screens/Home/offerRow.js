import {
  TouchableWithoutFeedback,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import { styles } from '../../styles';
import { BlurView } from 'expo-blur';

export default function OfferRow({ navigation, item }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Products', {
          subId: item.id,
          screenTitle: item.data().Name,
        });
      }}
    >
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
