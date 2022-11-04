import { useColorScheme, View } from "react-native";
import WebView from "react-native-webview";

import { darkStyles, lightStyles } from "../data/theme";

export default function HiddenWebView({ setWebViewState, webViewRef }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    return (
        <View style={styles.webView}>
            <WebView
                ref={ref => webViewRef.current = ref}
                originWhitelist={["*"]}
                source={{
                    uri: "https://wmp.interaction.courses/playback-webview/"
                }}
                pullToRefreshEnabled={true}
                onLoad={() => {
                    setWebViewState((oldState) => ({ ...oldState, loaded: true }))
                }}
            />
        </View>
    );
}
