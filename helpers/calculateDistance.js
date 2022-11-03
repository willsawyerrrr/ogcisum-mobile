import getDistance from "geolib/es/getPreciseDistance";

// Function to retrieve location nearest to current user location
export default function calculateDistance(mapState, userLocation) {
    const nearestLocations = mapState.locations.map(location => {
        const metres = getDistance(userLocation, location.coordinates);
        location["distance"] = { metres: metres, nearby: metres <= NEARBY };
        return location;
    }).sort((previous, current) => {
        return previous.distance.metres - current.distance.metres;
    });
    return nearestLocations.shift();
}
