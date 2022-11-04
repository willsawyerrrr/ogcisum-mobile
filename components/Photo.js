import { View, useColorScheme } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import MyButton from "./MyButton";

import { colours as colourSource, styles } from "../data/theme";

export default function Photo({ image, setUser }) {
    const colourScheme = useColorScheme();
    const colours = colourSource[colourScheme];

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
                backgroundColour={colours.bgColour}
                colour={colours.fgColour}
                onPress={changePhoto}
                text="Change Photo"
            />
        </View>
    );
}