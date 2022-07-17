import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function CowsListButton() {
  return (
    <TouchableWithoutFeedback>
      <MaterialCommunityIcons name="cow" size={26} color="black" />
    </TouchableWithoutFeedback>
  );
}
