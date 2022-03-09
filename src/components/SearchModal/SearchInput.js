import { TextInput, Text, View,TouchableHighlight,TouchableOpacity } from 'react-native';
import { styles } from '../../styles/searchStyles';
import { styles as homeSt } from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function SearchInput({closeModal}) {
  return (
    <>
    <View style={styles.searchBox}>
      <TouchableHighlight
        underlayColor='#DDD'
        style={[homeSt.searchIcon, styles.back]}
        onPress={closeModal}
      >
        <AntDesign name='arrowleft' color={'black'} size={26} />
      </TouchableHighlight>

      <TextInput
        style={{fontSize:17}}
        placeholder="Try'Malm'" />

    <MaterialIcons name='photo' color={'black'} size={26} style={{marginTop:10}}/>
    </View>
    
    <View style={{marginTop:20}}>
        <Text style={{fontSize:18,padding:5}}>Your <b>search and browse activity</b> is only<br></br>
          used to make results more relevant
        </Text>
      </View>
      
      <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>Popular searches</Text>
      
      <View style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        marginTop: 25
      }}>

          <Text style={{padding:6,width:80,borderColor:'#ccc',borderWidth:1,
                        fontSize:15,fontWeight:'bold',  borderRadius: 25, 
                         justifyContent:'center',alignItems:'center',display:'flex'
              }}>mirror
           </Text>
          <Text style={{padding:6,width:80,borderColor:'#ccc',borderWidth:1,
                        fontSize:15,fontWeight:'bold',  borderRadius: 25, 
                         justifyContent:'center',alignItems:'center',display:'flex'
             }}>table
             </Text>

          <Text style={{padding:6,width:80,borderColor:'#ccc',borderWidth:1,
                        fontSize:15,fontWeight:'bold',  borderRadius: 25, 
                         justifyContent:'center',alignItems:'center',display:'flex'
          }}>desk</Text>

         <Text style={{padding:6,width:80,borderColor:'#ccc',borderWidth:1,  
                        fontSize:15,fontWeight:'bold',  borderRadius: 25, 
                         justifyContent:'center',alignItems:'center',display:'flex'
          }}>chair</Text>

      </View></>

   
  );
}


