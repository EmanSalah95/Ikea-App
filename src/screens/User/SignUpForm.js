import { Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { styles } from './style';
import { signup } from '../../Firebase/fireStoreAuthConfig';
import React, { useState, useEffect } from 'react'
import { addDocByID } from '../../services/firebase';

export default function SignUpForm({ navigation }) {
  
    const [firstName, setFirstName] = useState( '' )
    const [surName, setSurName] = useState( '' )
    const [Email, setEmail] = useState( '' )
    const [Password, setPassword] = useState( '' )
    const [firstNameErr, setFirstNameErr] = useState( '' )
    const [surNameErr, setSurNameErr] = useState( '' )
    const [EmailErr, setEmailErr] = useState( '' )
    const [PasswordErr, setPasswordErr] = useState( '' )
    const [allValid, setAllValid] = useState(
        setFirstNameErr === null && setSurNameErr === null && setEmailErr === null && setPasswordErr === null
      );


    // Function to hadndle change in any input and write into it
    const handleValidateInput = () => {
        const regName = /^\w[a-zA-Z]{2,}/;
        const regEmail = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/;
        const regPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?&]{8,}$/;


        // Validate Name Input
        if (firstName) {
        if (!regName.test(firstName)) {
            setFirstNameErr('Name is not Allowed')
            
        } else {
            setFirstNameErr('')
            
        }
        } 
        if (surName) {
        if (!regName.test(surName)) {
            setSurNameErr('Name is not Allowed')
            
        } else {
            setSurNameErr('')
            
        }
        }

        // // // Validate Email Input
        if (Email) {
        if (!regEmail.test(Email)) {
            setEmailErr('Email is not valid')
            
        } else {
            setEmailErr('')
            
        }
        }

        // // // Validate Password Input
        if (Password) {
        if (!regPassword.test(Password)) {
            setPasswordErr('Password is not valid')
            
        } else {
            setPasswordErr('')
            
        }
        }
    };

    async function handleSignup(e) {
        
        var userObj = {
        FirstName: firstName,
        LastName: surName,
        Email: Email,
        Password: Password,
        };

        handleValidateInput()

        // if (!allValid) {
        //     e.preventDefault();
        //     console.log('submission prevented,, form is notValied')
        // } 
        // else {
            try {
                await signup(Email, Password).then(
                    userCredentials => {
                    addDocByID('users', userCredentials.user.uid, userObj).then(() => {
                        localStorage.setItem('UID', userCredentials.user.uid);
                        navigation.navigate('Products')
                        console.log('function signIn Success and data stored in firebase');
                    });
                    }
                );
            } 
            catch {
                Alert.alert('Email is alredy exist!');
                console.log('function signIn Failed');
            }
        // }
        
        console.log(userObj);
    }

    useEffect(()=>{
        setAllValid(setFirstNameErr === null && setSurNameErr === null && setEmailErr === null && setPasswordErr === null);
      },[])

    return (
        <View style={styles.container}>
            <View style={styles.signForm}>
                <TextInput
                placeholder="First Name"
                style={styles.input}
                onChangeText={(firstName) => setFirstName(firstName)}
                value={firstName}
                />
                <Text style={styles.textDanger}>{firstNameErr}</Text>

                <TextInput
                    placeholder="Surname"
                    style={styles.input}
                    onChangeText={(surName) => setSurName(surName)}
                    value={surName}
                />
                <Text style={styles.textDanger}>{surNameErr}</Text>

                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(Email) => setEmail(Email)}
                    value={Email}
                />
                <Text style={styles.textDanger}>{EmailErr}</Text>

                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(Password) => setPassword(Password)}
                    value={Password}
                />
                <Text style={styles.textDanger}>{PasswordErr}</Text>
                
                <Button style={styles.logBtn} mode='contained' onPress={handleSignup} disabled={firstName=='' || surName=='' || Email=='' || Password==''} >SIGN UP</Button>
            </View>
        </View>
    );
}
