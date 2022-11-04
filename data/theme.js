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
        height: 32.6,
        source: iconSource.tabMapWhite,
        width: 43.2,
    },
    logo: {
        height: 35.3,
        source: iconSource.logoWhite,
        width: 164.9,
    },
    profile: {
        height: 41.44,
        source: iconSource.tabProfileWhite,
        width: 37,
    }
});

export const otherIcons = {
    light: {
        pin: iconSource.pinDarkPurple,
        smiley: iconSource.smileyDarkPurple,
    },
    dark: {
        pin: iconSource.pinLightPurple,
        smiley: iconSource.smileyLightPurple,
    },
};

const commonStyles = StyleSheet.create({
    addPhoto: {},
    body: {
        fontSize: 20,
        fontWeight: "300",
    },
    button: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
    },
    changePhoto: {
        bottom: 25,
        position: "absolute",
    },
    heading: {
        fontSize: 36,
        fontWeight: "900",
    },
    image: {
        height: "100%",
        width: "100%",
    },
    imageView: {
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 3,
        flex: 1,
        justifyContent: "center",
        marginBottom: 25,
        marginTop: 25,
        overflow: "hidden",
    },
    linearGradient: {
        colors: [colours.purpleColourLighter, colours.blueColourDarker],
        flex: 1,
    },
    locationHeading: {
        flexDirection: "row",
        height: 130,
        marginBottom: 20,
    },
    locationHeadingInner: {
        flex: 4,
        flexDirection: "column",
    },
    mapCircle: {
        strokeColor: colours.purpleColourLighter,
        strokeWidth: 3,
    },
    mapView: {
        flex: 1,
    },
    outerView: {
        flex: 1,
        justifyContent: "space-between",
        padding: 25,
    },
    pin: {
        alignSelf: "center",
        height: 70,
        marginRight: 20,
        width: 40,
    },
    subheading: {
        fontSize: 24,
        fontWeight: "800",
    },
    tabBar: {
        height: 80,
    },
    tabIconView: {
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 50,
    },
    textInput: {
        borderRadius: 10,
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        textContentType: "name",
    },
    users: {
        flexDirection: "row",
        marginTop: 20,
        image: {
            borderColor: colours.dark.fgColour,
            borderRadius: 50,
            borderWidth: 5,
            height: 100,
            width: 100,
        },
        text: {
            textAlignVertical: "center",
        },
    },
    webView: {
        display: "none",
    }
});

const darkOnlyStyles = StyleSheet.create({
    body: {
        backgroundColor: colours.dark.bgColour,
        color: colours.dark.fgColour,
    },
    button: {
        backgroundColor: colours.dark.fgColour,
    },
    buttonText: {
        color: colours.dark.bgColour,
    },
    heading: {
        color: colours.dark.fgColour,
    },
    imageView: {
        borderColor: colours.dark.fgColourLighter,
    },
    mapCircle: {
        fillColor: colours.dark.fgColourLighter
    },
    outerView: {
        backgroundColor: colours.dark.bgColour,
    },
    subheading: {
        color: colours.dark.fgColour,
    },
    textInput: {
        backgroundColor: colours.dark.fgColourLighter,
        color: colours.dark.fgColour,
    },
    users: {
        text: {
            color: colours.dark.fgColour,
        },
    },
});

const lightOnlyStyles = StyleSheet.create({
    body: {
        backgroundColor: colours.light.bgColour,
        color: colours.light.fgColour,
    },
    button: {
        backgroundColor: colours.light.fgColour,
    },
    buttonText: {
        color: colours.light.bgColour,
    },
    heading: {
        color: colours.light.fgColour,
    },
    imageView: {
        borderColor: colours.light.fgColourLighter,
    },
    mapCircle: {
        fillColor: colours.light.fgColourLighter
    },
    outerView: {
        backgroundColor: colours.light.bgColour,
    },
    subheading: {
        color: colours.light.fgColour,
    },
    textInput: {
        backgroundColor: colours.light.fgColourLighter,
        color: colours.light.fgColour,
    },
    users: {
        text: {
            color: colours.light.fgColour,
        },
    },
});

const commonStyleEntries = Object.entries(commonStyles);

export let darkStyles = Object.fromEntries(commonStyleEntries);
for (let key in darkOnlyStyles) {
    darkStyles[key] = { ...darkStyles[key], ...darkOnlyStyles[key] };
}

export let lightStyles = Object.fromEntries(commonStyleEntries);
for (let key in lightOnlyStyles) {
    lightStyles[key] = { ...lightStyles[key], ...lightOnlyStyles[key] };
}
