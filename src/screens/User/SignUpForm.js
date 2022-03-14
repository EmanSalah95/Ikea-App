import { Text, View, Alert,KeyboardAvoidingView,Platform ,Keyboard,TouchableWithoutFeedback,ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { styles } from './style';
import { signup } from '../../Firebase/fireStoreAuthConfig';
import React, { useState, useEffect } from 'react'
import { addDocByID, updateUserStorageByID } from '../../services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js'

export default function SignUpForm({ navigation }) {

    const [firstName, setFirstName] = useState('')
    const [surName, setSurName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [PhoneNum, setPhoneNum] = useState('')

    const [firstNameErr, setFirstNameErr] = useState('')
    const [surNameErr, setSurNameErr] = useState('')
    const [EmailErr, setEmailErr] = useState('')
    const [PasswordErr, setPasswordErr] = useState('')
    const [PhoneNumErr, setPhoneNumErr] = useState('')

    const [allValid, setAllValid] = useState(
        firstNameErr === '' && surNameErr === '' && EmailErr === '' && PasswordErr === '' && PhoneNumErr == ''
    );


    // Function to hadndle change in any input and write into it
    const handleValidateInput = () => {
        const regName = /^\w[a-zA-Z]{2,}/;
        const regEmail = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){3,}(.com)$/;
        const regPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?&]{8,}$/;
        const regPhoneNum = /^01[0125][0-9]{8}$/;

        // Validate Name Input
        if (firstName) {
            if (!regName.test(firstName)) {
                setFirstNameErr(i18n.t('NameInvalid'))

            } else {
                setFirstNameErr('')

            }
        }
        if (surName) {
            if (!regName.test(surName)) {
                setSurNameErr(i18n.t('NameInvalid'))

            } else {
                setSurNameErr('')

            }
        }

        // Validate Phone Input
        if (PhoneNum) {
            if (!regPhoneNum.test(PhoneNum)) {
                setPhoneNumErr(i18n.t('PhoneInvalid'))
            } else {
                setSurNameErr('')
            }
        }

        // // // Validate Email Input
        if (Email) {
            if (!regEmail.test(Email)) {
                setEmailErr(i18n.t('EmailInvalid'))

            } else {
                setEmailErr('')

            }
        }

        // // // Validate Password Input
        if (Password) {
            if (!regPassword.test(Password)) {
                setPasswordErr(i18n.t('PasswordInvalid'))

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
            PhoneNum: PhoneNum
            // Password: Password,
        };

        handleValidateInput()

        if (!allValid) {
            e.preventDefault();
            console.log('submission prevented,, form is notValied')
        }
        else {
            await signup(Email, Password).then(
                userCredentials => {
                    addDocByID('users', userCredentials.user.uid, userObj).then(() => {
                        try {
                            AsyncStorage.setItem('UID', userCredentials.user.uid)
                            updateUserStorageByID(userCredentials.user.uid)
                            navigation.navigate('User')
                            console.log('function signIn Success and data stored in firebase');
                        } catch (e) {
                            console.log(e);
                        }
                    });
                }
            )
                .catch(err => {
                    if(allValid)
                    {
                        Alert.alert(i18n.t('EmailExist'));
                        console.log('function signIn Failed', err);
                    }
                })
        }

        console.log(userObj);
    }

    useEffect(() => {
        setAllValid(firstNameErr === '' && surNameErr === '' && EmailErr === '' && PasswordErr === '' && PhoneNumErr === '');
    }, [firstNameErr,surNameErr,EmailErr,PasswordErr,PhoneNumErr])

    return (
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView >
            <View style={styles.signForm}>
                <TextInput
                    placeholder={i18n.t('FirstName')}
                    style={styles.input}
                    onChangeText={(firstName) => setFirstName(firstName)}
                    value={firstName}
                    theme={{ colors: { primary: "#2e73b8"}}}
                />
                <Text style={styles.textDanger}>{firstNameErr}</Text>

                <TextInput
                    placeholder={i18n.t('Surname')}
                    style={styles.input}
                    onChangeText={(surName) => setSurName(surName)}
                    value={surName}
                    theme={{ colors: { primary: "#2e73b8"}}}

                />
                <Text style={styles.textDanger}>{surNameErr}</Text>

                <TextInput
                    placeholder={i18n.t('Mobile')}
                    style={styles.input}
                    onChangeText={(PhoneNum) => setPhoneNum(PhoneNum)}
                    value={PhoneNum}
                    theme={{ colors: { primary: "#2e73b8"}}}
                />
                <Text style={styles.textDanger}>{PhoneNumErr}</Text>

                <TextInput
                    placeholder={i18n.t('EmailPlaceholder')}
                    style={styles.input}
                    onChangeText={(Email) => setEmail(Email)}
                    value={Email}
                    theme={{ colors: { primary: "#2e73b8"}}}
                />
                <Text style={styles.textDanger}>{EmailErr}</Text>

                <TextInput
                    placeholder={i18n.t('Password')}
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(Password) => setPassword(Password)}
                    value={Password}
                    theme={{ colors: { primary: "#2e73b8"}}}
                />
                <Text style={styles.textDanger}>{PasswordErr}</Text>

                <Button style={styles.logBtn} mode='contained' onPress={handleSignup} disabled={firstName == '' || surName == '' || Email == '' || Password == '' || PhoneNum == ''} >
                    <Text style={{ color: 'white' }}>
                        {i18n.t('SignUp')}
                    </Text>
                </Button>
            </View>
        </ScrollView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
