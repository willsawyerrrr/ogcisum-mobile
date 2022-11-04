import { Text, View, useColorScheme, TextInput } from "react-native";

import Photo from "../components/Photo";
import PhotoPicker from "../components/PhotoPicker";

import { darkStyles, lightStyles } from "../data/theme";

export default function Profile({ setUser, user }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    const updateImage = (image) => setUser((user) => ({ ...user, image }));

    return (
        <View style={styles.outerView}>
            <View>
                <View>
                    <Text style={styles.heading}>
                        Edit Profile
                    </Text>
                    <Text style={styles.body}>
                        Mirror, Mirror On The Wall...
                    </Text>
                </View>
            </View>

            {user.image
                ? <Photo image={user.image} updateImage={updateImage} />
                : <PhotoPicker updateImage={updateImage} />}

            <TextInput
                onChangeText={(text) => setUser({ ...user, name: text })}
                placeholder="Enter Your Name"
                style={styles.textInput}
                value={user.name}
            />
        </View>
    );
}
