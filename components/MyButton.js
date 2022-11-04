import { Text, TouchableOpacity, useColorScheme } from "react-native";

import { darkStyles, lightStyles } from "../data/theme";

export default function MyButton({ onPress, style, text }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...styles.button, ...style }}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}
