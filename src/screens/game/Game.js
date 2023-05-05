// React
import React, { useState, useEffect } from "react";
// Style
import { gameStyle } from "./gameStyle";
// React Native
import { View, useWindowDimensions } from "react-native";
// Routing
import { useLocation } from "react-router-dom";
// Morra Cinese Components Library
import { Controls, SpaceBackground, BattleButton, BattleBoard, FightingIcon } from "morra-cinese-components";


import Test from "../testPlayer";


// Images
var spacecraftImage = require("../../assets/images/game/image-background-1.png");
var spaceImage = require("../../assets/images/welcome/background.png");
var controlsLeft = require("../../assets/images/game/controls_left.png");
var controlsRight = require("../../assets/images/game/controls_right.png");
var screenBoard = require("../../assets/images/game/screen.png");
var baseLeftHand = require("../../assets/images/game/base_left.png");
var baseRightHand = require("../../assets/images/game/base_right.png");
var moveHand = require("../../assets/images/game/0.png");

function Game() {
    const location = useLocation();
    const { width } = useWindowDimensions();
    const gameStyleDirection = width > 768 ? { flexDirection: "row" } : null;
    const backgroundImage = width > 768 ? spacecraftImage : spaceImage;
    const boardDimensions = width > 768 ? 500 : 300;
    const boardFontSize = width > 768 ? 28 : 20;
    const buttonDimensions = width > 768 ? 150 : 80;
    const buttonFontSize = width > 768 ? 30 : 17;
    const containerHeight = width > 768 ? { height: "75%" } : { height: "100%" };
    const speed = width > 768 ? 10 : 5;
    const containerDimensions = width > 768 ? 250 : 150;
    const handDimensions = width > 768 ? 170 : 80;

    return (
        <SpaceBackground bgImage={backgroundImage} >
            <View style={[gameStyle.container, gameStyleDirection, containerHeight]}>
                {
                    width > 768 &&
                    <Controls image={controlsLeft} width={100} height={360} />
                }

                <BattleBoard username={location.state?.name} fontSize={boardFontSize} width={boardDimensions} height={boardDimensions * 0.8} image={screenBoard}>
                    <FightingIcon direction="right" containerDimensions={containerDimensions} speed={speed} handDimensions={handDimensions} moveHand={moveHand} baseHand={baseLeftHand} />
                </BattleBoard>

                <BattleButton dimensions={buttonDimensions} fontSize={buttonFontSize} />

                <BattleBoard username="CPU" fontSize={boardFontSize} width={boardDimensions} height={boardDimensions * 0.8} image={screenBoard}>
                    <FightingIcon containerDimensions={containerDimensions} speed={speed} handDimensions={handDimensions} moveHand={moveHand} baseHand={baseRightHand} />
                </BattleBoard>

                {
                    width > 768 &&
                    <Controls image={controlsRight} width={100} height={360} />
                }
            </View>
        </SpaceBackground>
    );
}

export default Game;