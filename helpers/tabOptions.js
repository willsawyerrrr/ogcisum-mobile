import { useColorScheme } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TabIcon from "../components/TabIcon";

import { darkStyles, lightStyles } from "../data/theme";

export default function tabOptions(icon, location = undefined, isLogo = false) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    return {
        tabBarIcon: ({ focused }) => (
            <TabIcon
                focused={focused}
                location={location}
                isLogo={isLogo}
                {...icon}
            />
        ),
        tabBarShowLabel: false,
        tabBarBackground: () => (
            <LinearGradient
                colors={styles.linearGradient.colors}
                style={styles.linearGradient}
            />
        ),
        tabBarStyle: styles.tabBar,
        headerShown: false,
    };
}
