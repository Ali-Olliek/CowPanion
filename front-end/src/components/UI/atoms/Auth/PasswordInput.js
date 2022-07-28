import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";

export function PasswordInput({ setPasswordInput }) {
  return (
    <TextInput
      onChangeText={(password) => setPasswordInput(password)}
      style={inputFields.AuthInput}
      textContentType="password"
      placeholder="Password"
      secureTextEntry={true}
    ></TextInput>
  );
}
