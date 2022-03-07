import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';

export default function ListHeader({navigation}) {
  const pressHandler = () => {
    navigation.navigate('Products', {
      screenTitle: 'IKEA Family offers',
      condition: ['SalePrice', '>=', 0],
    });
  };
  return (
    <View style={styles.listHeader}>
      <Text style={styles.boldTitle}>IKEA Family offers</Text>

      <TouchableHighlight underlayColor='#DDD' onPress={pressHandler}>
        <Text style={styles.grayText}>View all</Text>
      </TouchableHighlight>
    </View>
  );
}
