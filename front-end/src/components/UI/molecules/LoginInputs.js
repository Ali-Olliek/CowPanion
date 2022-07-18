import { View } from "react-native";
import { EmailInput, PasswordInput } from "../atoms";

export function LoginInputs() {
  return (
    <View>
      <EmailInput />
      <PasswordInput />
    </View>
  );
}
