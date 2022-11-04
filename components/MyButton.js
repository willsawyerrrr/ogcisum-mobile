import { Text, TouchableOpacity } from "react-native";

import { styles } from "../data/theme";

export default function MyButton({ backgroundColour, colour, onPress, text }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.button,
                backgroundColor: backgroundColour,
            }}
        >
            <Text
                style={{
                    ...styles.buttonText,
                    color: colour,
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}
