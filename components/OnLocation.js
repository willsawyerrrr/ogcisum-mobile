import { Image, Text, useColorScheme, View } from "react-native";

import { colours as colourSource, otherIcons, styles } from "../data/theme";

export default function OnLocation({ user }) {
    const colourScheme = useColorScheme();
    const colours = colourSource[colourScheme];

    return (
        <>
            <Text style={styles.subheading}>Currently at this location:</Text>
            <View style={styles.users}>
                <Image source={user.image} style={{ ...styles.users.image }} />
                <Text style={{ ...styles.users.text, color: colours.fgColour }}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.users}>
                <Image
                    source={otherIcons[colourScheme].smiley}
                    style={{ ...styles.users.image }}
                />
                <Text style={{ ...styles.users.text, color: colours.fgColour }}>
                    And others...
                </Text>
            </View>
        </>
    );
}