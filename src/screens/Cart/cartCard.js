import { Text, View, Image } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { styles } from './styles';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  setCartItemAmount,
  removeFromCart,
} from '../../store/actions/cartProducts';
import {
  getDocumentByID,
  removeCartItemFromUser,
} from '../../services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js';

export default function CartCard({ item, purchasedQuantity, id }) {
  const [selectedAmount, setSelectedAmount] = useState(purchasedQuantity);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

    const deleteItem = async() => {
        dispatch(removeFromCart(id));
        dispatch(setCartItemAmount(id, 0));
        const localID = await AsyncStorage.getItem('UID');
        if(localID!=null)
        {
            removeCartItemFromUser(localID, id).catch((err)=>{console.log(err)})
        }
    };

  const selectAmount = value => {
    setSelectedAmount(value);
  };

  useEffect(() => {
    getDocumentByID('Products', id).then(res => {
      setProduct(res);
    });
  }, []);

  useEffect(() => {
    dispatch(setCartItemAmount({ id: id, PurchasedAmount: selectedAmount }));
  }, [dispatch, id, selectedAmount]);

  return (
    <View style={styles.cartBox}>
      <Image source={{ uri: item.Images[0] }} style={styles.cartImage} />
      <View style={styles.infoContainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            textTransform: 'uppercase',
          }}
        >
          {item.ProductName}
        </Text>
        <Text>{i18n.locale=='en'?item.Name:item.NameAr}</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ color: 'gray' }}>{i18n.locale=='en'?item.Color:item.ColorAr}</Text>
          {item.Height && item.Width && item.Thickness && (
            <Text style={{ color: 'gray' }}>
               {item.Height} x {item.Width} x {item.Thickness} {i18n.t('CM')}
            </Text>
          )}
          {item.Height && item.Width && !item.Thickness && (
            <Text style={{ color: 'gray' }}>
               {item.Height} x {item.Width} {i18n.t('CM')}
            </Text>
          )}
          {item.Width && !item.Height && !item.Thickness && (
            <Text style={{ color: 'gray' }}> {item.Width} {i18n.t('CM')}</Text>
          )}
          {item.Thickness && !item.Width && !item.Height && (
            <Text style={{ color: 'gray' }}> {item.Thickness} {i18n.t('CM')}</Text>
          )}
          {item.Height && !item.Width && !item.Thickness && (
            <Text style={{ color: 'gray' }}> {item.Height} {i18n.t('CM')}</Text>
          )}
        </View>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
          {i18n.t('EGP')} {item.Price}
        </Text>
        <NumericInput
          editable={false}
          type='plus-minus'
          onChange={selectAmount}
          minValue={1}
          maxValue={product.Quantity}
          value={selectedAmount}
          separatorWidth={0}
          iconSize={25}
        />
        <Text style={{ marginTop: 5 }}>
          {i18n.t('SubTotal')} : 
          <Text style={{ fontWeight: 'bold' }}>
           {i18n.t('EGP')} {item.Price * selectedAmount}
          </Text>
        </Text>
      </View>
      <AwesomeIcon
          name='trash'
          size={25}
          onPress={deleteItem}
          style={{alignSelf:'flex-start'}}
        />
    </View>
  );
}
