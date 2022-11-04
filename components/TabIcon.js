import { Image, Text, View, useColorScheme } from "react-native";

import { darkStyles, lightStyles } from "../data/theme";

export default function TabIcon({ focused, location, source, height, width }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    return (
        <View style={styles.tabIconView}>
            <Image
                source={source}
                resizeMode="contain"
                style={{
                    height: height,
                    width: width,
                    opacity: focused ? 1.0 : 0.5,
                }}
            />
            {location?.nearby &&
                <Text style={{ width: 150, opacity: focused ? 1.0 : 0.5 }}>
                    There's Music Nearby
                </Text>
            }
        </View>
    );
}
