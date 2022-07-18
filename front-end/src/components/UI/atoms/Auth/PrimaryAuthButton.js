import { View, Text, TouchableWithoutFeedback } from "react-native";

export function PrimaryAuthButton({ placeholder }) {
  return (
    <View>
      <TouchableWithoutFeedback>
        <Text>{placeholder}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
