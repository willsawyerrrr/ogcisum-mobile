import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from "./screens/Map";
import NowPlaying from "./screens/NowPlaying";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="map" component={Map} />
                    <Stack.Screen name="now-playing" component={NowPlaying} />
                    <Stack.Screen name="profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};
