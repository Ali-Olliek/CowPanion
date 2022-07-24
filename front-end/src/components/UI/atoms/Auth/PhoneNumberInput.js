import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";
export function PhoneNumberInput({ setPhoneNumberInput }) {
  return (
    <TextInput
      onChangeText={(phoneNumber) => setPhoneNumberInput(phoneNumber)}
      style={inputFields.AuthInput}
      textContentType="telephoneNumber"
      placeholder="Enter Your Phone Number"
    ></TextInput>
  );
}
