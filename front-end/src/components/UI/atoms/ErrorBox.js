import { View, Text } from "react-native";
import React from "react";
import { AuthStyles } from "../../../styles/AuthPagesStyle";

export function ErrorBox({ description }) {
  return (
    <View style={AuthStyles.ErrorBox}>
      <Text>{description}</Text>
    </View>
  );
}
