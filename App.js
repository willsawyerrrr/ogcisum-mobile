import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./components/BottomTabs";

import { readLocations, readSamples, readSamplesToLocations } from "./api/api";
import { colours } from "./data/theme";

export default async function App() {
    const locations = await readLocations();
    const samples = await readSamples();
    const samplesToLocations = await readSamplesToLocations();

    const backgroundColour = colours[useColorScheme()].bgColour;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColour }}>
            <NavigationContainer>
                <BottomTabs
                    locations={locations}
                    samples={samples}
                    samplesToLocations={samplesToLocations} />
            </NavigationContainer>
        </SafeAreaView>
    );
};
