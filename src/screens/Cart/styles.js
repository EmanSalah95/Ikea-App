import { StyleSheet } from "react-native";
import { w , h } from "../../constants/dimentions";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E7F0EF',
      height: h
    },
    ListHeader: {
      backgroundColor: 'white',
      width: w,
      padding: 15
    },
    HeaderText: {
      fontWeight: 'bold',
      fontSize: 15,
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    flatList: {
      height: h * 0.62,
      flexGrow: 0
    },
    totalPriceCard: {
      marginTop: 15,
      padding: 20,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    checkoutBtn: {
      marginVertical:15,
      backgroundColor: '#0051BA',
      padding: 6,
      width: w * 0.9,
    },
    cartBox: {
        backgroundColor: 'white',
        width: w,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        padding:10
    },
    cartImage: {
        width: w * 0.5,
        height: h * 0.25
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding:20,
        width:w*0.5
    }
  });  