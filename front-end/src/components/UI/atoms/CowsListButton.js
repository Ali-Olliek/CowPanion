import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function CowsListButton() {
  return (
    <TouchableWithoutFeedback style={{ width: 50, height: 50 }}>
      <MaterialCommunityIcons name="cow" size={26} color="black" />
    </TouchableWithoutFeedback>
  );
}
