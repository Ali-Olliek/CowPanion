import { View, Text } from "react-native";
import React from "react";
import { BottomNavBarButtons, FirstPageHeader } from "../UI/organisms";
import { GeneralStatsCard } from "../UI/atoms/GeneralStatsCard";

export function LandingPage() {
  return (
    <View>
      <FirstPageHeader />
      <GeneralStatsCard />
      <BottomNavBarButtons />
    </View>
  );
}
