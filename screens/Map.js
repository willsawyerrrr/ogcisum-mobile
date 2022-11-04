import { useColorScheme } from 'react-native';
import MapView, { Circle } from "react-native-maps";

import { darkStyles, lightStyles } from "../data/theme";

import { NEARBY } from '../data/map';

export default function Map({ mapState }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

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
            style={styles.mapView}
        >
            {mapState.locations.map(location => {
                return (
                    <Circle
                        key={location.id}
                        center={location.coordinates}
                        radius={NEARBY}
                        strokeWidth={styles.mapCircle.strokeWidth}
                        strokeColor={styles.mapCircle.strokeColor}
                        fillColor={styles.mapCircle.fillColor}
                    />
                )
            })}
        </MapView>
    );
}
