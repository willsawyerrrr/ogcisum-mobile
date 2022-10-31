import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./components/BottomTabs";

export default function App() {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView>
            <NavigationContainer>
                <BottomTabs />
            </NavigationContainer>
        </SafeAreaView>
    );
};
