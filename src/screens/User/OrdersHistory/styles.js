import { StyleSheet } from "react-native";
import { h, w } from "../../../constants/dimentions";

export const styles = StyleSheet.create({
    container:{
        // height:h,
        backgroundColor:'#E7F0EF',
        flex:1
    },
    noOrders: {
        width: w * 0.55,
        height: w * 0.55,
    },
    productImg:{
        height:w*0.2,
        width:w*0.2,
        margin:10
    },
    productInfo:{
        padding:20
    }
})