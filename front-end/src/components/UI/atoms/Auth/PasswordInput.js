import { TextInput, Text, View } from "react-native";
import React from "react";

import { InputStyles } from "../../../../styles/InputStyles";

export function PasswordInput({ setPasswordInput }) {
  return (
    <View style={InputStyles.inputBox}>
      <Text style={InputStyles.prompt}>Password</Text>
      <TextInput
        onChangeText={(password) => setPasswordInput(password)}
        style={InputStyles.LoginInput}
        textContentType="password"
        placeholder="Password"
        secureTextEntry={true}
      ></TextInput>
    </View>
  );
}
