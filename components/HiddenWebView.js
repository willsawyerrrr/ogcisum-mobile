import { useColorScheme, View } from "react-native";
import WebView from "react-native-webview";

import { darkStyles, lightStyles } from "../data/theme";

export default function HiddenWebView({ onLoad, webViewRef }) {
    const styles = (useColorScheme() === "dark") ? darkStyles : lightStyles;

    return (
        <View style={styles.webView}>
            <WebView
                onLoad={onLoad}
                originWhitelist={["*"]}
                pullToRefreshEnabled={true}
                ref={ref => webViewRef.current = ref}
                source={{
                    uri: "https://wmp.interaction.courses/playback-webview/"
                }}
            />
        </View>
    );
}
