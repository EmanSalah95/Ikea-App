import i18n from 'i18n-js';
import { Text, View, FlatList, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { h } from '../../constants/dimentions';
import CartCard from './cartCard';
import { styles } from './styles';
import { useEffect } from 'react';

export default function Cart({ navigation }) {
  const itemsCount = useSelector(
    state => state.cartProducts.totalAmountOfCartItems
  );
  const cartItems = useSelector(state => state.cartProducts.cartProducts);
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.ListHeader}>
          <Text style={styles.HeaderText}>{i18n.t('ShoppingBag')}</Text>
        </View>
        {cartItems.length === 0 && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: h * 0.75,
            }}
          >
            <Image
              source={require('../../assets/noCartItems.jpg')}
              style={styles.emptyCartImg}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                paddingHorizontal: 20,
              }}
            >
              {i18n.t('EmptyShoppingBag')}
            </Text>
          </View>
        )}

        {cartItems.length !== 0 && (
          <>
            <FlatList
              style={styles.flatList}
              data={cartItems}
              renderItem={({ item }) => (
                <CartCard
                  item={item.productData}
                  id={item.id}
                  key={item.id}
                  purchasedQuantity={item.PurchasedAmount}
                />
              )}
            />
            <View style={styles.totalPriceCard}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ textTransform: 'uppercase' }}>{i18n.t('TotalPrice')}</Text>
                <Text>{i18n.t('VAT')}</Text>
                <Text style={{ paddingTop: 10 }}>{itemsCount} {i18n.t('Items')}</Text>
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                {i18n.t('EGP')} {totalOrderPrice}
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Button
                color='white'
                style={styles.checkoutBtn}
                onPress={() => navigation.navigate('Checkout')}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                  {i18n.t('Checkout')}
                </Text>
              </Button>
            </View>
          </>
        )}
      </View>
    </>
  );
}
