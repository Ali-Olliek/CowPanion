import { View, Text } from "react-native";
import React from "react";
import { BottomNavBarButtons, FirstPageHeader } from "../UI/organisms";
import { LandingPageStyle } from "../../styles";
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
