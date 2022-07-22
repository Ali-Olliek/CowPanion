// React
import { View } from "react-native";
import React from "react";

// Styles
import { LandingPageStyle } from "../../styles";

// Components
import { BottomNavBarButtons } from "../UI/organisms/BottomNavBarButtons";

export function LandingPage() {
  return (
    <View style={LandingPageStyle.container}>
      <BottomNavBarButtons />
    </View>
  );
}
