import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";
export function PasswordInput() {
  return (
    <TextInput
      style={inputFields.AuthInput}
      textContentType="password"
      placeholder="Enter Your Password"
    ></TextInput>
  );
}
