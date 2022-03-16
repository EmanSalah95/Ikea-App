import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { updateUserStorageByID } from '../../services/firebase';
import { useSelector } from 'react-redux';
import i18n from 'i18n-js';

export default function User({ navigation }) {
  const user = useSelector(state => state.user);
  const [id, setID] = useState();
  const getUser = async () => {
    const id = await AsyncStorage.getItem('UID');
    if (id != null) {
      setID(id);
      updateUserStorageByID(id);
    } else {
      setID(null);
    }
  };
  useEffect(() => {
    getUser();
    console.log(id);
    console.log(
      'user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
      user,
      user && user.id != ''
    );
  }, []);
  return (
    <View style={styles.container}>
      {user && user.id != '' ? (
        <View style={styles.profileContainer}>
          <Text
            style={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: 15,
            }}
          >
            {i18n.t('Welcome')}
          </Text>
          <Text style={{ color: 'black' }}>
            {user?.user?.FirstName} {user?.user?.LastName}
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.firstSec}>
            <Text style={styles.userHeading}>{i18n.t('Profile')}</Text>
            <Text style={styles.userSubHeading}>
              {i18n.t('LoginDescription')}
            </Text>
            {/* <Text style={styles.userSubHeading}>and access them from any device.</Text> */}
            <Button
              style={styles.logBtn}
              mode='contained'
              onPress={() =>
                navigation.navigate('Login', {
                  navigatedFromShoppingList: false,
                })
              }
            >
              {i18n.t('Login')}
            </Button>
            <Button
              style={styles.signBtn}
              mode='contained'
              onPress={() => navigation.navigate('Sign')}
            >
              <Text style={{color:'black'}}>
                 {i18n.t('SignUp')}
              </Text>
              
            </Button>
            <Text style={styles.txtQues}>{i18n.t('ForgotPassword')}</Text>
          </View>
          <View style={styles.space}></View>
        </>
      )}
      <View style={styles.secondSec}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileSettings')}
        >
          <Text style={{ textTransform: 'capitalize' }}>
            {i18n.t('Settings')}
          </Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        {user.id != '' && (
          <TouchableOpacity onPress={() => navigation.navigate('OrdersTabs')}>
            <Text>{i18n.t('YourOrders')}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
