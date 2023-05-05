// React
import React, { useState } from "react";
// Style
import { gameStyle } from "./gameStyle";
// React Native
import { View, useWindowDimensions, Image, Text } from "react-native";
// Routing
import { useLocation } from "react-router-dom";
// Morra Cinese Components Library
import { Controls, SpaceBackground, BattleButton, BattleBoard, MoveIcon, FightingIcon, Button } from "morra-cinese-components";

// Images
var spacecraftImage = require("../../assets/images/game/image-background-1.png");
var spaceImage = require("../../assets/images/welcome/background.png");
var controlsLeft = require("../../assets/images/game/controls_left.png");
var controlsRight = require("../../assets/images/game/controls_right.png");
var screenBoard = require("../../assets/images/game/screen.png");
var baseLeftHand = require("../../assets/images/game/base_left.png");
var baseRightHand = require("../../assets/images/game/base_right.png");
var moveLeftHand = require("../../assets/images/game/user0.png");
var moveRightHand = require("../../assets/images/game/cpu0.png");
var rock = require("../../assets/images/game/user0.png");
var paper = require("../../assets/images/game/user1.png");
var scissors = require("../../assets/images/game/user2.png");
var cpu = require("../../assets/images/game/cpu.png");

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
    const moveSize = width > 768 ? 120 : 75;
    const cpuSize = width > 768 ? 250 : 160;
    const choosendHandDimensions = width > 768 ? 200 : 120;

    const [state, setState] = useState({
        userMove: "",
        cpuMove: "",
        userScore: 0,
        cpuScore: 0,
        resultMessage: "",
        isFighting: false,
        hasRoundEnded: false,
    });

    function selectUserMove(move) {
        setState({
            ...state,
            userMove: move,
        });
    }

    function startFight() {
        const cpuMove = generateCpuMove();
        let result = getWinner(state.userMove, cpuMove);
        let resultMessage = "Pareggio";
        let userScore = state.userScore;
        let cpuScore = state.cpuScore;

        if (result === 1) {
            userScore++;
            resultMessage = "Hai vinto il round!";
        }

        if (result === -1) {
            cpuScore++;
            resultMessage = "Hai perso il round!";
        }

        if (userScore === 3) {
            resultMessage = "Hai vinto la partita!";
        }

        if (cpuScore === 3) {
            resultMessage = "Hai perso la partita!";
        }

        setState({
            ...state,
            userScore,
            cpuScore,
            cpuMove,
            resultMessage,
            isFighting: true,
        })
    }

    function setEndRound() {
        setState({
            ...state,
            hasRoundEnded: true,
        })
    }

    function generateCpuMove() {
        return Math.floor((Math.random() * 3));
    }

    function getWinner(userIndex, cpuIndex) {
        const matrix = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];
        return matrix[userIndex][cpuIndex];
    }

    function resetGame() {
        let userScore = state.userScore;
        let cpuScore = state.cpuScore;

        if (userScore === 3 || cpuScore === 3) {
            userScore = 0;
            cpuScore = 0;
        }

        setState({
            ...state,
            userScore,
            cpuScore,
            userMove: "",
            cpuMove: "",
            resultMessage: "",
            isFighting: false,
            hasRoundEnded: false,
        })
    }

    return (
        <SpaceBackground bgImage={backgroundImage} >
            <View style={[gameStyle.container, gameStyleDirection, containerHeight]}>
                {
                    width > 768 &&
                    <Controls image={controlsLeft} width={100} height={360} />
                }

                <BattleBoard username={location.state?.name} fontSize={boardFontSize} width={boardDimensions} height={boardDimensions * 0.8} image={screenBoard}>
                    {
                        !state.isFighting ?
                            <>
                                <MoveIcon
                                    image={rock}
                                    size={moveSize}
                                    selectedMove={0}
                                    selectUserMove={selectUserMove}
                                    userMove={state.userMove}
                                />
                                <MoveIcon
                                    image={paper}
                                    size={moveSize}
                                    selectedMove={1}
                                    selectUserMove={selectUserMove}
                                    userMove={state.userMove}
                                />
                                <MoveIcon
                                    image={scissors}
                                    size={moveSize}
                                    selectedMove={2}
                                    selectUserMove={selectUserMove}
                                    userMove={state.userMove}
                                />
                            </>
                            :
                            <FightingIcon
                                direction="right"
                                containerDimensions={containerDimensions}
                                speed={speed}
                                handDimensions={handDimensions}
                                moveHand={moveLeftHand}
                                baseHand={baseLeftHand}
                                choosenHand={require(`../../assets/images/game/user${state.userMove}.png`)}
                                choosendHandDimensions={choosendHandDimensions}
                                setEndRound={setEndRound}
                            />
                    }
                </BattleBoard>


                <View style={{ alignItems: "center", width: 200 }}>
                    {!!state.hasRoundEnded &&
                        <View>
                            <Text style={{ color: "white", textAlign: "center", fontFamily: "Poor Story", fontSize: 30 }}>{state.resultMessage}</Text>
                            <Text style={{ color: "white", textAlign: "center", fontFamily: "Poor Story", fontSize: 30 }}>{state.userScore} - {state.cpuScore}</Text>
                            <Button label="play again" onPressButton={resetGame} fontSize={28} />
                        </View>
                    }
                    {!state.hasRoundEnded &&
                        <BattleButton
                            dimensions={buttonDimensions}
                            buttonType={state.userMove !== "" ? "battle" : ""}
                            fontSize={buttonFontSize}
                            onPressButton={startFight}
                        />
                    }
                </View>

                <BattleBoard username="CPU" fontSize={boardFontSize} width={boardDimensions} height={boardDimensions * 0.8} image={screenBoard}>
                    {
                        !state.isFighting ?
                            <Image
                                source={cpu}
                                style={{
                                    width: cpuSize,
                                    height: cpuSize,
                                    borderRadius: 100,
                                }}
                                resizeMode="contain"
                            />
                            :
                            <FightingIcon
                                containerDimensions={containerDimensions}
                                speed={speed}
                                handDimensions={handDimensions}
                                moveHand={moveRightHand}
                                baseHand={baseRightHand}
                                choosenHand={require(`../../assets/images/game/user${state.cpuMove}.png`)}
                                choosendHandDimensions={choosendHandDimensions}
                            />
                    }
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