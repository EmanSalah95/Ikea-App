import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
      padding:7,
     
    },
    text: {
    fontWeight:'bold',
    fontSize:30,
    padding:10,
    marginBottom:20
    },
  
    inputHead:{
      width: "100%",
      height: "100%",
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      flex:1,
      backgroundColor: "#ccc",
      borderRadius: 20, 
      paddingVertical: 3,
      paddingHorizontal: 2,
    },
  
    input:{
      flex:1,
      width: 300,
      height: 40,
      backgroundColor: '#ccc',
      borderColor: '#ccc',
      borderWidth: 1,
      fontSize: 17,
     border:0
    },
    icon:{
      paddingRight:7,
      paddingLeft:10
    },

    proShow:{
      display:'flex',
      marginTop:45,
      flexDirection:'row',
      justifyContent:"space-between"
          }
  });
  