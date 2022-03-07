import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
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
  continueBtnWrappper: {
    backgroundColor: '#0058a2',
    padding: 10,
    alignItems: 'center',
  },
  continueBtn: {
    color: '#fff',
  },
  itemCard: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productData: {
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
  },
  strongText: {
    fontWeight: 'bold',
  },
  totalPriceText: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
  },
});
