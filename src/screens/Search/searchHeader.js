import React from 'react'
import { Text, View ,TouchableHighlight,TextInput,SafeAreaView,FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import './searchStyle.js';
import { styles } from './searchStyle.js';

export default function SearchHeader({closeModal}) {
  return (

    <>
    <Text style={styles.text}>Search</Text>

    <View style={styles.inputHead}>
        <TouchableHighlight
        underlayColor='#DDD'
        // style={[homeSt.searchIcon,styles.back]}
        onPress={closeModal}
      >
    <MaterialIcons name='search' color='#ccc' size={20} style={styles.icon} />

      </TouchableHighlight>
      <TextInput
        style={styles.input}
        placeholder="What are you looking for?"
      />
    </View>

    {/* <TouchableHighlight
          underlayColor='#DDD'
      >
          <View style={styles.inputHead}>
           
        <TouchableHighlight
        underlayColor='#DDD'
        // style={[homeSt.searchIcon,styles.back]}
        onPress={closeModal}
      >
      <MaterialIcons name='search' color='#ccc' size={20} style={styles.icon} />
      <TextInput placeholder="What are you looking for?"
                  style={styles.input} />
      </TouchableHighlight>
              
          </View>

      </TouchableHighlight>
       */}

      <View style={styles.proShow}>
              <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }}>Browse products</Text>
              <Text style={{ color: '#ccc', margin: 7, fontSize: 17 }}>View all</Text>

      </View>
          </>
 
  )
}




