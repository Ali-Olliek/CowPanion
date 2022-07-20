// React
import { View, Text } from "react-native";
import React from "react";

// Styles
import { LandingPageStyle } from "../../styles";

// Components
import { BottomNavBarButtons, FirstPageHeader } from "../UI/organisms";
import { GeneralStatsCard } from "../UI/atoms/GeneralStatsCard";

export function LandingPage() {
  return (
    <View style={LandingPageStyle.container}>
      <FirstPageHeader />
      <GeneralStatsCard />
      <BottomNavBarButtons />
    </View>
  );
}
