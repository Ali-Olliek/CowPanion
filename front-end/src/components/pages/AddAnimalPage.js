import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { MainHeaderTitle } from "../UI/atoms";
import { AddAnimalStyle } from "../../styles/AddAnimalStyle";
import { statusStyles } from "../../styles/StatusStyle";
import { createMed } from "../../styles/createMedicalRecordStyle";
import { styles } from "../../styles";
export function AddAnimalPage() {
  return (
    <View style={AddAnimalStyle.main}>
      <View style={styles.header}>
        <MainHeaderTitle title={"Add An Animal"} />
      </View>
      <View style={AddAnimalStyle.container}>
        <View style={AddAnimalStyle.container}>
          <TextInput
            style={AddAnimalStyle.inputs}
            placeholder="Name"
          ></TextInput>
          <TextInput
            style={AddAnimalStyle.inputs}
            placeholder="Year of Birth"
          ></TextInput>
          <TextInput
            style={AddAnimalStyle.inputs}
            placeholder="Current Status"
          ></TextInput>
          <TextInput
            style={AddAnimalStyle.inputs}
            placeholder="Breed"
          ></TextInput>
          <View style={statusStyles.container}>
            <View style={[statusStyles.PR, statusStyles.circle]}>
              <Text>PR</Text>
            </View>
            <View style={[statusStyles.D, statusStyles.circle]}>
              <Text>DRY</Text>
            </View>
            <View style={[statusStyles.H, statusStyles.circle]}>
              <Text>Heifer</Text>
            </View>
            <View style={[statusStyles.Q, statusStyles.circle]}>
              <Text>Quarantined</Text>
            </View>
          </View>
          <View style={AddAnimalStyle.nav}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={createMed.cancel}>
                <Text>Cancel</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={createMed.save}>
                <Text>Save</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
}
