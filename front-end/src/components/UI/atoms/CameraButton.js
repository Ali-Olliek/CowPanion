import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

export function CameraButton() {
  return (
    <TouchableWithoutFeedback>
      <Feather name="camera" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
