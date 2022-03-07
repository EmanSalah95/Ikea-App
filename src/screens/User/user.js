import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './style';

export default function User({navigation}) {
  return (
    <View style={styles.containeer}>
      <View style={styles.firstSec}> 
        <Text style={styles.userHeading}>PROFILE</Text>
        <Text style={styles.userSubHeading}>Log in to save your shopping lists</Text>
        <Text style={styles.userSubHeading}>and access them from any device.</Text>
        <Button style={styles.logBtn} mode='contained' onPress={() => navigation.navigate('Login')} >Login</Button>
        <Button style={styles.signBtn} mode='contained' onPress={() => navigation.navigate('Sign')} >Sign Up</Button>
        <Text style={styles.txtQues}>Forget Password?</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.secondSec}>
        <Text >Settings</Text>
        <View style={styles.line}></View>
        <Text >Information</Text>
      </View>
    </View>
  );
}
