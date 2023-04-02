import { NavigationContainer } from "@react-navigation/native";

import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";

import { useRoute } from "./router";

const loadApplication = async () => {
  await Font.loadAsync({
    "Mynerve-Regular": require("./assets/Fonts/Mynerve/Mynerve-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState({});
  const routing = useRoute(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={console.warn}
      />
    );
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
