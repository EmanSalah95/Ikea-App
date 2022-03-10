import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RadioButton } from 'react-native-paper';
import { styles } from './styles';
import { Timestamp } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNewOrder } from '../../services/firebase';

export default function Pay({ checkedAddress }) {
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);
  const purchasedItems = useSelector(state => state.cartProducts.cartProducts);

  const [items, setItems] = useState([]);

  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);
  const [checkedPayment, setCheckedPayment] = useState(0);
  // 0058a2

  const placeOrder = async () => {
    const purchaseDate = Timestamp.fromDate(new Date());
    const uid = await AsyncStorage.getItem('UID');
    setTimeout(() => {
      createNewOrder({
        createdAt: purchaseDate,
        items: items,
        status: false,
        totalPrice: totalOrderPrice,
        userId: uid,
        checkedAddress: checkedAddress,
      });
    }, 2000);
  };

  useEffect(() => {
    purchasedItems.forEach(item => {
      const newItem = { ProductID: item.id, Amount: item.PurchasedAmount };
      setItems(prevItems => [...prevItems, newItem]);
    });
  }, []);

  useEffect(() => {
    checkedPayment === 0
      ? setIsCashOnDelivery(false)
      : setIsCashOnDelivery(true);
  }, [checkedPayment]);

  return (
    <View style={styles.payContainer}>
      <View style={styles.paymentSelect}>
        <RadioButton.Group
          onValueChange={newValue => setCheckedPayment(newValue)}
          value={checkedPayment}
        >
          <View style={styles.paymentRadioButton}>
            <RadioButton
              value={0}
              status={checkedPayment === 0 ? 'checked' : 'unchecked'}
              color='#0058a2'
            />
            <Text style={styles.dataText}>Pay with PayPal</Text>
          </View>
          <View style={styles.paymentRadioButton}>
            <RadioButton
              value={1}
              status={checkedPayment === 1 ? 'checked' : 'unchecked'}
              color='#0058a2'
            />
            <Text style={styles.dataText}>Cash on Delivery</Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.placeOrder}>
        {isCashOnDelivery ? (
          <>
            <Text style={styles.dataText}>
              Total amount incl VAT:{' '}
              <Text style={{ ...styles.strongText, fontSize: 15 }}>
                EGP {totalOrderPrice}
              </Text>
            </Text>
            <View style={styles.placeOrderButtons}>
              <TouchableOpacity style={styles.orderCancelBtn}>
                <Text>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.placeOrderBtn}
                onPress={placeOrder}
              >
                <Text style={{ color: '#fff' }}>PLACE ORDER</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
