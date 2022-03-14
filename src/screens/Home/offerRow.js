import {
  TouchableWithoutFeedback,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import { styles } from '../../styles';
import { BlurView } from 'expo-blur';
import i18n from 'i18n-js';

export default function OfferRow({ navigation, item }) {
  const pressHandler = () => {
    navigation.navigate('Products', {
      screenTitle: i18n.locale=='en'?item.data().Name:item.data().NameAr,
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
          <Text style={styles.description}>{i18n.locale=='en'?item.data().Title:item.data().TitleAr}</Text>
        </BlurView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
  
}
