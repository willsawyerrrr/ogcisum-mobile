import {
    Image,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
    TextInput
} from "react-native";

import { otherIcons, styles, colours as colourSource } from "../data/theme";

export default function Profile() {
    const colourScheme = useColorScheme();
    const colours = colourSource[colourScheme];

    return (
        <View style={{
            backgroundColor: colours.bgColour,
            flex: 1,
            padding: 25,
        }}>
            <View>
                <Image source={otherIcons[colourScheme].pin} />
                <View>
                    <Text style={{ ...styles.heading, color: colours.fgColour }}>
                        Edit Profile
                    </Text>
                    <Text style={{ ...styles.body, color: colours.fgColour }}>
                        Mirror, Mirror On The Wall...
                    </Text>
                </View>
            </View>

            <TextInput
                placeholder="Enter Your Name"
                placeholderTextColor={colours.fgColour}
                textContentType="name"
                backgroundColor={colours.fgColourLighter}
                textAlign="center"
                borderRadius={10}
            />
        </View>
    );
}
