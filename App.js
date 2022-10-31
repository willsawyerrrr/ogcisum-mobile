import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./components/BottomTabs";

import { getLocations, getSamples, getSamplesToLocations } from "./api/api";

export default async function App() {
    const isDarkMode = useColorScheme() === "dark";

    const locations = await getLocations();
    const samples = await getSamples();
    const samplesToLocations = await getSamplesToLocations();

    return (
        <SafeAreaView>
            <NavigationContainer>
                <BottomTabs
                    locations={locations}
                    samples={samples}
                    samplesToLocations={samplesToLocations} />
            </NavigationContainer>
        </SafeAreaView>
    );
};
