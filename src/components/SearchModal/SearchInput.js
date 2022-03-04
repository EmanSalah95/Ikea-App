import { TextInput, Text, View,TouchableHighlight } from 'react-native';
import { styles } from '../../styles/searchStyles';
import { styles as homeSt } from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchInput({closeModal}) {
  return (
    <View style={styles.searchBox}>
        <TouchableHighlight
        underlayColor='#DDD'
        style={[homeSt.searchIcon,styles.back]}
        onPress={closeModal}
      >
           <AntDesign name='arrowleft' color={'black'} size={26} />

      </TouchableHighlight>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Search Product"
        keyboardType="numeric"
      />
    </View>
  );
}


