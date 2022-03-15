import { StyleSheet } from 'react-native';
import { w, h } from '../../constants/dimentions';
import i18n from 'i18n-js';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7F0EF',
    // height: h,
    flex:1,
  },
  ListHeader: {
    backgroundColor: 'white',
    width: w,
    padding: 15,
  },
  HeaderText: {
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  flatList: {
    height: h * 0.55,
    flexGrow: 0,
  },
  emptyCartImg: {
    width: w * 0.55,
    height: w * 0.55,
  },
  totalPriceCard: {
    marginTop: 15,
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkoutBtn: {
    marginVertical: 15,
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
    alignItems: 'center',
    padding: 10,
  },
  cartImage: {
    width: w * 0.4,
    height: h * 0.20,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    width: w * 0.5,
    alignItems:'flex-start'
  },
});
