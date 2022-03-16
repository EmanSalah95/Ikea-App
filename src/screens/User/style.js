import { StyleSheet } from "react-native";
import { h, w } from "../../constants/dimentions";
import i18n from 'i18n-js';

export const styles = StyleSheet.create({
    // Start Style For UserPage
    container: {
        backgroundColor: "white",
        flex: 1
    },

    firstSec: {
        paddingBottom: 30,
    },

    userHeading: { 
        fontSize: 28, 
        fontWeight: "bold", 
        margin: 15 ,
        textAlign: 'center',
    },

    userSubHeading: {
        fontSize: 18,
        color: "gray",
        textAlign: 'center',
    },

    logBtn: {
        width: "100%",
        marginTop: 20,
        // padding: 10,
        height:w*0.12,
        width: "92%",
        backgroundColor: "#2e73b8",
	    alignSelf: "center",
        justifyContent:'center'
    },

    signBtn: {
        width: "100%",
        marginTop: 18,
        backgroundColor: "lightgray",
        height:w*0.12,
        width: "92%",
	    alignSelf: "center",
        justifyContent:'center'
    },
    
    txtQues: {
        color: "#2e73b8",
        fontSize: 18,
        margin: 10,
        textAlign: 'center',
    },

    secondSec: {
        marginLeft: 15,
        paddingTop: 20,
        fontSize: 18,
        textAlign: "right"
    },

    space: {
        backgroundColor: "#E7F0EF",
        height: 20
    },

    line: { 
        borderColor: 'gainsboro',
        marginTop: 15, 
        marginBottom: 15,
        borderBottomWidth: 2 ,
    },
    // End Style For UserPage

    // Start Style For LogPage
    userSubbHeading: {
        marginBottom: 28,
        fontSize: 18,
        color: "gray",
        textAlign: 'center',
        paddingHorizontal:10,
    },

    view: {
        marginLeft: "4%",
        marginRight: "4%",
    },

    input: {
        width: "100%",
        height: 30,
        // padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        backgroundColor: "white",
        // textAlign:'left'
    },

    inputext: {
        width: 200,
        height: 44,
        padding: 10,
        textAlign:'center',
        fontWeight:'bold',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },

    displayTxt: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
    },

    txxt: {
        textAlign: 'center',
        color: '#2e73b8',
        marginLeft: 10
    },

    txxtColor:{
        color: '#000'
    },
    // End Styles for LogIn page

    // Start Style For SignIn Page
    signInSub: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 20,
        color: "gray"
    },

    signTxt: {
        padding: 5,
        fontSize: 17,
        paddingLeft: 12
    },

    signPage: {
        textAlign: "left"
    },

    signForm: {
        marginTop: 50,
        width: "92%",
        margin: "3%"
    },
    // End Style For SignIn Page

    textDanger: {
        color: "#B71525"
    },

    profileContainer:{
        backgroundColor:'#EEEEEE',
        height:h*0.15,
        alignItems:'center',
        justifyContent:'center'
    },
    settingsContainer:{
        backgroundColor:'white',
        height:h,
        padding:20
    },
    dividerStyle:{
        marginVertical:20
    }
});