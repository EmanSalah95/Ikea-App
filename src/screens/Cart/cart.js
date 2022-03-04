import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import CartCard from './cartCard';
import { styles } from './styles';

export default function Cart({ navigation }) {
  const itemsCount = useSelector(
    state => state.cartProducts.totalAmountOfCartItems
  );
  const cartItems = useSelector(state => state.cartProducts.cartProducts);
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        ListHeaderComponent={<View style={styles.ListHeader}><Text style={styles.HeaderText}>Shopping bag</Text></View>}
        data={cartItems}
        renderItem={({ item }) => <CartCard item={item.productData} id={item.id} key={item.id} purchasedQuantity={item.PurchasedAmount}/>}
      />
                  {/* <CartCard
                    id={item.id}
                    key={item.id}
                    product={item.productData}
                    purchasedQuantity={item.PurchasedAmount}
                  /> */}
      {/* <Text>Cart</Text>
       <Button
         icon='camera'
         mode='contained'
         onPress={() => navigation.navigate('Product')}
       >
         Press me
       </Button> */}
      <View style={styles.totalPriceCard}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ textTransform: 'uppercase' }}>
            Total Price
          </Text>
          <Text>
            (Inc. VAT)
          </Text>
          <Text style={{ paddingTop: 10 }}>
            {itemsCount} items
          </Text>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          EGP {totalOrderPrice}
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Button color='white' style={styles.checkoutBtn}>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
            PROCEED TO CHECKOUT
          </Text>
        </Button>
      </View>
    </View>
  );
}
