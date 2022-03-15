import { StyleSheet } from 'react-native';
import i18n from 'i18n-js';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 0.8,
  },
  buttonsContainer: {
    flex: 0.2,
    flexDirection:'row',
    paddingHorizontal:5,
    justifyContent:'space-between',
    alignItems:'center',
    borderTopColor: '#E2E2E2',
    borderTopWidth: 1,
  },
  btn: {
      borderRadius:50,
      width:'48%'
  },
  clear: {
      borderColor:'#000',
      color:'#000'
  },
  view: {
      backgroundColor:'#000'
  },
  fieldRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  borderBottom: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
  },  
  optionRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems:'center'
  },
  bold:{
    fontWeight:'bold'
  },
  grayText:{
    color:'gray'
  }

});
;