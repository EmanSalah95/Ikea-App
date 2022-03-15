import { StyleSheet } from 'react-native';
import i18n from 'i18n-js';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7f0ef',
  },
  header: {
    fontSize: 10,
    textTransform: 'uppercase',
  },
  storeCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    elevation: 2,
    flexDirection: 'row',
  },
  boldUpperCaseText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListImage: {
    width: '50%',
    height: '60%',
  },
  waitingText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactStaffCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderBottomColor: '#0e4999',
    borderBottomWidth: 2,
  },
  favoritesCard: {
    backgroundColor: '#fff',
    marginTop: 6,
    elevation: 4,
  },
  addToBagButton: {
    backgroundColor: '#eee',
    elevation: 4,
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productData: {
    flexDirection: 'row',
    padding: 15,
  },
  imageCard: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
  },
  productName: {
    fontWeight: 'bold',
    textAlign: 'left'
  },
  productPrice: {
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  productSalePrice: {
    fontSize: 12,
    color: '#646464',
  },
  pickerWrapper: {
    borderRadius: 2,
    borderWidth: 1.5,
    width: 80,
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
  primaryButtonLayout: {
    elevation: 4,
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAllItemsButton: {
    backgroundColor: '#0051ba',
  },
  addAllItemsButtonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  removeCollectedItemsButton: {
    backgroundColor: '#f3f7f8',
    elevation: 0,
  },
  removeCollectedItemsButtonText: {
    color: '#737778',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  clearItemsButton: {
    backgroundColor: '#e72f0d',
  },
  clearItemsButtonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  favTotalPriceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderTopColor: '#ccd0d1',
    borderTopWidth: 1.5,
    borderBottomColor: '#ccd0d1',
    borderBottomWidth: 1.5,
    backgroundColor: '#f3f5f4',
  },
  favTotalPrice: {
    fontWeight: 'bold',
  },
});
