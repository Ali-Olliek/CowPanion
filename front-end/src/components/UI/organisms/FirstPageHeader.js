import { View } from "react-native";
import React from "react";
import { WeatherCard } from "../atoms/WeatherCard";
import { HeaderTitle } from "../atoms/HeaderTitle";

export function FirstPageHeader() {
  return (
    <View>
      <HeaderTitle />
      <WeatherCard />
    </View>
  );
}
