import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
const Layout = () => {
    const fontsLoaded = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf')

    })
    return <Stack/>
}

export default Layout