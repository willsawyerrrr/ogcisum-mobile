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

    // if this tab is focused, or if it's the OgCiSum logo when the user is near
    // a location, then its icon (and text if shown) should be fully opaque
    const opaque = focused || (isLogo && location.nearby);

    return (
        <View style={{ ...styles.tabIconView, ...background }}>
            <Image
                source={source}
                resizeMode="contain"
                style={{
                    height: height,
                    width: width,
                    opacity: opaque ? 1.0 : 0.5,
                }}
            />
            {location?.nearby && isLogo &&
                <Text style={{ width: 150, opacity: opaque ? 1.0 : 0.5 }}>
                    There's Music Nearby
                </Text>
            }
        </View>
    );
}
