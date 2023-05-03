import { StyleSheet } from "react-native";

export const buttonStyle = StyleSheet.create({
    button: {
        backgroundColor: "#D9007D",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
        shadowColor: '#471527',
        shadowOffset: { width: 0, height: 7 },
    },
    label: {
        textAlign: "center",
        fontFamily: 'Poor Story',
        fontSize: 28,
        color: "white",
        textTransform: "uppercase"
    }
})