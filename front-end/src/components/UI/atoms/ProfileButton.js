import { TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileButton() {
  return (
    <TouchableWithoutFeedback>
      <Ionicons name="person-outline" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
