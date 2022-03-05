import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    // Start Style For UserPage
    container: {
        backgroundColor: "white",
        height: "100%", 
        textAlign: "center",
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
        padding: 10,
        width: "92%",
        backgroundColor: "#2e73b8",
	    alignSelf: "center"
    },

    signBtn: {
        width: "100%",
        marginTop: 18,
        color: 'black',
        backgroundColor: "lightgray",
        padding: 10,
        width: "92%",
        alignSelf: "center"
    },
    
    txtQues: {
        color: "blue",
        fontSize: 18,
        margin: 10,
        textAlign: 'center',
    },

    secondSec: {
        marginLeft: 15,
        paddingTop: 20,
        fontSize: 18,
        textAlign: "left"
    },

    space: {
        backgroundColor: "#F0F4F8",
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
        fontSize: 19,
        color: "gray",
        textAlign: 'center',
    },

    view: {
        marginLeft: "4%",
        marginRight: "4%",
    },

    input: {
        width: "100%",
        height: 30,
        padding: 15,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        backgroundColor: "white"
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
        marginTop: 20,
    },

    txxt: {
        textAlign: 'center',
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
        color: "red"
    },
});