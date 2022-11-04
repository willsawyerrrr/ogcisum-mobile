import { Image, Text, View, useColorScheme } from "react-native";

import { darkStyles, lightStyles, otherIcons } from "../data/theme";

export default function LocationHeading({ location }) {
    const colourScheme = useColorScheme();
    const styles = (colourScheme === "dark") ? darkStyles : lightStyles;

    return (
        <View>
            <Image source={otherIcons[colourScheme].pin} style={styles.pin} />
            <View>
                <Text style={styles.heading}>
                    {location.name}
                </Text>
                <Text style={styles.body}>
                    {location.suburb}, {location.state}
                </Text>
            </View>
        </View>
    );
}
