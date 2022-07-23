import { View, Text, TouchableHighlight } from "react-native";
import { buttons } from "../../../../styles/ButtonsStyle";
export function PrimaryAuthButton({ placeholder, nav, navigation, action }) {
  return (
    <View>
      <TouchableHighlight onPress={action} style={buttons.primary}>
        <Text>{placeholder}</Text>
      </TouchableHighlight>
    </View>
  );
}
