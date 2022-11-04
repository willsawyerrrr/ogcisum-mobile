import { View, useColorScheme } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import MyButton from "./MyButton";

import { darkStyles, lightStyles } from "../data/theme";

export default function PhotoPicker({ setUser }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    async function addPhoto() {
        const result = await launchImageLibrary();
        if (typeof result.assets?.at(0) === "object") {
            setUser((user) => ({ ...user, image: result.assets[0] }));
        }
    };

    return (
        <View style={{ ...styles.imageView, borderStyle: "dashed" }}>
            <MyButton
                onPress={addPhoto}
                text="Add Photo"
                style={styles.addPhoto}
            />
        </View>
    );
}