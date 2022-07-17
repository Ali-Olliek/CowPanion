import { View } from "react-native";
import React from "react";
import { WeatherCard, HeaderTitle } from "../atoms";
import { headerSectionStyle } from "../../../styles/headerSectionStyle";

export function FirstPageHeader() {
  return (
    <View style={headerSectionStyle.container}>
      <HeaderTitle />
      <WeatherCard />
    </View>
  );
}
