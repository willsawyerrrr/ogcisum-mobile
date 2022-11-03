import getDistance from "geolib/es/getPreciseDistance";

// Function to retrieve location nearest to current user location
export default function calculateDistance(mapState, userLocation) {
    const nearestLocations = mapState.locations.map(location => {
        const distance = getDistance(userLocation, location.coordinates);
        return { ...location, distance: distance, nearby: distance <= NEARBY };
    }).sort((previous, current) => {
        return previous.distance - current.distance;
    });
    return nearestLocations.shift();
}
