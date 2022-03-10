import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    flex: 1,
  },
  searchBox: {
    borderRadius: 25,
    borderColor: 'lightgray',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    width: 50,
    height: 50,
  },
  input: {
    width: '80%',
    paddingHorizontal: 10,
  },
  roundedText: {
    padding: 6,
    width: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginVertical:5,
    marginStart:5
  },
  innerText:{
    fontWeight: 'bold',
    fontSize: 15,


  }
});
