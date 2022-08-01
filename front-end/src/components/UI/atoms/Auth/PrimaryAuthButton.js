import { View, Text, TouchableHighlight } from "react-native";
import { buttons } from "../../../../styles/ButtonsStyle";

export function PrimaryAuthButton({ placeholder, setSendRequest }) {
  return (
    <View>
      <TouchableHighlight
        onPressIn={() => setSendRequest(true)}
        style={buttons.LoginPrimary}
      >
        <Text style={buttons.placeholder}>{placeholder}</Text>
      </TouchableHighlight>
    </View>
  );
}
