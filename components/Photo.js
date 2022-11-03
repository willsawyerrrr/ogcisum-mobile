import { TouchableOpacity, useColorScheme, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import { styles } from "../data/theme";

export default function Photo({ image, setUser }) {
    const colourScheme = useColorScheme();

    async function changePhoto() {
        const result = await launchImageLibrary();
        if (typeof result.assets[0] == "object") {
            setUser((user) => ({ ...user, image: result.assets[0] }));
        }
    }

    return (
        <View style={{ ...styles.imageView, borderStyle: "solid" }}>
            <Image style={styles.image} source={image} />
            <TouchableOpacity
                title="Change Photo"
                onPress={changePhoto}
                style={{
                    ...styles.button,
                    ...styles.changePhoto,
                    backgroundColor: colours[colourScheme].bgColour,
                    color: colours[colourScheme].fgColor,
                }}
            />
        </View>
    );
}