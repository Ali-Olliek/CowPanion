// React
import { View } from "react-native";
import React from "react";

// Styles
import { headerSectionStyle } from "../../../styles/headerSectionStyle";

// Components
import { WeatherCard, HeaderTitle } from "../atoms";

export function FirstPageHeader() {
  return (
    <View style={headerSectionStyle.container}>
      <HeaderTitle />
      <WeatherCard />
    </View>
  );
}
