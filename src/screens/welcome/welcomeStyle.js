import { StyleSheet } from "react-native";

export const welcomeStyle = StyleSheet.create({
    wrapper: {
        padding: 30,
        backgroundColor: "#36397750",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        position: "relative"
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    cta: {
        color: "white",
        fontFamily: "Poor Story",
        fontSize: 34,
        marginBottom: 20,
    },
    challenger: {
        position: "absolute",
        left: "10%",
        top: "50%",
        width: 150,
        height: 150
    }
})