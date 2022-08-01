import { View, Text, TouchableHighlight } from "react-native";
import { buttons } from "../../../../styles/ButtonsStyle";

export function PrimaryAuthButton({ placeholder, setSendRequest, style }) {
  return (
    <View>
      <TouchableHighlight
        underlayColor={"#C86042"}
        onPressIn={() => setSendRequest(true)}
        style={style}
      >
        <Text style={buttons.placeholder}>{placeholder}</Text>
      </TouchableHighlight>
    </View>
  );
}
