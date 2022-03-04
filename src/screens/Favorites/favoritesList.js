import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import { h } from '../../constants/dimentions';
import FavoritesCard from './favoritesCard';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { removeAllFromFav } from '../../store/actions/favourits';
import { useDispatch } from 'react-redux';
import { addAllItemsToCart } from '../../store/actions/cartProducts';

export default function FavoritesList({ favItems }) {
  const dispatch = useDispatch();

  const addAllFavItemsToBag = () => {
    dispatch(addAllItemsToCart(favItems));
  };

  const clearFavItems = () => {
    return Alert.alert('Do you want to clear shopping list?', null, [
      {
        text: 'No',
      },
      { text: 'Yes', onPress: () => dispatch(removeAllFromFav()) },
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
                <Text>Products at</Text>
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
              <Text style={styles.boldUpperCaseText}>Contact Staff</Text>
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
                Add all items to shopping bag
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
                Remove collected products
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
                Clear shopping list
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
