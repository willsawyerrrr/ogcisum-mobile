import { Text, View, useColorScheme } from "react-native";

import { darkStyles, lightStyles } from "../data/theme";

export default function NoNearbyMusic() {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    return (
        <View style={styles.outerView}>
            <Text style={styles.heading}>
                No Music Nearby
            </Text>
            <Text style={styles.body}>
                It's Oh So Quiet...
            </Text>
            <View style={{ flex: 1 }} />
        </View>
    );
}
