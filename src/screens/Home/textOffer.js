import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../styles';

export default function TextOffer({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Products', {
          screenTitle: 'Mall of Arabia anniversary offers',
          condition:['SalePrice', '>=', 0]
        });
      }}
    >
      <View style={styles.offerContainer}>
        <Text style={styles.textOffer}>IKEA Mall of Arabia</Text>
        <Text style={styles.textOffer}>Anniversary offers</Text>
        <Text style={{ ...styles.offerParagraph, marginTop: 10 }}>
          Exclusive offers for IKEA Family members
        </Text>
        <Text style={styles.offerParagraph}>Valid only till 8 March 2022</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
