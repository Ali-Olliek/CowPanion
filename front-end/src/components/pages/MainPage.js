// React
import { View } from "react-native";
import React from "react";

// Styles

// Components
import { FirstPageHeader } from "../UI/organisms";
import { GeneralStatsCard } from "../UI/atoms/GeneralStatsCard";
export function MainPage({ navigation }) {
  return (
    <View>
      <FirstPageHeader />
      <GeneralStatsCard />
    </View>
  );
}
