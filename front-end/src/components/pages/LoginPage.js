import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { LoginPageStyle } from "../../styles/LoginPageStyle";
import { LoginInputs } from "../UI/molecules/LoginInputs";

export function LoginPage() {
  return (
    <View style={LoginPageStyle.container}>
      <View style={LoginPageStyle.mainCard}>
        <LoginInputs />
        <TouchableWithoutFeedback>
          <Text style={LoginPageStyle.primaryButton}>Sign In</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={LoginPageStyle.secondaryButton}>Sign Up</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
