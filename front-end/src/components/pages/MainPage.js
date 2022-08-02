// React
import { View } from "react-native";
import React from "react";

// Styles
import { LandingPageStyle } from "../../styles";

// Components
import { FirstPageHeader } from "../UI/organisms";
import { GeneralStatsCard } from "../UI/atoms/GeneralStatsCard";
export function MainPage() {
  return (
    <View>
      <FirstPageHeader />
      <GeneralStatsCard />
    </View>
  );
}
