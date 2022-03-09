import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import { styles } from './styles';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCartItemAmount, removeFromCart } from '../../store/actions/cartProducts'
import { removeCartItemFromUser } from '../../services/firebase';

export default function CartCard({ item, purchasedQuantity, id }) {
    const [selectedAmount, setSelectedAmount] = useState(purchasedQuantity);
    const dispatch = useDispatch();

    const deleteItem = async() => {
        dispatch(removeFromCart(id));
        dispatch(setCartItemAmount(id, 0));
        const localID = await AsyncStorage.getItem('UID');
        if(localID!=null)
        {
          removeCartItemFromUser(localID, id);
        }
    };

    const selectAmount = (value) => {
        setSelectedAmount(value);
    };

    useEffect(() => {
        dispatch(
            setCartItemAmount({ id: id, PurchasedAmount: selectedAmount })
        );
    }, [dispatch, id, selectedAmount]);
    return (
        <View style={styles.cartBox}>
            <Image
                source={{ uri: item.Images[0] }}
                style={styles.cartImage}
            />
            <View style={styles.infoContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase' }}>
                    {item.ProductName}
                </Text>
                <Text>{item.Name}</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ color: 'gray' }}>
                        {item.Color}
                    </Text>
                    {
                        (item.Height && item.Width && item.Thickness) && (
                            <Text style={{ color: 'gray' }}>, {item.Height} x {item.Width} x {item.Thickness} cm</Text>
                        )
                    }
                    {
                        (item.Height && item.Width && !item.Thickness) && (
                            <Text style={{ color: 'gray' }}>, {item.Height} x {item.Width} cm</Text>
                        )
                    }
                    {
                        (item.Width && !item.Height && !item.Thickness) && (
                            <Text style={{ color: 'gray' }}>, {item.Width} cm</Text>
                        )
                    }
                    {
                        (item.Thickness && !item.Width && !item.Height) && (
                            <Text style={{ color: 'gray' }}>, {item.Thickness} cm</Text>
                        )
                    }
                    {
                        (item.Height && !item.Width && !item.Thickness) && (
                            <Text style={{ color: 'gray' }}>, {item.Height} cm</Text>
                        )
                    }
                </View>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
                    EGP {item.Price}
                </Text>
                    <NumericInput
                        editable={false}
                        type='plus-minus'
                        onChange={selectAmount}
                        minValue={1}
                        maxValue={item.Quantity}
                        value={selectedAmount}
                        separatorWidth={0}
                        iconSize={25}
                    />
                <Text style={{ marginTop: 5 }}>
                    SubTotal:
                    <Text style={{ fontWeight: 'bold' }}>
                        EGP {item.Price * selectedAmount}
                    </Text>
                </Text>
                <AwesomeIcon name="trash" size={25} style={{ textAlign: 'right' }} onPress={deleteItem} />
            </View>
        </View>
    )
}
