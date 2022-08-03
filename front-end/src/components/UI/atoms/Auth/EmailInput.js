import { TextInput, Text, View } from "react-native";
import React from "react";
import { InputStyles } from "../../../../styles/InputStyles";

export function EmailInput({ setEmailInput }) {
  return (
    <View style={InputStyles.inputBox}>
      <Text style={InputStyles.prompt}>Email</Text>
      <TextInput
        onChangeText={(email) => setEmailInput(email)}
        style={InputStyles.LoginInput}
        textContentType="emailAddress"
        placeholder="Ex: John@Doe.com"
      ></TextInput>
    </View>
  );
}
