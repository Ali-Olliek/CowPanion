import { View, Text, TouchableHighlight } from "react-native";
import { buttons } from "../../../../styles/ButtonsStyle";
export function PrimaryAuthButton({ placeholder, nav, navigation }) {
  return (
    <View>
      <TouchableHighlight
        onPress={() => navigation.navigate(nav)}
        style={buttons.primary}
      >
        <Text>{placeholder}</Text>
      </TouchableHighlight>
    </View>
  );
}
