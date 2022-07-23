import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";
export function PasswordInput({ setPassword }) {
  return (
    <TextInput
      onChangeText={(password) => setPassword(password)}
      style={inputFields.AuthInput}
      textContentType="password"
      placeholder="Enter Your Password"
      secureTextEntry={true}
    ></TextInput>
  );
}
