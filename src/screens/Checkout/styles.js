import { StyleSheet } from 'react-native';
import i18n from 'i18n-js';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  header: {
    marginVertical: 10,
    padding: 10,
  },
  activeHeader: {
    backgroundColor: '#0058a2',
  },
  inactiveHeader: {
    backgroundColor: '#f0f0f0',
  },
  activeHeaderText: {
    color: '#fff',
  },
  inactiveHeaderText: {
    color: '#000',
  },
  formWrapper: {
    marginVertical: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
    textAlign:'left'
  },
  pickerWrapper: {
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: '#0e2d64',
    overflow: 'hidden',
    marginVertical: 10,
  },
  quantityPicker: {
    color: '#0e2d64',
  },
  pickerItemStyle: {
    marginHorizontal: 100,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  continueBtnWrappper: {
    backgroundColor: '#0058a2',
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
  },
  continueBtn: {
    color: '#fff',
    fontSize: 12,
  },
  backBtnWrappper: {
    backgroundColor: '#e6e6e6',
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
  },
  backBtn: {
    color: '#000',
    fontSize: 12,
  },
  itemCard: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    // flexDirection: 'row',
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productData: {
    // flexDirection: 'row',
    flexDirection: 'row',
  },
  imageCard: {
    margin: 5,
    width: 60,
    height: 60,
  },
  productDetails: {
    margin: 10,
  },
  dataText: {
    fontSize: 12,
    textAlign:'left'
  },
  strongText: {
    fontWeight: 'bold',
  },
  totalPriceText: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
  },
  reviewCard: {
    borderWidth: 1,
    borderColor: '#e9e9e9',
    padding: 10,
  },
  reviewButtons: {
    marginTop: 10,
  },
  locationsWrapper: {
    // flexDirection: 'row',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginVertical: 8,
    paddingVertical: 15,
  },
  radioButtonsGroup: {
    width: 70,
    alignItems: 'center',
  },
  shippingAddressBtn: {
    backgroundColor: '#efefee',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  payContainer: {
    marginVertical: 10,
  },
  paymentSelect: {
    backgroundColor: '#ececec',
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 5,
    padding: 10,
  },
  paymentRadioButton: {
    // flexDirection: 'row',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeOrder: {
    backgroundColor: '#ececec',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d4d4d4',
    padding: 10,
  },
  placeOrderButtons: {
    marginVertical: 10,
    // flexDirection: 'row',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderCancelBtn: {
    backgroundColor: '#dadada',
    padding: 10,
  },
  placeOrderBtn: {
    backgroundColor: '#0058a2',
    padding: 10,
  },
  successfulOrderMessage: {
    alignItems: 'center',
  },
  successfulOrderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
