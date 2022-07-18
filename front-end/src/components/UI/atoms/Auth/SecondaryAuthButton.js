import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";

export function SecondaryAuthButton({ placeholder }) {
  return (
    <View>
      <TouchableWithoutFeedback>
        <Text>{placeholder}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
