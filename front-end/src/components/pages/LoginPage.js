import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { LoginPageStyle } from "../../styles/LoginPageStyle";
import { LoginInputs } from "../UI/molecules/LoginInputs";
import { PrimaryAuthButton } from "../UI/atoms/PrimaryAuthButton";
import { SecondaryAuthButton } from "../UI/atoms/SecondaryAuthButton";

export function LoginPage() {
  return (
    <View style={LoginPageStyle.container}>
      <View style={LoginPageStyle.mainCard}>
        <LoginInputs />
        <PrimaryAuthButton placeholder={"Sign In"} />
        <SecondaryAuthButton placeholder={"Sign Up"} />
      </View>
    </View>
  );
}
