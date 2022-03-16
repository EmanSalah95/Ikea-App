import {StyleSheet} from 'react-native'
import i18n from 'i18n-js';

export const styles = StyleSheet.create({
    container:{
      padding:7,
      backgroundColor:'#fff',

      
 
    },
    text: {
    fontWeight:'bold',
    fontSize:30,
    padding:10,
    marginBottom:20
    },
  
    inputHead:{
      display:'flex',
      flexDirection:'row',
      backgroundColor: '#F1EAF1',
      width:360,
      borderRadius: 25, 
      paddingVertical: 3,
      paddingHorizontal: 3,  
    },
  
    input:{
      flex:1,
      padding:7,
      width: 300,
      height: 40,
      backgroundColor: '#F1EAF1',
      borderColor: '#F1EAF1',
      borderWidth: 1,
      fontSize: 17,
    //  border:0,
     borderRadius: 20, 
     textAlign:'left'
    },
    icon:{
      paddingRight:7,
      paddingLeft:10,
      marginTop:10
    },

    proShow:{
      display:'flex',
      marginTop:45,
      flexDirection:'row',
      justifyContent:"space-between"
          },

   sign:{
    backgroundColor:'#fff',
    color:'black',
    padding:10,
    borderRadius:20,
    width: 150,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: 3,
    paddingHorizontal: 3,
    fontSize:20,
    fontWeight:'bold'
   },

   login:{
      backgroundColor:'#0051BA',
      color:'#fff',
      padding:10,
      borderRadius:20,
      width: 150,
      height: 40,
      justifyContent:'center',
      alignItems:'center',
      paddingVertical: 3,
      paddingHorizontal: 3,
      fontSize:20,
      fontWeight:'bold'
  },
  
  btn:{
    padding:7,
    borderWidth:2,
    width:80,
    height:40,
    borderColor:'#ccc'
  }
  });
  