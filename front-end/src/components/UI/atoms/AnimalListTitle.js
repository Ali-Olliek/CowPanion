import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../../styles/AnimalsListStyle";

export function AnimalListTitle({ Attribute }) {
  return (
    <View style={styles.attributeBox}>
      <Text style={styles.attribute}>{Attribute}</Text>
    </View>
  );
}
