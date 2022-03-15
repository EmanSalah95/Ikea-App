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
      height: h * 0.55,
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
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:15
    },
    sizeDetails:{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: w * 0.60,
        alignSelf:'flex-start'
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
    },
    textDanger: { color: 'red' },

  });
