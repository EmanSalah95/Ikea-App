import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.storeCard}>
        <Icon
          name='storefront-outline'
          color='#000'
          size={30}
          style={{ marginRight: 20 }}
        />
        <View>
          <Text>Products at</Text>
          <Text style={styles.boldText}>IKEA CAIRO MALL OF ARABIA</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.emptyContainer}>
        <Image
          source={require('./../../assets/Waiting-bro.png')}
          style={styles.image}
        />

        <Text style={styles.waitingText}>
          Your shopping list is waiting for its first product!
        </Text>
      </View>
    </View>
  );
}
