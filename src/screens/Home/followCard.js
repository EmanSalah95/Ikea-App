import { Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from '../../styles';

export default function FollowCard() {
  return (
    <Card style={styles.followCard}>
      <Text style={[styles.boldTitle, styles.center]}>Follow us!</Text>
      <Text style={[styles.news, styles.grayText]}>
        Get news, inspiration and much more
      </Text>

      <View style={styles.social}>
        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => console.log('p')}
        >
          <Entypo name='facebook-with-circle' color={'#0058a3'} size={35} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => console.log('p')}
        >
          <Entypo name='pinterest-with-circle' color={'red'} size={35} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialIcon}
          onPress={() => console.log('p')}
        >
          <Entypo name='youtube-with-circle' color={'red'} size={35} />
        </TouchableOpacity>
      </View>
    </Card>
  );
}
