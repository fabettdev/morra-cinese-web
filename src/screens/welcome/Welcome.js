// Router
import { useNavigate } from "react-router-dom";

// Native
import { Image, View, Text, useWindowDimensions, TouchableOpacity, Platform, StyleSheet, TextInput, Dimensions } from "react-native";

// Custom library imports
import { TextTitle, Form, LeaderboardButton } from "morra-cinese-components";

// Style
import { welcomeStyle } from "./welcomeStyle";

// Images
var logo = require("../../assets/images/logo/logo.png");
var orangeChallenger = require("../../assets/images/welcome/challenger.png");
var blueChallenger = require("../../assets/images/welcome/astronaut-bg.png");

function Welcome() {
    const navigate = useNavigate();
    const { width } = useWindowDimensions();

    function goToGame(name) {
        navigate("/game", {
            state: {
                name,
            },
        });
    }

    function LeaderboardButton(props) {
        return (
            <View style={leaderboardButtonStyle.wrapper}>
                <Image
                    source={props.image}
                    resizeMode="contain"
                    style={leaderboardButtonStyle.image}
                />
                <TouchableOpacity>
                    <TextTitle title="Leaderboard" size={Platform.OS === "web" ? (width > 768 ? 40 : 20) : 20} />
                </TouchableOpacity>
            </View>
        );
    }

    const leaderboardButtonStyle = StyleSheet.create({
        wrapper: {
            position: Platform.OS === "web" ? "fixed" : "absolute",
            top: Platform.OS === "web" ? (width > 768 ? 20 : 10) : Dimensions.get("window").height - 70,
            right: Platform.OS === "web" ? (width > 768 ? 50 : 10) : 20,
            flexDirection: "row",
            alignItems: "center",
        },
        image: {
            width: Platform.OS === "web" ? (width > 768 ? 120 : 50) : 60,
            height: Platform.OS === "web" ? (width > 768 ? 120 : 50) : 60,
        },
    });



    return (
        <View style={welcomeStyle.wrapper}>
            <TextTitle title="Rock, Paper, Scissors!" size={width > 768 ? 60 : 32} />
            <Image source={logo} style={welcomeStyle.logo} resizeMode="contain" />
            <Text style={welcomeStyle.cta}>Insert your name</Text>
            <View style={{ maxWidth: "70%" }}>
                <Form onSubmit={goToGame} noOutline={true} />
            </View>
            {
                width > 768 &&
                <Image
                    source={orangeChallenger}
                    style={welcomeStyle.challenger}
                    resizeMode="contain"
                />
            }
            <LeaderboardButton image={width > 768 ? blueChallenger : orangeChallenger} />
        </View>
    );
}

export default Welcome;
