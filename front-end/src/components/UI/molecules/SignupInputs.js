import { View, Text } from "react-native";
import {
  PasswordInput,
  EmailInput,
  NameInput,
  PhoneNumberInput,
} from "../atoms";

export function SignupInputs() {
  return (
    <View>
      <NameInput />
      <EmailInput />
      <PhoneNumberInput />
      <PasswordInput />
    </View>
  );
}
