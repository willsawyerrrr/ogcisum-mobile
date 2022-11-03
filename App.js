import React, { useEffect, useState } from "react";
import { PermissionsAndroid, SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Geolocation from "@react-native-community/geolocation";

import BottomTabs from "./components/BottomTabs";

import { readLocations, readSamples, readSamplesToLocations } from "./api/api";
import { colours } from "./data/theme";
import calculateDistance from "./helpers/calculateDistance";

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

    /** Get Android location permission. */
    useEffect(() => {
        async function requestAndroidLocationPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Permission",
                        message: "We need to access your location to show you nearby locations and samples.",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Deny",
                        buttonPositive: "Allow"
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    setMapState({ ...mapState, locationPermission: true });
                }
            } catch (error) {
                console.warn(error);
            }
        };

        if (Platform.OS === "android") {
            requestAndroidLocationPermission();
        } else {
            setMapState({ ...mapState, locationPermission: true });
        }
    }, []);

    // Only watch the user's current location when device permission granted
    if (mapState.locationPermission) {
        Geolocation.watchPosition(
            success = (position) => {
                const userLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                const nearbyLocation = calculateDistance(userLocation);
                setMapState({
                    ...mapState,
                    userLocation,
                    nearbyLocation: nearbyLocation
                });
            },
            error = (error) => { console.log(error); },
            options = {
                maximumAge: 0,
                enableHighAccuracy: true,
                distanceFilter: 0,
            }
        );
    }

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
