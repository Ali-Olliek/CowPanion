import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

export function HomeButton({ navigation, nav }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(nav)}
      style={{ width: 50, height: 50 }}
    >
      <Feather name="home" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
