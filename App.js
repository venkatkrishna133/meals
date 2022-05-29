import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/retaurants.sreen";
import {
  useFonts as useOswalds,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as uselato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswalds({
    Oswald_400Regular,
  });
  const [lato_Loaded] = uselato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !lato_Loaded) {
    return null;
  }
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}

