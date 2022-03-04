import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import FavoritesList from './favoritesList';
import { useEffect } from 'react';

export default function Favorites() {
  const favItems = useSelector(state => state.favourits.favourits);

  const favTotalPrice = useSelector(state => state.favourits.favTotalPrice);

  return (
    <View style={styles.container}>
      {favItems.length === 0 ? (
        <View>
          <TouchableOpacity style={styles.storeCard}>
            <Icon
              name='storefront-outline'
              color='#000'
              size={30}
              style={{ marginRight: 20 }}
            />
            <View>
              <Text>Products at</Text>
              <Text style={styles.boldUpperCaseText}>
                IKEA Cairo Mall of Arabia
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.emptyContainer}>
            <Image
              source={require('./../../assets/noCartItems.jpg')}
              style={styles.emptyListImage}
            />

            <Text style={styles.waitingText}>
              Your shopping list is waiting for its first product!
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <FavoritesList favItems={favItems} />

          <View style={styles.favTotalPriceWrapper}>
            <Text>Total price</Text>
            <Text style={styles.favTotalPrice}>EGP {favTotalPrice}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
