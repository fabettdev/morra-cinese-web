// React
import React, { useState, useEffect } from "react";
// Style
// React Native
import { View, Text, useWindowDimensions, Image } from "react-native";
// Routing
import { useLocation } from "react-router-dom";
// Morra Cinese Components Library
import { Controls, SpaceBackground, BattleButton, BattleBoard } from "morra-cinese-components";
// Images
var baseLeftHand = require("../assets/images/game/base_left.png");
var baseRightHand = require("../assets/images/game/base_right.png");

function Test(props) {
    const [state, setState] = useState({
        count: 0,
        isReturning: false,
        rotate: props.direction === "right" ? 45 : 315,
        translate: props.direction === "right" ? -45 : 45,
    })

    if (props.direction === "right") console.log(state.count)

    useEffect(() => {
        if (state.count === 3) return;

        const interval = setInterval(function () {
            setState(prevState => {
                let isReturning = prevState.isReturning;
                let rotate = null;
                let translate = null;
                let count = prevState.count;

                if (prevState.rotate === props.rotateEnd && prevState.translate === props.translateEnd) {
                    isReturning = true;
                    if (props.direction === "right") {
                        count += 1;
                    }
                }

                if (!props.direction) {
                    if (prevState.rotate === props.rotateStart && prevState.translate === props.translateStart) {
                        count += 1;
                    }
                }

                if (prevState.rotate === props.rotateStart && prevState.translate === props.translateStart) {
                    if (prevState.count === 3) return { prevState };
                    isReturning = false;
                }

                if (isReturning) {
                    rotate = prevState.rotate - 3;
                    translate = prevState.translate - 3;
                } else {
                    rotate = prevState.rotate + 3;
                    translate = prevState.translate + 3;
                }

                return {
                    ...prevState,
                    count,
                    isReturning,
                    rotate,
                    translate,
                }
            })
        }, 10);

        return () => clearInterval(interval);
    }, [state])

    return (
        <View style={{ width: 250, height: 250, borderRadius: 150, backgroundColor: "#271D4F", position: "relative" }}>
            <Image source={require("../assets/images/game/0.png")} style={{ width: 170, height: 170, position: "absolute", left: 40, bottom: 50, transform: [{ rotate: `${state.rotate}deg` }, { translate: state.translate }, { scaleX: props.direction === "right" ? 1 : -1 }] }} />
            <Image source={baseLeftHand} style={{ width: 170, height: 170, position: "absolute", left: 40, bottom: 0 }} />
        </View>
    );
}

export default Test;