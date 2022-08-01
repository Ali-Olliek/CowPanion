import { TextInput, View, Text } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";
import { InputStyles } from "../../../../styles/InputStyles";
export function PhoneNumberInput({ setPhoneNumberInput }) {
  return (
    <View style={InputStyles.inputBox}>
      <Text style={InputStyles.prompt}>Phone Number</Text>
      <TextInput
        onChangeText={(number) => setPhoneNumberInput(number)}
        style={InputStyles.LoginInput}
        textContentType="telephoneNumber"
        placeholder="Ex: 961 XX XX XX"
      ></TextInput>
    </View>
  );
}
