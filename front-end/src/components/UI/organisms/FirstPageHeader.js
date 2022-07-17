import { View } from "react-native";
import React from "react";
import { WeatherCard, HeaderTitle } from "../atoms";
export function FirstPageHeader() {
  return (
    <View>
      <HeaderTitle />
      <WeatherCard />
    </View>
  );
}
