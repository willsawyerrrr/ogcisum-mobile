import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Map from "../screens/Map";
import NowPlaying from "../screens/NowPlaying";
import Profile from "../screens/Profile";

import tabOptions from "../helpers/tabOptions";
import { tabIcons } from "../data/theme";

const Tab = createBottomTabNavigator();

export default function BottomTabs({
    mapState,
    samples,
    samplesToLocations,
    setMapState
}) {
    return (
        <Tab.Navigator initialRouteName="Map">
            <Tab.Screen
                name="Map"
                children={() => (
                    <Map mapState={mapState} setMapState={setMapState} />
                )}
                options={() => tabOptions(tabIcons.map)}
            />
            <Tab.Screen
                name="NowPlaying"
                children={() => (
                    <NowPlaying
                        location={mapState.nearbyLocation}
                        samples={samples}
                        samplesToLocations={samplesToLocations}
                    />
                )}
                options={() => tabOptions(tabIcons.logo)}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={() => tabOptions(tabIcons.profile)}
            />
        </Tab.Navigator>
    );
}
