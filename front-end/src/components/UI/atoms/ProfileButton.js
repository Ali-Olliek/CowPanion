import { TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function ProfileButton() {
  return (
    <TouchableWithoutFeedback style={{ width: 50, height: 50 }}>
      <Ionicons name="person-outline" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
