import { useColorScheme } from 'react-native';
import MapView, { Circle } from "react-native-maps";

import { colours } from "../data/theme";

/** Distance from a location within which to be considered "nearby". */
const NEARBY = 100;

export default function Map({ mapState, setMapState }) {
    const colourScheme = useColorScheme();

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
            {mapState.locations.map(location => {
                return (
                    <Circle
                        key={location.id}
                        center={location.coordinates}
                        radius={NEARBY}
                        strokeWidth={3}
                        strokeColor={colours.purpleColourLighter}
                        fillColor={colours[colourScheme].fgColourLighter}
                    />
                )
            })}
        </MapView>
    );
}
