import { Image, Text, View, useColorScheme } from "react-native";

import { colours as colourSource, otherIcons, styles } from "../data/theme";

export default function LocationHeading({ location }) {
    const colourScheme = useColorScheme();
    const colours = colourSource[colourScheme];

    return (
        <View>
            <Image source={otherIcons[colourScheme].pin} />
            <View>
                <Text style={{ ...styles.heading, color: colours.fgColour }}>
                    {location.name}
                </Text>
                <Text style={{ ...styles.body, color: colours.fgColour }}>
                    {location.suburb}, {location.state}
                </Text>
            </View>
        </View>
    );
}
