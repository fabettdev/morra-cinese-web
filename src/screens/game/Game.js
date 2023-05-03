import React from 'react'
// Native
import { View, Text } from 'react-native';
import { useLocation } from 'react-router-dom';

function Game() {
    const location = useLocation();
    return (
        <View>
            <Text style={{ color: "white" }}>{location.state?.name}</Text>
        </View>
    )
}

export default Game