import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf3f2',
  },
  header: {
    fontSize: 10,
    textTransform: 'uppercase',
  },
  storeCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    elevation: 2,
    flexDirection: 'row',
  },
  boldText: {
    fontWeight: 'bold',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '50%',
  },
  waitingText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
