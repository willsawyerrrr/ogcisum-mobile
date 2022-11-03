import {
    Image,
    Text,
    TouchableOpacity,
    View,
    useColorScheme
} from "react-native";

import { otherIcons, styles, colours as colourSource } from "../data/theme";

export default function NowPlaying({
    location,
    samples,
    samplesToLocations,
    user
}) {
    const relevantSampleIds = samplesToLocations.filter(
        sampleToLocation => sampleToLocation.location === location.id
    ).map(
        sampleToLocation => sampleToLocation.sample
    );

    const relevantSamples = samples.filter(
        sample => relevantSampleIds.includes(sample.id)
    );

    const colourScheme = useColorScheme();
    const colours = colourSource[colourScheme];

    const handlePlay = () => console.log("Playing music");

    return !location.nearby ? (
        <View style={{ ...styles.outerView, backgroundColor: colours.bgColour }}>
            <Text style={{ ...styles.heading, color: colours.fgColour }}>
                No Music Nearby
            </Text>
            <Text style={{ ...styles.body, color: colours.fgColour }}>
                It's Oh So Quiet...
            </Text>
        </View>
    ) : (
        <View style={{ ...styles.outerView, backgroundColor: colours.bgColour }}>
            <View>
                <Image source={otherIcons[colourScheme].pin} />
                <View>
                    <Text style={{ ...styles.heading, color: colours.fgColour }}>
                        {location.name}
                    </Text>
                    <Text style={{ ...styles.body, color: colours.fgColour }}>
                        {location.suburb}, {location.state}
                    </Text>
                </View>
            </View>

            <TouchableOpacity title="Play Music" onPress={handlePlay} />

            <Text style={styles.subheading}>Currently at this location:</Text>
            <View style={styles.users}>
                <Image source={user.image} style={{ ...styles.users.image }} />
                <Text style={{ ...styles.users.text, color: colours.fgColour }}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.users}>
                <Image
                    source={otherIcons[colourScheme].smiley}
                    style={{ ...styles.users.image }}
                />
                <Text style={{ ...styles.users.text, color: colours.fgColour }}>
                    And others...
                </Text>
            </View>
        </View>
    );
}
