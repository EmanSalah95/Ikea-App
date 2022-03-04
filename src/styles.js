import { StyleSheet } from 'react-native';
import { w, h } from './constants/dimentions';

export const styles = StyleSheet.create({
  // tabs
  badge: {
    position: 'absolute',
    backgroundColor: 'rgb(255, 193, 7)',
    right: -10,
    top: -5,
  },
  //home
  listContainer:{
    // flex:1,
    paddingTop:10,
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
    height:h*0.25
  },
  textOffer: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  offerParagraph:{
    color: '#fff',
  },
  homeListImg: {
    width: '100%',
    height:h*0.25,
    marginVertical: 2.5,
  },
  prodListH: {
    paddingStart:20,
  },
  prodCardImg:{
    width: 150,
    height:100,
    alignSelf:'center'
  },
  prodCardH:{
    marginTop:5,
    margin:10,
    padding:10,
    width:200,
    elevation:6,
  },
  listHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:15,
  },
  boldTitle:{
    fontWeight:'bold',
  },
  bigText:{
    fontSize:15,
  },
  grayText:{
    color:'gray'
  },
  blueText:{
    color:'#2e73b8'
  },
  marV:{
    marginVertical:15,
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    elevation:1,
    backgroundColor:'#0058a3',
    zIndex:10,
  }, heart: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex:10,
  },
  followCard:{
    marginVertical:10,
    marginHorizontal:10,
    padding:10,
    elevation:3,
    alignItems:'center',
  },
  social:{
    flexDirection:'row',
    alignSelf:'center'
  },
  socialIcon:{
    padding:10,
  },
  news:{
    marginVertical:10,
    alignSelf:'center'
  },
  center:{
    alignSelf:'center'
  },
});
