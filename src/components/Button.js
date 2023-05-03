import React from 'react'
// Native
import { TouchableOpacity, Text } from 'react-native'
// Style
import { buttonStyle } from './buttonStyle'


function Button(props) {
    function onPressHandler() {
        props.onPressButton();
    }

    return (
        <TouchableOpacity
            onPress={onPressHandler}
            style={buttonStyle.button}
        >
            <Text style={buttonStyle.label}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default Button;