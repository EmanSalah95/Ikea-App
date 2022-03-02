import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        icon='camera'
        mode='contained'
        onPress={() => navigation.navigate('Product')}
      >
        Press me
      </Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
