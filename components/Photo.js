import { View, useColorScheme } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import MyButton from "./MyButton";

import { darkStyles, lightStyles } from "../data/theme";

export default function Photo({ image, setUser }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    async function changePhoto() {
        const result = await launchImageLibrary();
        if (typeof result.assets[0] == "object") {
            setUser((user) => ({ ...user, image: result.assets[0] }));
        }
    }

    return (
        <View style={{ ...styles.imageView, borderStyle: "solid" }}>
            <Image style={styles.image} source={image} />
            <MyButton
                onPress={changePhoto}
                text="Change Photo"
                style={styles.changePhoto}
            />
        </View>
    );
}