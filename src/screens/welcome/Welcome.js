import { Image, View, Text, useWindowDimensions } from "react-native";
// Router
import { useNavigate } from "react-router-dom";
// Native
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
        if (name.trim() === "") return;
        navigate("/game", {
            state: {
                name: name.trim(),
            },
        });
    }

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
