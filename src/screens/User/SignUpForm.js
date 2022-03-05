import { Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { styles } from './style';
import { signup, useAuth } from '../../Firebase/fireStoreAuthConfig';
import React, { useState } from 'react'
import { addDocByID } from '../../services/firebase';

export default function SignUpForm({ navigation }) {
  
    const [firstName, setFirstName] = useState( '' )
    const [surName, setSurName] = useState( '' )
    const [Email, setEmail] = useState( '' )
    const [Password, setPassword] = useState( '' )
    
    const [errors, setError] = useState({
        firstNameErr: null,
        surNameErr: null,
        EmailErr: null,
        PasswordErr: null,
    });


    // Function to hadndle change in any input and write into it
    const handleChangeInInput = () => {
        const regName = /^\w[a-zA-Z]{3,}/;
        const regEmail = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/;
        const regPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?&]{8,}$/;


        // Validate Name Input
        if (firstName) {
        if (!regName.test(firstName)) {
            setError({
            ...errors,
            firstNameErr: 'Name is not Allowed',
            });
        } else {
            setError({
            ...errors,
            firstNameErr: '',
            });
        }
        } else if (surName) {
        if (!regName.test(surName)) {
            setError({
            ...errors,
            surNameErr: 'Name is not Allowed',
            });
        } else {
            setError({
            ...errors,
            surNameErr: '',
            });
        }
        }

        // // // Validate Email Input
        else if (Email) {
        if (!regEmail.test(Email)) {
            setError({
            ...errors,
            EmailErr: 'Email is not valid',
            });
        } else {
            setError({
            ...errors,
            EmailErr: '',
            });
        }
        }

        // // // Validate Password Input
        else if (Password) {
        if (!regPassword.test(Password)) {
            setError({
            ...errors,
            PasswordErr: 'Password is not valid',
            });
        } else {
            setError({
            ...errors,
            PasswordErr: '',
            });
        }
        }
    };

    async function handleSignup() {
        
        var userObj = {
        FirstName: firstName,
        LastName: surName,
        Email: Email,
        Password: Password,
        };
        
        try {
            await signup(Email, Password).then(
              userCredentials => {
                addDocByID('users', userCredentials.user.uid, userObj).then(() => {
                  localStorage.setItem('UID', userCredentials.user.uid);
                  navigation.navigate('Products')
                  console.log('function signIn Success');
                });
              }
            );
          } 
        catch {
            Alert('Email is alredy exist!');
            console.log('function signIn Failed');
        }
        
        console.log(userObj);
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.signForm}>
                <TextInput
                placeholder="First Name"
                style={styles.input}
                onChangeText={(firstName) => setFirstName(firstName)}
                value={firstName}
                />
                <Text style={styles.textDanger}>{errors.firstNameErr}</Text>

                <TextInput
                    placeholder="Surname"
                    style={styles.input}
                    onChangeText={(surName) => setSurName(surName)}
                    value={surName}
                />
                <Text style={styles.textDanger}>{errors.surNameErr}</Text>

                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(Email) => setEmail(Email)}
                    value={Email}
                />
                <Text style={styles.textDanger}>{errors.EmailErr}</Text>

                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(Password) => setPassword(Password)}
                    value={Password}
                />
                <Text style={styles.textDanger}>{errors.PasswordErr}</Text>
                
                <Button style={styles.logBtn} mode='contained' onPress={handleSignup} >SIGN UP</Button>
            </View>
        </View>
    );
}
