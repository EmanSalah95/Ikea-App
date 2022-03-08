import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { getDocumentByID, updateUserStorageByID } from '../../services/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase/fireStoreAuthConfig';

export default function User({ navigation }) {
  // const [logged, setLogged] = useState(false);
  const user = useSelector((state) => state.user)
  const [exist, setExist] = useState(false);
  const [id, setID] = useState();
  // const getUser = async () => {
  //   const id = await AsyncStorage.getItem('UID');
  //   if (id != null) {
  //     getDocumentByID('users', id)
  //       .then((res) => {
  //         updateUserStorageByID(id);
  //         setLogged(true);
  //         setUser(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   }
  //   else {
  //     setUser({});
  //     setLogged(false);
  //     console.log("here")
  //   }
  // }
  // useEffect(() => {
  //   getUser();
  // }, [logged])

  // const [logged, setLogged] = useState(async () => await AsyncStorage.getItem('UID'));
  // const id
  const getUser = async () => {
    const id = await AsyncStorage.getItem('UID');
    if (id != null) {
      setID(id)
      updateUserStorageByID(id).then(() => {
        setExist(true);
      })
    }
    else {
      setID(null)
      setExist(false);
    }
  }
  useEffect(() => {
    getUser();
    console.log(id)
    console.log('user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',user,user&& user.id!='')
  }, [])
  // useEffect(()=>{
  //   if(id!=null)
  //   {
  //     setExist(true);
  //   }
  //   else{
  //     setExist(false);
  //   }
  // },[user])
  return (
    <View style={styles.container}>
      {user&& user.id!='' ?
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
        <Text >Information</Text>
      </View>
    </View>
  );
}
