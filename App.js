import React, { useEffect, useState } from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./components/BottomTabs";

import { readLocations, readSamples, readSamplesToLocations } from "./api/api";
import { colours } from "./data/theme";

export default function App() {
    /** "Global" list of samples. */
    const [samples, setSamples] = useState([]);

    /** "Global" list of locations. */
    const [locations, setLocations] = useState([]);

    /** "Global" list of samples shared to locations. */
    const [samplesToLocations, setSamplesToLocations] = useState([]);

    const initialMapState = {
        locationPermission: false,
        locations: locations,
        userLocation: {
            latitude: -27.499526188402154,
            longitude: 152.9728129460468,
            // defaults to Indooroopilly Shopping Centre
        },
        nearbyLocation: {}
    };
    const [mapState, setMapState] = useState(initialMapState);

    /** Fetches samples from the WMP API. */
    useEffect(() => {
        const fetchSamples = async () => setSamples(await readSamples());
        fetchSamples();
    }, []);

    /** Fetches locations from the WMP API. */
    useEffect(() => {
        const fetchLocations = async () => {
            const locations = await readLocations();
            setLocations(locations);
            setMapState({ ...mapState, locations: locations });
        };
        fetchLocations();
    }, []);

    /** Fetches samples shared to locations from the WMP API. */
    useEffect(() => {
        const fetchSamplesToLocations = async () => setSamplesToLocations(await readSamplesToLocations());
        fetchSamplesToLocations();
    }, []);

    const backgroundColour = colours[useColorScheme()].bgColour;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColour }}>
            <NavigationContainer>
                <BottomTabs
                    locations={locations}
                    mapState={mapState}
                    samples={samples}
                    samplesToLocations={samplesToLocations}
                    setMapState={setMapState}
                />
            </NavigationContainer>
        </SafeAreaView>
    );
};
