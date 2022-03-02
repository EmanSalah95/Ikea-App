import { StyleSheet, Text, View } from 'react-native';

export default function Favourits() {
  return (
    <View style={styles.container}>
      <Text>Favourits</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
