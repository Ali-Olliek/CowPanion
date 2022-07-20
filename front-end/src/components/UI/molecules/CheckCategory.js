import { View } from "react-native";
import React from "react";
import { CategoryBox } from "../atoms/CategoryBox";
import { createReminderStyle } from "../../../styles/createReminderStyle";
export function CheckCategory() {
  const categories = ["Farm", "Animal", "MISC"];

  const display_categories = categories.map((category) => {
    return <CategoryBox title={category} />;
  });

  return (
    <View style={createReminderStyle.categories}>{display_categories}</View>
  );
}
