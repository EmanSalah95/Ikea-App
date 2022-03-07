import {
  TextInput,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../../styles/searchStyles';
import { styles as homeSt } from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { w } from '../../constants/dimentions';

export default function SearchInput({ closeModal }) {
  return (
    <>
      <View style={styles.searchBox}>
        <TouchableHighlight
          underlayColor='#DDD'
          style={[homeSt.searchIcon, styles.back]}
          onPress={closeModal}
        >
          <AntDesign name='arrowleft' color={'black'} size={26} />
        </TouchableHighlight>

        <TextInput
          style={{
            fontSize: 17,
            // width:w*0.75,
            flex: 1,
          }}
          placeholder="Try 'Smastad'"
        />

        <MaterialIcons
          name='photo'
          color={'black'}
          size={26}
          style={{ marginHorizontal: 15 }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, padding: 5, color: 'gray' }}>
          Your search and browse activity is only used to make results more
          relevant
        </Text>
      </View>

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>
        Popular searches
      </Text>

      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginTop: 15,
        }}
      >
        <View style={styles.roundedText}>
          <Text style={styles.innerText}>mirror</Text>
        </View>
        <View style={styles.roundedText}>
          <Text style={styles.innerText}>table</Text>
        </View>

        <View style={styles.roundedText}>
          <Text style={styles.innerText}>disk</Text>
        </View>

        <View style={styles.roundedText}>
          <Text style={styles.innerText}>bed</Text>
        </View>
      </View>
    </>
  );
}
