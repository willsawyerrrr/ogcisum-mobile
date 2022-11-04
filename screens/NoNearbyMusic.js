import { Text, View, useColorScheme } from "react-native";

import { colours as colourSource, styles } from "../data/theme";

export default function NoNearbyMusic() {
    const colourScheme = useColorScheme();
    const colours = colourSource[colourScheme];

    return (
        <View style={{ ...styles.outerView, backgroundColor: colours.bgColour }}>
            <Text style={{ ...styles.heading, color: colours.fgColour }}>
                No Music Nearby
            </Text>
            <Text style={{ ...styles.body, color: colours.fgColour }}>
                It's Oh So Quiet...
            </Text>
        </View>
    );
}
