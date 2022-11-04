import { StyleSheet } from "react-native";
import { icons as iconSource } from "../data/icons";

export const colours = {
    purpleColourLighter: "#A42DE8",
    blueColourLighter: "#318AFF",
    blueColourDarker: "#2D3DE8",
    blackColourTranslucentLess: "rgba(0, 0, 0, 0.35)",
    blackColourTranslucentMore: "rgba(0, 0, 0, 0.7)",
    light: {
        bgColour: "#ffffff",
        fgColour: "#800080",
        fgColourLighter: "rgba(128, 0, 128, 0.5)",
        headerTextColour: "#ffffff"
    },
    dark: {
        bgColour: "#422142",
        fgColour: "#f0c4f0",
        fgColourLighter: "rgba(210, 169, 210, 0.5)",
        headerTextColour: "#f0c4f0",
    }
};

export const tabIcons = StyleSheet.create({
    map: {
        source: iconSource.tabMapWhite,
        height: 32.6,
        width: 43.2,
    },
    logo: {
        source: iconSource.logoWhite,
        height: 35.3,
        width: 164.9,
    },
    profile: {
        source: iconSource.tabProfileWhite,
        height: 41.44,
        width: 37,
    }
});

export const otherIcons = {
    light: {
        pin: iconSource.pinDarkPurple,
        smiley: iconSource.smileyDarkPurple,
    },
    dark: {
        map: iconSource.pinLightPurple,
        smiley: iconSource.smileyLightPurple,
    },
};

export const styles = StyleSheet.create({
    addPhoto: {},
    body: {
        fontSize: 20,
        fontWeight: "300",
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "700",
    },
    changePhoto: {},
    heading: {
        fontSize: 32,
        fontWeight: "900",
    },
    image: {
        height: 100,
        width: 100,
    },
    imageView: {
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 3,
        flex: 1,
        justifyContent: "space-around",
        marginBottom: 25,
        marginTop: 25,
    },
    outerView: {
        flex: 1,
        padding: 25,
    },
    subheading: {
        fontSize: 24,
        fontWeight: "700",
    },
    textInput: {
        borderRadius: 10,
        textAlign: "center",
        textContentType: "name",
    },
    users: {
        flexDirection: "row",
        image: {
            height: 100,
            width: 100,
            borderColor: colours.dark.fgColour,
            borderWidth: 5,
            borderRadius: 50,
        },
        text: {
            textAlignVertical: "center",
        },
    },
    webView: {
        display: "none",
    }
});
