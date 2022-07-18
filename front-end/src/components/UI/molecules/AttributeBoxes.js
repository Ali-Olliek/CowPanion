import { View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { AnimalListTitle } from "../atoms";
import { styles } from "../../../styles/AnimalsListStyle";

export function AttributeBoxes() {
  const titles = ["Status ↑↓", "ID ↑↓", "Name ↑↓", "Age ↑↓"];
  const displayTitles = titles.map((title) => {
    return <AnimalListTitle Attribute={title} />;
  });

  return (
    <TouchableWithoutFeedback>
      <View style={styles.Attributescontainer}>{displayTitles}</View>
    </TouchableWithoutFeedback>
  );
}
