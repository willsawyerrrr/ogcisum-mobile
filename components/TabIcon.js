import { Image, View } from "react-native";

export default function TabIcon({ focused, icon, height, width }) {
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
                source={icon}
                resizeMode="contain"
                style={{
                    height: height,
                    width: width,
                    opacity: focused ? 1.0 : 0.5,
                }}
            />
        </View>
    );
}
