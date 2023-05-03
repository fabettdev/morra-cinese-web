import React from 'react'
// Native
import { View, Image, TouchableOpacity } from 'react-native';
import TextTitle from './TextTitle';
// Style
import { leaderboardButtonStyle } from './leaderboardButtonStyle';

function LeaderboardButton(props) {
    return (
        <View style={leaderboardButtonStyle.wrapper}>
            <Image
                source={props.image}
                resizeMode="contain"
                style={leaderboardButtonStyle.image}
            />
            <TouchableOpacity>
                <TextTitle
                    title="Leaderboard"
                    size={40}
                />
            </TouchableOpacity>
        </View>
    )
}

export default LeaderboardButton;