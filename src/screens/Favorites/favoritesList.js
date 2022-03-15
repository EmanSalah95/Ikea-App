import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import { h } from '../../constants/dimentions';
import FavoritesCard from './favoritesCard';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { removeAllFromFav } from '../../store/actions/favourits';
import { useDispatch } from 'react-redux';
import { addAllItemsToCart } from '../../store/actions/cartProducts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  addAllFavItemsToCart,
  removeAllFavItemsFromUser,
} from '../../services/firebase';
import i18n from 'i18n-js';

export default function FavoritesList({ favItems }) {
  // const [allInCart, setAllInCart] = useState(false);

  const dispatch = useDispatch();

  const addAllFavItemsToBag = async () => {
    // setAllInCart(true);
    dispatch(addAllItemsToCart(favItems));

    const uid = await AsyncStorage.getItem('UID');
    addAllFavItemsToCart(uid);
  };

  const clearFavItems = () => {
    return Alert.alert(i18n.t('ClearShoppingListConfirmation'), null, [
      {
        text: i18n.t('No'),
      },
      {
        text: i18n.t('Yes'),
        onPress: async () => {
          dispatch(removeAllFromFav());

          const uid = await AsyncStorage.getItem('UID');
          uid && removeAllFavItemsFromUser(uid);
        },
      },
    ]);
  };

  return (
    <View style={{ height: h * 0.8125 }}>
      <FlatList
        data={favItems}
        renderItem={({ item }) => <FavoritesCard item={item} />}
        ListHeaderComponent={() => (
          <View>
            <TouchableOpacity style={styles.storeCard}>
              <Icon
                name='storefront-outline'
                color='#000'
                size={30}
                style={{ marginRight: 20 }}
              />
              <View>
                <Text>{i18n.t('ProductsAt')}</Text>
                <Text style={styles.boldUpperCaseText}>
                  IKEA Cairo Mall of Arabia
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactStaffCard}>
              <Ionicons
                name='chatbox-ellipses-outline'
                color='#000'
                size={30}
                style={{ marginHorizontal: 10 }}
              />
              <Text style={styles.boldUpperCaseText}>{i18n.t('ContactStaff')}</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            <TouchableOpacity
              style={{
                ...styles.primaryButtonLayout,
                ...styles.addAllItemsButton,
              }}
              onPress={addAllFavItemsToBag}
            >
              <Text style={styles.addAllItemsButtonText}>
               {i18n.t('AddAllToBag')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.primaryButtonLayout,
                ...styles.removeCollectedItemsButton,
              }}
              disabled
            >
              <Text style={styles.removeCollectedItemsButtonText}>
                {i18n.t('RemoveAllProducts')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.primaryButtonLayout,
                ...styles.clearItemsButton,
              }}
              onPress={clearFavItems}
            >
              <Text style={styles.clearItemsButtonText}>
                {i18n.t('ClearShoppingList')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
