import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";
export function NameInput({ setName }) {
  return (
    <TextInput
      onChangeText={(name) => setName(name)}
      style={inputFields.AuthInput}
      textContentType="name"
      placeholder="Enter Your Name"
    ></TextInput>
  );
}
