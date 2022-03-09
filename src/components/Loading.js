import React from 'react';
import { View ,StyleSheet} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={'#000'}  size={30}/>
    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20,
    }
})
