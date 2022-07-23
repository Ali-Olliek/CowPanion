import { TextInput } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";
export function PhoneNumberInput({ setPhoneNumber }) {
  return (
    <TextInput
      onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      style={inputFields.AuthInput}
      textContentType="telephoneNumber"
      placeholder="Enter Your Phone Number"
    ></TextInput>
  );
}
