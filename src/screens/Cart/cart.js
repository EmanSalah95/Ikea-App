import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { w } from '../../constants/dimentions';
import CartCard from './cartCard';

export default function Cart({ navigation }) {
  return (
    <View style={styles.container}>
    <FlatList
    ListHeaderComponent={<View style={styles.ListHeader}><Text style={styles.HeaderText}>Shopping bag</Text></View>}
    data={[
      {
        id:1,
        Image:'',
        ProductName:'ANGERSBY',
        Name:'3-seat sofa',
        Color:'grey',
        Price:1000,
        Quantity:1,
        Width:10,
        Height:20,
        Thickness:50
      },
      {
        id:2,
        Image:'',
        ProductName:'ANGERSBY',
        Name:'3-seat sofa',
        Color:'grey',
        Price:1000,
        Quantity:10,
        Width:40
      },
      {
        id:3,
        Image:'',
        ProductName:'ANGERSBY',
        Name:'3-seat sofa',
        Color:'grey',
        Price:1000,
        Quantity:5,
        Height:60
      }
    ]}
    renderItem={({item}) => <CartCard item={item}/>}

    />
       {/* <Text>Cart</Text>
       <Button
         icon='camera'
         mode='contained'
         onPress={() => navigation.navigate('Product')}
       >
         Press me
       </Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F0EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListHeader:{
    backgroundColor:'white',
    width:w,
    padding:15
  },
  HeaderText:{
    fontWeight:'bold',
    fontSize:15,
    textTransform:'uppercase',
    textAlign:'center'
  }
});
