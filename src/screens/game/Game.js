// React
import React from "react";
// Style
import { gameStyle } from "./gameStyle";
// React Native
import { View } from "react-native";
// Routing
import { useLocation } from "react-router-dom";
// Morra Cinese Components Library
import { Controls, SpaceBackground } from "morra-cinese-components";
// Images
var backgroundImage = require("../../assets/images/game/image-background-1.png");
var controlsLeft = require("../../assets/images/game/controls_left.png");
var controlsRight = require("../../assets/images/game/controls_right.png");

function Game() {
    const location = useLocation();
    console.log("location name", location.state?.name);

    return (
        <SpaceBackground
            bgImage={backgroundImage}
        >
            <View style={gameStyle.container}>
                <Controls image={controlsLeft} width={100} height={360} />
                <Controls image={controlsRight} width={100} height={360} />
            </View>
        </SpaceBackground>
    );
}

export default Game;