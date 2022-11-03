import WebView from "react-native-webview";

import { styles } from "../data/theme";

export default function HiddenWebView({ setWebViewState, webViewRef }) {
    return (
        <WebView
            ref={ref => webViewRef.current = ref}
            originWhitelist={["*"]}
            source={{
                uri: "https://wmp.interaction.courses/playback-webview/"
            }}
            pullToRefreshEnabled={true}
            onLoad={() => {
                setWebViewState(oldState => ({ ...oldState, loaded: true }))
            }}
            style={styles.webView}
        />
    );
}
