import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function HomeHeader() {
  return (
    <View style={styles.homeSearch}>
      <TouchableHighlight
        underlayColor='#DDD'
        style={styles.searchIcon}
        onPress={() => console.log('p')}
      >
        <MaterialIcons name='search' color={'#000'} size={20} />
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor='#DDD'
        style={styles.searchText}
        onPress={() => console.log('p')}
      >
          <Text>Search</Text>
      </TouchableHighlight>

    </View>
  );
}
