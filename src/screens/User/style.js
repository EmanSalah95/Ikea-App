import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    // Start Style For UserPage
    container: {
        backgroundColor: "white",
        height: "100%"
    },

    firstSec: {
        paddingBottom: 30,
        textAlign: "center",
    },

    userHeading: { 
        fontSize: 28, 
        fontWeight: "bold", 
        margin: 15 ,
    },

    userSubHeading: {
        fontSize: 18,
        color: "gray"
    },

    logBtn: {
        width: "100%",
        marginTop: 20,
        padding: 10
    },

    signBtn: {
        width: "100%",
        marginTop: 18,
        color: 'black',
        backgroundColor: "lightgray",
        padding: 10,
    },
    
    txtQues: {
        color: "blue",
        fontSize: 18,
        margin: 10
    },

    secondSec: {
        marginLeft: 15,
        paddingTop: 20,
        fontSize: 18
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
});