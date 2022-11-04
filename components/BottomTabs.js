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
                        user={user}
                    />
                )}
                options={
                    () => tabOptions(tabIcons.logo, mapState.nearbyLocation)
                }
            />
            <Tab.Screen
                name="Profile"
                children={() => <Profile user={user} setUser={setUser} />}
                options={() => tabOptions(tabIcons.profile)}
            />
        </Tab.Navigator>
    );
}
