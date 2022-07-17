import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

export function CameraButton() {
  return (
    <TouchableWithoutFeedback style={{ width: 50, height: 50 }}>
      <Feather name="camera" size={24} color="black" />
    </TouchableWithoutFeedback>
  );
}
