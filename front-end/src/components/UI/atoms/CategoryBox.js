import { View, Text } from "react-native";
import React from "react";
import { createReminderStyle } from "../../../styles/createReminderStyle";

export function CategoryBox({ title }) {
  return (
    <View style={createReminderStyle.categoryBox}>
      <Text>{title}</Text>
    </View>
  );
}
