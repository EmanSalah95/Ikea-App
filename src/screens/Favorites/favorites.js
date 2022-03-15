import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import FavoritesList from './favoritesList';
import { useEffect } from 'react';
import i18n from 'i18n-js';

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
              <Text style={{textAlign:'left'}}>{i18n.t('ProductsAt')}</Text>
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
              {i18n.t('EmptyShoppingList')}
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <FavoritesList favItems={favItems} />

          <View style={styles.favTotalPriceWrapper}>
            <Text>{i18n.t('TotalPrice')}</Text>
            <Text style={styles.favTotalPrice}>{i18n.t('EGP')} {favTotalPrice}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
