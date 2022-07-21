import { View, Text, TouchableHighlight } from "react-native";
import { buttons } from "../../../../styles/ButtonsStyle";
export function PrimaryAuthButton({ placeholder }) {
  return (
    <View>
      <TouchableHighlight style={buttons.primary}>
        <Text>{placeholder}</Text>
      </TouchableHighlight>
    </View>
  );
}
