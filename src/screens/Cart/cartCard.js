import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import { h, w } from '../../constants/dimentions';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function CartCard({ item }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://www.ikea.com/eg/en/images/products/angersby-3-seat-sofa-knisa-light-grey__0940370_pe794950_s5.jpg?f=xxs' }}
                style={styles.cartImage}
            />
            <View style={styles.infoContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.ProductName}</Text>
                <Text>{item.Name}</Text>
                <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <Text style={{color:'gray'}}>{item.Color}</Text>
                    {
                        (item.Height && item.Width && item.Thickness) && (
                            <Text style={{color:'gray'}}>, {item.Height} x {item.Width} x {item.Thickness} cm</Text>
                        )
                    }
                    {
                        (item.Height && item.Width && !item.Thickness) && (
                            <Text style={{color:'gray'}}>, {item.Height} x {item.Width} cm</Text>
                        )
                    }
                    {
                        (item.Width && !item.Height && !item.Thickness) && (
                            <Text style={{color:'gray'}}>, {item.Width} cm</Text>
                        )
                    }
                    {
                        (item.Thickness && !item.Width && !item.Height) && (
                            <Text style={{color:'gray'}}>, {item.Thickness} cm</Text>
                        )
                    }
                    {
                        (item.Height && !item.Width && !item.Thickness) && (
                            <Text style={{color:'gray'}}>, {item.Height} cm</Text>
                        )
                    }
                </View>
                <Text style={{fontWeight:'bold',marginBottom:5}}>EGP {item.Price}</Text>
                <NumericInput type='up-down' onChange={value => console.log(value)} minValue={1} maxValue={item.Quantity}/>
                <Text style={{marginTop:5}}>SubTotal:<Text style={{fontWeight:'bold'}}>{item.Price}</Text></Text>
                <AwesomeIcon name="trash" size={25} style={{textAlign:'right'}}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: w,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    cartImage: {
        width: w * 0.5,
        height: h * 0.25
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding:30,
        width:w*0.5
    }
})
