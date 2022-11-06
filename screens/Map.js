import { useColorScheme } from 'react-native';
import MapView, { Circle } from "react-native-maps";

import { darkStyles, lightStyles } from "../data/theme";

import { NEARBY } from '../data/map';

export default function Map({ mapState }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    return (
        <MapView
            camera={{
                altitude: 3000, // Zoom level for iOS
                center: mapState.userLocation,
                followUserLocation: true,
                heading: 0, // Compass direction
                pitch: 0, // Angle of 3D map
                zoom: 15 // Zoom level For Android
            }}
            showsUserLocation={mapState.locationPermission}
            style={styles.mapView}
        >
            {mapState.locations.map(location => {
                return (
                    <Circle
                        center={location.coordinates}
                        fillColor={styles.mapCircle.fillColor}
                        key={location.id}
                        radius={NEARBY}
                        strokeWidth={styles.mapCircle.strokeWidth}
                        strokeColor={styles.mapCircle.strokeColor}
                    />
                )
            })}
        </MapView>
    );
}
