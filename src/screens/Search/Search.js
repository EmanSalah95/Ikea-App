import { Text, View ,TouchableHighlight,TextInput} from 'react-native';
import SearchModal from '../../components/SearchModal/SearchModal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import './searchStyle.js';
import { styles } from './searchStyle.js';

export default function Search() {
  return (
    <>
    {/* <SearchModal /> */}

    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>

      <TouchableHighlight 
        underlayColor='#DDD'
      >
        <View style={styles.inputHead}>
        <MaterialIcons name='search' color='#ccc' size={20} style={styles.icon}/>

          <TextInput placeholder="What are you looking for?" 
            style={styles.input}
           />
        </View>
      </TouchableHighlight>

      
    <View style={styles.proShow}>
       <Text style={{fontSize:18,margin:7,fontWeight:'bold'}}>Browse products</Text>
       <Text style={{color:'gray',margin:7,fontSize:17}}>View all</Text>

    </View>
    </View>
    
    </>
  );
}


