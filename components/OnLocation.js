import { Image, Text, View, useColorScheme } from "react-native";

import { darkStyles, lightStyles, otherIcons } from "../data/theme";

export default function OnLocation({ user }) {
    const colourScheme = useColorScheme();
    const styles = (colourScheme === "dark") ? darkStyles : lightStyles;

    return (
        <>
            <Text style={styles.subheading}>Currently At This Location:</Text>
            <View style={styles.users}>
                <Image source={user.image} style={styles.users.image} />
                <Text style={styles.users.text}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.users}>
                <Image
                    source={otherIcons[colourScheme].smiley}
                    style={styles.users.image}
                />
                <Text style={styles.users.text}>
                    And others...
                </Text>
            </View>
        </>
    );
}