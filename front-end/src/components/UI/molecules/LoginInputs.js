import { View } from "react-native";
import { EmailInput, PasswordInput } from "../atoms";

export function LoginInputs({ setEmailInput, setPasswordInput }) {
  return (
    <View>
      <EmailInput setEmailInput={setEmailInput} />
      <PasswordInput setPasswordInput={setPasswordInput} />
    </View>
  );
}
