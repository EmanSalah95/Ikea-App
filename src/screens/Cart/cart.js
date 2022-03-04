import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { h } from '../../constants/dimentions';
import CartCard from './cartCard';
import { styles } from './styles';

export default function Cart({ navigation }) {
  const itemsCount = useSelector(
    state => state.cartProducts.totalAmountOfCartItems
  );
  const cartItems = useSelector(state => state.cartProducts.cartProducts);
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.ListHeader}><Text style={styles.HeaderText}>Shopping bag</Text></View>
        {
          (cartItems.length === 0) && (
            <View style={{ alignItems: 'center', justifyContent: 'center',height:h*0.75}}>
              <Image source={require('../../assets/noCartItems.jpg')} style={styles.emptyCartImg} />
              <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center',paddingHorizontal:20}}>
                Your shopping bag is waiting for it's first product
              </Text>
            </View>
          )
        }
        {/* <Text>Cart</Text>
       <Button
         icon='camera'
         mode='contained'
         onPress={() => navigation.navigate('Product')}
       >
         Press me
       </Button> */}

        {
          (cartItems.length !== 0) && (
            <>
              <FlatList
                style={styles.flatList}
                data={cartItems}
                renderItem={({ item }) => <CartCard item={item.productData} id={item.id} key={item.id} purchasedQuantity={item.PurchasedAmount} />}
              />
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

            </>
          )
        }
      </View>
    </>
  );
}
