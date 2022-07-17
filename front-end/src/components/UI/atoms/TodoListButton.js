import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

export function TodoListButton() {
  return (
    <TouchableWithoutFeedback style={{ width: 50, height: 50 }}>
      <Feather name="check-square" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
