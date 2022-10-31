import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Map from "../screens/Map";
import NowPlaying from "../screens/NowPlaying";
import Profile from "../screens/Profile";

import tabOptions from "../helpers/tabOptions";
import { icons, sizes } from "../data/theme";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator initialRouteName="Map">
            <Tab.Screen
                name="Map"
                component={Map}
                options={() => tabOptions(icons.map, sizes.icons.map)}
            />
            <Tab.Screen
                name="NowPlaying"
                component={NowPlaying}
                options={() => tabOptions(icons.logo, sizes.icons.logo)}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={() => tabOptions(icons.profile, sizes.icons.profile)}
            />
        </Tab.Navigator>
    );
}
