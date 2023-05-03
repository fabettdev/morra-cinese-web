// Style
import { textTitleStyle } from "./textTitleStyle";
// Native
import { Text } from "react-native";

function TextTitle(props) {
    return (
        <>
            <Text style={[textTitleStyle.title, { fontSize: props.size ?? 72 }]}>{props.title}</Text>
        </>
    )
}

export default TextTitle;