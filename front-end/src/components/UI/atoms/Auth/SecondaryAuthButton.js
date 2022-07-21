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
        style={buttons.secondary}
        onPress={() => navigation.navigate(nav)}
      >
        <Text>{placeholder}</Text>
      </TouchableHighlight>
    </View>
  );
}
