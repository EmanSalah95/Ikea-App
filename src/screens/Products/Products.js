import { StyleSheet, Text, View } from 'react-native';

export default function Products() {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
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
