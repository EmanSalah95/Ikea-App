import { useEffect, useState } from "react";
import { View, Image, Text, FlatList } from "react-native"
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import { h } from "../../../constants/dimentions";
import { getDocumentByID } from "../../../services/firebase";
import OrderCard from "./orderCard";
import { styles } from "./styles";

export const OrdersHistory = () => {
  const [loader, setLoader] = useState(true);
  const purchases = useSelector((state) => state.user.user.Purchased);
  const [orders, setOrders] = useState([]);
  const getUserOrders = () => {
    let orderList = [];
    purchases.forEach((element, index) => {
      getDocumentByID('Orders', element).then((order) => {
        order.id = element;
        orderList.push(order);
        if (index === purchases.length - 1) {
          setOrders(orderList);
          setLoader(false);
        }
      });
    });
  };
  useEffect(() => {
    if (purchases) {
      getUserOrders();
    }
  }, [purchases]);
  return (
    <View style={styles.container}>
      {loader && <ActivityIndicator color="white" style={{paddingVertical:20}}/>}
      {!purchases && (
        <View style={{ alignItems: 'center', justifyContent: 'center', height: h * 0.75 }}>
          <Image source={require('../../../assets/noCartItems.jpg')} style={styles.noOrders} />
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingHorizontal: 20 }}>
            You have no orders
          </Text>
        </View>
      )}
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderCard key={item.id} order={item} />}
      />
    </View>
  )
}