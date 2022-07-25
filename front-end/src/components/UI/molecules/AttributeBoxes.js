// Modules
import { View, TouchableWithoutFeedback, Text } from "react-native";
import React from "react";

// Styles
import { styles } from "../../../styles/AnimalsListStyle";

export function AttributeBoxes({ setAttr }) {
  return (
    <View style={styles.Attributescontainer}>
      <TouchableWithoutFeedback>
        <View style={styles.attributeBox}>
          <Text>Status</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setAttr("id")}>
        <View style={styles.attributeBox}>
          <Text>ID ↑↓</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setAttr("name")}>
        <View style={styles.attributeBox}>
          <Text>Name ↑↓</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setAttr("DOB")}>
        <View style={styles.attributeBox}>
          <Text>Age ↑↓</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
