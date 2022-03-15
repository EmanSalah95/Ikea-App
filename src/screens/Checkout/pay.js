import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RadioButton } from 'react-native-paper';
import { styles } from './styles';
import { Timestamp } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createNewOrder,
  removeAllCartItemFromUser,
} from '../../services/firebase';
import { removeAllFromCart } from '../../store/actions/cartProducts';
import i18n from 'i18n-js';

export default function Pay({
  checkedAddress,
  resetSection,
  orderIsPlaced,
  setOrderIsPlaced,
}) {
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);
  const purchasedItems = useSelector(state => state.cartProducts.cartProducts);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);
  const [checkedPayment, setCheckedPayment] = useState(0);

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
    setOrderIsPlaced(true);
    // reset inputs
    resetSection();

    // firebase
    removeAllCartItemFromUser(uid);

    // redux
    dispatch(removeAllFromCart());
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
      {!orderIsPlaced && (
        <>
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
                <Text style={styles.dataText}>{i18n.t('PayWithPaypal')}</Text>
              </View>
              <View style={styles.paymentRadioButton}>
                <RadioButton
                  value={1}
                  status={checkedPayment === 1 ? 'checked' : 'unchecked'}
                  color='#0058a2'
                />
                <Text style={styles.dataText}>{i18n.t('CashOnDelivery')}</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.placeOrder}>
            {isCashOnDelivery ? (
              <>
                <Text style={styles.dataText}>
                  {i18n.t('TotalAmount')}:{' '}
                  <Text style={{ ...styles.strongText, fontSize: 15 }}>
                    {i18n.t('EGP')} {totalOrderPrice}
                  </Text>
                </Text>
                <View style={styles.placeOrderButtons}>
                  <TouchableOpacity style={styles.orderCancelBtn}>
                    <Text>{i18n.t('Cancel')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.placeOrderBtn}
                    onPress={placeOrder}
                  >
                    <Text style={{ color: '#fff' }}>{i18n.t('PlaceOrder')}</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}
          </View>
        </>
      )}
    </View>
  );
}
