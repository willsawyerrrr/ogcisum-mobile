import { useRef, useState } from "react";
import { View, useColorScheme } from "react-native";

import HiddenWebView from "../components/HiddenWebView";
import LocationHeading from "../components/LocationHeading";
import MyButton from "../components/MyButton";
import OnLocation from "../components/OnLocation";

import { darkStyles, lightStyles } from "../data/theme";

export default function NearbyMusic({ location, samples, user }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    const initialWebViewState = { loaded: false, playing: false };
    const [webViewState, setWebViewState] = useState(initialWebViewState);

    // used to communicate with the page in the webView
    const webViewRef = useRef();

    // command used to load samples into the webview
    const setupInjection = `setupParts(${JSON.stringify(samples)})`;

    /**
     * Triggers the web view to start playing samples and updates its state.
     */
    function handleStart() {
        webViewRef.current.injectJavaScript("startPlayback()");
        setWebViewState({ ...webViewState, playing: true });
    }

    /**
     * Triggers the web view to stop playing samples, resets the web view to be
     * ready to play again, and updates its state.
     */
    function handleStop() {
        webViewRef.current.injectJavaScript("stopPlayback()");
        webViewRef.current.reload();
        webViewRef.current.injectJavaScript(setupInjection);
        setWebViewState({ ...webViewState, playing: false });
    }

    return (
        <View style={styles.outerView}>
            <LocationHeading location={location} />
            <HiddenWebView
                webViewRef={webViewRef}
                webViewState={webViewState}
            />
            <MyButton
                onPress={webViewState.playing ? handleStop : handleStart}
                text={(webViewState.playing ? "Stop " : "Start ") + "Playback"}
            />
            <OnLocation user={user} />
        </View>
    );
}