import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";

export function EmailInput() {
  return (
    <TextInput
      style={inputFields.AuthInput}
      textContentType="emailAddress"
      placeholder="Enter Your Email"
    ></TextInput>
  );
}
