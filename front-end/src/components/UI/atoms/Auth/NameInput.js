import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";
export function NameInput({ setNameInput }) {
  return (
    <TextInput
      onChangeText={(name) => setNameInput(name)}
      style={inputFields.AuthInput}
      textContentType="name"
      placeholder="Name"
    ></TextInput>
  );
}
