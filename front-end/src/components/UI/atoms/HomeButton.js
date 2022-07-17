import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

export function HomeButton() {
  return (
    <TouchableWithoutFeedback>
      <Feather name="home" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
