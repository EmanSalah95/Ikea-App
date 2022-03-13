import { StyleSheet } from "react-native";
import { h, w } from "../../constants/dimentions";
import i18n from 'i18n-js';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      height: h
    },
    ImageSize: {
      width: w,
      height: h * 0.65,
      padding: 0
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#397af8',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    InfoContainer: {
      padding: 20,
      fontWeight:'bold'
    },
    divider: {
      marginVertical: 10,
      backgroundColor: 'darkgrey'
    },
    detailsTabs:{
        display:'flex',
        flexDirection:i18n.locale=='en'?'row':'row-reverse',
        justifyContent:'space-between',
        marginVertical:15
    },
    sizeDetails:{ 
        display: 'flex', 
        flexDirection: i18n.locale=='en'?'row':'row-reverse', 
        justifyContent: 'space-between', 
        width: w * 0.60,
        alignSelf:i18n.locale=='en'?'flex-start':'flex-end'
    },
    detailsDivider:{
        backgroundColor: 'darkgrey'  
    },
    addToCartBtn:{
      backgroundColor:'#0051BA',
      padding:8,
      width:w*0.90,
      borderRadius:30
    },
    addedTocart:{
      backgroundColor:'lightblue',
      padding:8,
      width:w*0.90,
      borderRadius:30
    }
  });