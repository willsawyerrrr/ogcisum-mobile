import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Map from "../screens/Map";
import NowPlaying from "../screens/NowPlaying";
import Profile from "../screens/Profile";

import { tabIcons } from "../data/theme";
import tabOptions from "../helpers/tabOptions";

const Tab = createBottomTabNavigator();

export default function BottomTabs({
    mapState,
    samples,
    samplesToLocations,
    setMapState,
    setUser,
    user,
}) {
    return (
        <Tab.Navigator initialRouteName="Map">
            <Tab.Screen
                children={() => (
                    <Map mapState={mapState} setMapState={setMapState} />
                )}
                name="Map"
                options={() => tabOptions(tabIcons.map)}
            />
            <Tab.Screen
                children={() => (
                    <NowPlaying
                        location={mapState.nearbyLocation}
                        samples={samples}
                        samplesToLocations={samplesToLocations}
                        user={user}
                    />
                )}
                name="NowPlaying"
                options={
                    () => tabOptions(tabIcons.logo, mapState.nearbyLocation, true)
                }
            />
            <Tab.Screen
                children={() => <Profile user={user} setUser={setUser} />}
                name="Profile"
                options={() => tabOptions(tabIcons.profile)}
            />
        </Tab.Navigator>
    );
}
