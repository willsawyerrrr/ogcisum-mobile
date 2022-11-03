import { TouchableOpacity, useColorScheme, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import { colours, styles } from "../data/theme";

export default function PhotoPicker({ setUser }) {
    const colourScheme = useColorScheme();

    async function addPhoto() {
        const result = await launchImageLibrary();
        if (typeof result.assets[0] == "object") {
            setUser((user) => ({ ...user, image: result.assets[0] }));
        }
    };

    return (
        <View style={{ ...styles.imageView, borderStyle: "dashed"}}>
            <TouchableOpacity
                title="Add Photo"
                onPress={addPhoto}
                style={{
                    ...styles.button,
                    ...styles.addPhoto,
                    backgroundColor: colours[colourScheme].bgColour,
                    color: colours[colourScheme].fgColor,
                }}
            />
        </View>
    );
}