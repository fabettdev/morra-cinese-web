// Router
import { useNavigate } from "react-router-dom";
// Style
import { welcomeStyle } from "./welcomeStyle";
// Native
import { Image, View, Text } from "react-native";
// Components
import TextTitle from "../../components/TextTitle";
import Form from "../../components/Form";
import LeaderboardButton from "../../components/LeaderboardButton";
// Images
var logo = require("../../assets/images/logo/logo.png");
var orangeChallenger = require("../../assets/images/welcome/challenger.png");
var blueChallenger = require("../../assets/images/welcome/astronaut-bg.png");

function Welcome() {
    const navigate = useNavigate();

    function test(name) {
        navigate("/game", {
            state: {
                name,
            }
        })
    }

    return (
        <View style={welcomeStyle.wrapper}>
            <TextTitle title="Rock, Paper, Scissors!" />
            <Image source={logo} style={welcomeStyle.logo} resizeMode="contain" />
            <Text style={welcomeStyle.cta}>Insert your name</Text>
            <Form onSubmit={test} />
            <Image source={orangeChallenger} style={welcomeStyle.challenger} resizeMode="contain" />
            <LeaderboardButton image={blueChallenger} />
        </View>
    )
}

export default Welcome;