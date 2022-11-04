import NearbyMusic from "./NearbyMusic";
import NoNearbyMusic from "./NoNearbyMusic";

export default function NowPlaying({
    location,
    samples,
    samplesToLocations,
    user
}) {
    // filter samples to those relevant to the nearest location
    const relevantSampleIds = samplesToLocations.filter(
        sampleToLocation => sampleToLocation.location === location.id
    ).map(sampleToLocation => sampleToLocation.sample);
    const relevantSamples = samples.filter(
        sample => relevantSampleIds.includes(sample.id)
    );

    return location.nearby ? (
        <NearbyMusic location={location} samples={relevantSamples} user={user} />
    ) : (
        <NoNearbyMusic />
    );
}
