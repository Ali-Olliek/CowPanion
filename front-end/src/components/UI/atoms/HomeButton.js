import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

export function HomeButton() {
  return (
    <TouchableWithoutFeedback style={{ width: 50, height: 50 }}>
      <Feather name="home" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
