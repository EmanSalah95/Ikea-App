import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { styles } from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useContext } from 'react';
import { ModalContext } from '../../context';

export default function HomeHeader() {
  const { isSearchVisible, setSearchVisible}=useContext(ModalContext);
  return (
    <View style={styles.homeSearch}>
      <TouchableHighlight
        underlayColor='#DDD'
        style={styles.searchIcon}
        onPress={() => setSearchVisible(true)}
      >
        <MaterialIcons name='search' color={'#000'} size={20} />
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor='#DDD'
        style={styles.searchText}
        onPress={() => setSearchVisible(true)}
      >
          <Text>Search</Text>
      </TouchableHighlight>

    </View>
  );
}
