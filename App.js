import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./components/BottomTabs";

import { readLocations, readSamples, readSamplesToLocations } from "./api/api";

export default async function App() {
    const isDarkMode = useColorScheme() === "dark";

    const locations = await readLocations();
    const samples = await readSamples();
    const samplesToLocations = await readSamplesToLocations();

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
