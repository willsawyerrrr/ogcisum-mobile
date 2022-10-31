import LinearGradient from 'react-native-linear-gradient';

import TabIcon from "../components/TabIcon";

import { colours } from "../data/theme";

export default function tabOptions(icon, size) {
    return {
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icon} {...size} />,
        tabBarShowLabel: false,
        tabBarBackground: () => {
            <LinearGradient colors={[colours.purpleColourLighter, colours.blueColourDarker]} />
        },
        tabBarStyle: {
            height: 80,
            padding: 24,
            backgroundColor: colours.blueColourDarker,
        },
    };
}
