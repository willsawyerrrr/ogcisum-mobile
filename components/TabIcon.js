import { Image, Text, View, useColorScheme } from "react-native";

import { colours, darkStyles, lightStyles } from "../data/theme";

export default function TabIcon({
    focused,
    location,
    source,
    height,
    width,
    isLogo
}) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;
    const background = (focused)
        ? { backgroundColor: colours.blackColourTranslucentLess } : {};

    return (
        <View style={{ ...styles.tabIconView, ...background }}>
            <Image
                source={source}
                resizeMode="contain"
                style={{
                    height: height,
                    width: width,
                    opacity: focused ? 1.0 : 0.5,
                }}
            />
            {location?.nearby && isLogo &&
                <Text style={{ width: 150, opacity: focused ? 1.0 : 0.5 }}>
                    There's Music Nearby
                </Text>
            }
        </View>
    );
}
