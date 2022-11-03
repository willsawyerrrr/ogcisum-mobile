import {
    Image,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
    TextInput
} from "react-native";

import { otherIcons, styles, colours as colourSource } from "../data/theme";

export default function Profile({ setUser, user }) {
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
                backgroundColor={colours.fgColourLighter}
                borderRadius={10}
                onChangeText={(text) => setUser({ ...user, name: text })}
                placeholder="Enter Your Name"
                placeholderTextColor={colours.fgColour}
                textAlign="center"
                textContentType="name"
                value={user.name}
            />
        </View>
    );
}
