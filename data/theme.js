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

export const icons = {
    map: iconSource.tabMapWhite,
    logo: iconSource.logoWhite,
    profile: iconSource.tabProfileWhite,
    light: {
        pin: iconSource.pinDarkPurple,
        smiley: iconSource.smileyDarkPurple,
    },
    dark: {
        map: iconSource.pinLightPurple,
        smiley: iconSource.smileyLightPurple,
    },
};

export const sizes = {
    icons: {
        map: {
            height: 32.6,
            width: 43.2,
        },
        logo: {
            height: 35.3,
            width: 164.9,
        },
        profile: {
            height: 41.44,
            width: 37,
        },
    }
};
