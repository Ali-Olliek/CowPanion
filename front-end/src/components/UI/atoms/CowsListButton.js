import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CowsListButton() {
  return (
    <TouchableWithoutFeedback>
      <MaterialCommunityIcons name="cow" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
