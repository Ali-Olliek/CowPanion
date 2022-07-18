import { TextInput } from "react-native";
import React from "react";

export function PhoneNumberInput() {
  return (
    <TextInput
      textContentType="telephoneNumber"
      placeholder="Enter Your Phone Number"
    ></TextInput>
  );
}
