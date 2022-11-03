import { Image, Text, View } from "react-native";

export default function TabIcon({ focused, location, source, height, width }) {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                height: 80,
                width: 50,
            }}
        >
            <Image
                source={source}
                resizeMode="contain"
                style={{
                    height: height,
                    width: width,
                    opacity: focused ? 1.0 : 0.5,
                }}
            />
            {location?.nearby &&
                <Text style={{ width: 150, opacity: focused ? 1.0 : 0.5 }}>
                    There's Music Nearby
                </Text>
            }
        </View>
    );
}
