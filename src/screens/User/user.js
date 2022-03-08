import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { updateUserStorageByID } from '../../services/firebase';
import { useSelector } from 'react-redux';

export default function User({ navigation }) {
  const user = useSelector((state) => state.user)
  const [id, setID] = useState();
  const getUser = async () => {
    const id = await AsyncStorage.getItem('UID');
    if (id != null) {
      setID(id)
      updateUserStorageByID(id);
    }
    else {
      setID(null)
    }
  }
  useEffect(() => {
    getUser();
    console.log(id)
    console.log('user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', user, user && user.id != '')
  }, [])
  return (
    <View style={styles.container}>
      {user && user.id != '' ?
        <View style={styles.profileContainer}>
          <Text style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: 15 }}>Welcome</Text>
          <Text style={{ color: 'black' }}>{user?.user?.FirstName} {user?.user?.LastName}</Text>
        </View>
        :
        <>
          <View style={styles.firstSec}>
            <Text style={styles.userHeading}>PROFILE</Text>
            <Text style={styles.userSubHeading}>Log in to save your shopping lists</Text>
            <Text style={styles.userSubHeading}>and access them from any device.</Text>
            <Button style={styles.logBtn} mode='contained' onPress={() => navigation.navigate('Login')} >Login</Button>
            <Button style={styles.signBtn} mode='contained' onPress={() => navigation.navigate('Sign')} >Sign Up</Button>
            <Text style={styles.txtQues}>Forget Password?</Text>
          </View>
          <View style={styles.space}></View>
        </>
      }
      <View style={styles.secondSec}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileSettings')}
        >
          <Text >Settings</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        {user.id != '' &&
          <TouchableOpacity
            onPress={() => navigation.navigate('OrdersHistory')}
          >
            <Text >Your orders</Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}
