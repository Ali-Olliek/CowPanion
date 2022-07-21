import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";
export function NameInput() {
  return (
    <TextInput
      style={inputFields.AuthInput}
      textContentType="text"
      placeholder="Enter Your Name"
    ></TextInput>
  );
}
