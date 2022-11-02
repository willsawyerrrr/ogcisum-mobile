import {
    Image,
    Text,
    TouchableOpacity,
    View,
    useColorScheme
} from "react-native";

import { otherIcons, styles, colours as colourSource } from "../data/theme";

export default function NowPlaying({ location, samples, samplesToLocations }) {
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

    return location ? (
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
                        {location.location}
                    </Text>
                    <Text style={{ ...styles.body, color: colours.fgColour }}>
                        {location.suburb}, {location.state}
                    </Text>
                </View>
            </View>

            <TouchableOpacity title="Play Music" onPress={handlePlay} />

            <Text style={styles.subheading}>Currently at this location:</Text>
            <View>
                <Image source={user.image} />
                <Text style={{ ...styles.users, color: colours.fgColour }}>
                    {user.name}
                </Text>
            </View>
            <View>
                <Image source={otherIcons[colourScheme].smiley} />
                <Text style={{ ...styles.users, color: colours.fgColour }}>
                    And others...
                </Text>
            </View>
        </View>
    );
}
