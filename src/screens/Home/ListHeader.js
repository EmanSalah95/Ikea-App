import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import i18n from 'i18n-js';

export default function ListHeader({navigation}) {
  const pressHandler = () => {
    navigation.navigate('Products', {
      screenTitle: i18n.t('IKEAfamilyOffers'),
      condition: ['SalePrice', '>=', 0],
    });
  };
  return (
    <View style={styles.listHeader}>
      <Text style={styles.boldTitle}>{i18n.t('IKEAfamilyOffers')}</Text>

      <TouchableHighlight underlayColor='#DDD' onPress={pressHandler}>
        <Text style={styles.grayText}>{i18n.t('ViewAll')}</Text>
      </TouchableHighlight>
    </View>
  );
}
