import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { buttons } from "../../../../styles/ButtonsStyle";

export function SecondaryAuthButton({ placeholder, nav, navigation }) {
  return (
    <View>
      <TouchableHighlight
        onPress={() => navigation.navigate(nav)}
        style={buttons.secondary}
        underlayColor={"#D46C4E"}
      >
        <Text>{placeholder}</Text>
      </TouchableHighlight>
    </View>
  );
}
