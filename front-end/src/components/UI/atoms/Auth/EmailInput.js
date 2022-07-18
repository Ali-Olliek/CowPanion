import { TextInput } from "react-native";
import React from "react";

export function EmailInput() {
  return (
    <TextInput
      textContentType="email"
      placeholder="Enter Your Email"
    ></TextInput>
  );
}
