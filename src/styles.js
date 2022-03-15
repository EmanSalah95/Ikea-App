import { StyleSheet } from 'react-native';
import { Colors } from './constants/colors';
import { w, h } from './constants/dimentions';
import i18n from 'i18n-js';

export const styles = StyleSheet.create({
  // tabs
  badge: {
    position: 'absolute',
    backgroundColor: Colors.amber,
    right: -10,
    top: -5,
  },
  //home
  listContainer: {
    // flex:1,
    paddingTop: 10,
    backgroundColor: '#FFF',
  },
  homeSearch: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
  },
  searchIcon: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  ads: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#DDD',
    marginBottom: 10,
  },
  offerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e73b8',
    marginBottom: 2.5,
    height: h * 0.25
  },
  textOffer: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  offerParagraph: {
    color: '#fff',
  },
  homeListImg: {
    width: '100%',
    height: h * 0.3,
    marginVertical: 2.5,
  },
  blurContainer: {
    margin: 20,
    padding: 5,
    width: w * 0.6,
    elevation: 10,
    alignSelf: 'flex-start'
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  prodListH: {
    paddingStart: 20,
    paddingEnd: 0,
  },
  prodCardImg: {
    width: 150,
    height: 100,
    alignSelf: 'center'
  },
  prodCardH: {
    marginTop: 5,
    margin: 10,
    padding: 10,
    width: 200,
    elevation: 6,
  },
  prodCardV: {
    width: w * 0.47,
    elevation: 0,
    paddingBottom: 0,
    marginHorizontal: 5,
  },
  listHeader: {
    flexDirection: 'row' ,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  boldTitle: {
    fontWeight: 'bold',
    textAlign: 'left'
  },
  bigText: {
    fontSize: 15,
  },
  grayText: {
    color: 'gray',
    textAlign: 'left'
  },
  blueText: {
    color: '#2e73b8'
  },
  marV: {
    marginVertical: 15,
  },
  cartIcon: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    elevation: 1,
    backgroundColor: '#0058a3',
    zIndex: 10,
    width: 35,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  cartIconV: {
    elevation: 1,
    backgroundColor: '#0058a3',
    zIndex: 10,
    width: 35,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'flex-end'
  },
  heart: {
    alignSelf: 'flex-end'
  },
  followCard: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    elevation: 3,
    alignItems: 'center',
  },
  social: {
    flexDirection: 'row' ,
    alignSelf: 'center'
  },
  socialIcon: {
    padding: 10,
  },
  news: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  center: {
    alignSelf: 'center'
  },
});
