import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Buttons } from "../../../styles";

export function PrimaryAuthButton({ placeholder }) {
  return (
    <View>
      <TouchableWithoutFeedback>
        <Text>{placeholder}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
