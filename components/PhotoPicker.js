import { View, useColorScheme } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import MyButton from "./MyButton";

import { darkStyles, lightStyles } from "../data/theme";

export default function PhotoPicker({ updateImage }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    async function addPhoto() {
        const result = await launchImageLibrary();
        if (typeof result.assets[0] === "object") {
            updateImage(result.assets[0]);
        }
    };

    return (
        <View style={{ ...styles.imageView, borderStyle: "dashed" }}>
            <MyButton
                onPress={addPhoto}
                style={styles.addPhoto}
                text="Add Photo"
            />
        </View>
    );
}