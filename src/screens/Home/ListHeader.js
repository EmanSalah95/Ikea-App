import { Text, View } from 'react-native';
import { styles } from '../../styles';

export default function ListHeader() {

  return (
    <View style={styles.listHeader}>
      <Text style={styles.boldTitle}>IKEA Family offers</Text>
      <Text style={styles.grayText}>View all</Text>
    </View>
  );
}
