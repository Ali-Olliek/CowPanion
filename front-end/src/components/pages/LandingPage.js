import { View, Text } from "react-native";
import React from "react";
import { BottomNavBarButtons, FirstPageHeader } from "../UI/organisms";
import { LandingPageStyle } from "../../styles";
import { GeneralStatsList } from "../UI/molecules/GeneralStatsList";

export function LandingPage() {
  return (
    <View style={LandingPageStyle.container}>
      <FirstPageHeader />
      <GeneralStatsList />
      <BottomNavBarButtons />
    </View>
  );
}
