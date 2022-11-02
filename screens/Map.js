import { useEffect, useState } from "react";
import { PermissionsAndroid, useColorScheme } from 'react-native';
import MapView, { Circle } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import getDistance from "geolib/es/getPreciseDistance";

import { colours } from "../data/theme";

/** Distance from a location within which to be considered "nearby". */
const NEARBY = 100;

export default function Map({ locations }) {
    // Setup state for map data
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

    // Function to retrieve location nearest to current user location
    function calculateDistance(userLocation) {
        const nearestLocations = mapState.locations.map(location => {
            const metres = getDistance(userLocation, location.coordinates);
            location["distance"] = { metres: metres, nearby: metres <= NEARBY };
            return location;
        }).sort((previous, current) => {
            return previous.distance.metres - current.distance.metres;
        });
        return nearestLocations.shift();
    }

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

    return (
        <MapView
            camera={{
                center: mapState.userLocation,
                pitch: 0, // Angle of 3D map
                heading: 0, // Compass direction
                altitude: 3000, // Zoom level for iOS
                zoom: 15 // Zoom level For Android
            }}
            showsUserLocation={mapState.locationPermission}
            style={{ flex: 1 }}
        >
            {console.log(mapState.locations)}
            {console.log(locations)}
            {mapState.locations.map(location => {
                return (
                    <Circle
                        key={location.id}
                        center={location.coordinates}
                        radius={NEARBY}
                        strokeWidth={3}
                        strokeColor={colours.purpleColourLighter}
                        fillColor={colours[useColorScheme()].fgColourLighter}
                    />
                )
            })}
        </MapView>
    );
}
