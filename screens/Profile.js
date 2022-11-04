import {
    Image,
    Text,
    View,
    useColorScheme,
    TextInput
} from "react-native";

import Photo from "../components/Photo";
import PhotoPicker from "../components/PhotoPicker";

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
                <View>
                    <Text style={{ ...styles.heading, color: colours.fgColour }}>
                        Edit Profile
                    </Text>
                    <Text style={{ ...styles.body, color: colours.fgColour }}>
                        Mirror, Mirror On The Wall...
                    </Text>
                </View>
            </View>

            {user.image && <Photo image={user.image} setUser={setUser} />}
            {user.image || <PhotoPicker setUser={setUser} />}

            <TextInput
                backgroundColor={colours.fgColourLighter}
                color={colours.fgColour}
                onChangeText={(text) => setUser({ ...user, name: text })}
                placeholder="Enter Your Name"
                style={styles.textInput}
                value={user.name}
            />
        </View>
    );
}
