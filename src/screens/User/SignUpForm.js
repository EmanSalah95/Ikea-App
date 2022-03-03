import React, { Component } from 'react';
import { Text, Alert, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { styles } from './style';


export default function Loginscreen({ navigation }) {
  
    return (
        <View style={styles.container}>
            <View style={styles.signForm}>
                <TextInput
                placeholder="First Name"
                style={styles.input}
                />
                <TextInput
                    placeholder="Surname"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                />
                
                <Button style={styles.logBtn} mode='contained' onPress={() => navigation.navigate('Product')} >SIGN UP</Button>
            </View>
        </View>
    );
}
