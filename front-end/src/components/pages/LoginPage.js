import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { LoginPageStyle } from "../../styles/LoginPageStyle";

export function LoginPage() {
  return (
    <View style={LoginPageStyle.container}>
      <View style={LoginPageStyle.mainCard}>
        <TextInput
          textContentType="email"
          placeholder="Enter Your Email"
          style={LoginPageStyle.input}
        ></TextInput>
        <TextInput
          textContentType="password"
          placeholder="Enter Your Password"
          style={LoginPageStyle.input}
        ></TextInput>
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
