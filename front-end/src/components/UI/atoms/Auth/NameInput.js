import { TextInput, View, Text } from "react-native";
import React from "react";
import { inputFields } from "../../../../styles/InputFields";
import { InputStyles } from "../../../../styles/InputStyles";

export function NameInput({ setNameInput }) {
  return (
    <View style={InputStyles.inputBox}>
      <Text style={InputStyles.prompt}>Full Name</Text>
      <TextInput
        onChangeText={(name) => setNameInput(name)}
        style={InputStyles.LoginInput}
        textContentType="name"
        placeholder="Ex: John Doe"
      ></TextInput>
    </View>
  );
}
