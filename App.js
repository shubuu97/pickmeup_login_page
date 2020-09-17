import React from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import App from "./src";
import { View, Text } from "react-native";

function Application() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

export default Application;
