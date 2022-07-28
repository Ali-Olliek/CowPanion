import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";

export function EmailInput({ setEmailInput }) {
  return (
    <TextInput
      onChangeText={(email) => setEmailInput(email)}
      style={inputFields.AuthInput}
      textContentType="emailAddress"
      placeholder="Email"
    ></TextInput>
  );
}
