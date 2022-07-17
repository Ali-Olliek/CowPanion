import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

export function TodoListButton() {
  return (
    <TouchableWithoutFeedback>
      <Feather name="check-square" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
