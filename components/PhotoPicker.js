import { View, useColorScheme } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import MyButton from "./MyButton";

import { colours as colourSource, styles } from "../data/theme";

export default function PhotoPicker({ setUser }) {
    const colourScheme = useColorScheme();
    const colours = colourSource[colourScheme];

    async function addPhoto() {
        const result = await launchImageLibrary();
        if (typeof result.assets[0] == "object") {
            setUser((user) => ({ ...user, image: result.assets[0] }));
        }
    };

    return (
        <View style={
            {
                ...styles.imageView,
                borderStyle: "dashed",
                borderColor: colours.fgColourLighter,
            }
        }>
            <MyButton
                backgroundColour={colours.fgColour}
                colour={colours.bgColour}
                onPress={addPhoto}
                text="Add Photo"
            />
        </View>
    );
}