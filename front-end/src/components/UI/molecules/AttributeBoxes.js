// Modules
import { View, TouchableWithoutFeedback, Text } from "react-native";
import React from "react";

// Styles
import { styles } from "../../../styles/AnimalsListStyle";

export function AttributeBoxes({ setAttr }) {
  return (
    <View style={styles.Attributescontainer}>
      <TouchableWithoutFeedback onPress={() => setAttr("id")}>
        <View style={styles.attrId}>
          <Text style={styles.attrText}>ID ↑↓</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setAttr("DOB")}>
        <View style={styles.attrAge}>
          <Text style={styles.attrText}>Age ↑↓</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setAttr("name")}>
        <View style={styles.attrName}>
          <Text style={styles.attrText}>Name ↑↓</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.attrStatus}>
          <Text style={styles.attrText}>Status</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
