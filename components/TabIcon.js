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
                resizeMode="contain"
                source={source}
                style={{
                    height: height,
                    opacity: opaque ? 1.0 : 0.5,
                    width: width,
                }}
            />
            {location?.nearby && isLogo &&
                <Text style={{ opacity: opaque ? 1.0 : 0.5, width: 150 }}>
                    There's Music Nearby
                </Text>
            }
        </View>
    );
}
