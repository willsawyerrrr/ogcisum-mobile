import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Map from "./screens/Map";
import NowPlaying from "./screens/NowPlaying";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Map" component={Map} />
                    <Tab.Screen name="NowPlaying" component={NowPlaying} />
                    <Tab.Screen name="Profile" component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};
