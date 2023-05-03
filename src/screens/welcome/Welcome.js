// Router
import { useNavigate } from "react-router-dom";

// Native
import { Image, View, Text } from "react-native";

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

  function goToGame(name) {
    navigate("/game", {
      state: {
        name,
      },
    });
  }

  return (
    <View style={welcomeStyle.wrapper}>
      <TextTitle title="Rock, Paper, Scissors!" />
      <Image source={logo} style={welcomeStyle.logo} resizeMode="contain" />
      <Text style={welcomeStyle.cta}>Insert your name</Text>
      <Form onSubmit={goToGame} noOutline={true} />
      <Image
        source={orangeChallenger}
        style={welcomeStyle.challenger}
        resizeMode="contain"
      />
      <LeaderboardButton image={blueChallenger} />
    </View>
  );
}

export default Welcome;
