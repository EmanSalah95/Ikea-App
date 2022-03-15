import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../styles';
import i18n from 'i18n-js';

export default function TextOffer({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Products', {
      screenTitle: i18n.t('IKEAanniversary'),
      condition: ['SalePrice', '>=', 0],
    });
  };
  
  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      <View style={styles.offerContainer}>
        <Text style={styles.textOffer}>{i18n.t('IKEAmallOfArabia')}</Text>
        <Text style={styles.textOffer}>{i18n.t('AnniversaryOffers')}</Text>
        <Text style={{ ...styles.offerParagraph, marginTop: 10 }}>
          {i18n.t('IKEAoffers')}
        </Text>
        <Text style={styles.offerParagraph}>{i18n.t('DueDateValid')}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
