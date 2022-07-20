// React
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";

// Styles
import { createMed } from "../../styles/createMedicalRecordStyle";
import { styles } from "../../styles/AnimalsListStyle";

// Components
import DateTimePicker from "@react-native-community/datetimepicker";
import { MainHeaderTitle } from "../UI/atoms";

export default function CreateMedicalRecordPage() {
  const [datePickerDisplay, setDatePickerDisplay] = useState(false);
  return (
    <View>
      <View style={styles.header}>
        <MainHeaderTitle title="Create Medical Record" />
      </View>
      <View style={createMed.midSection}>
        <TextInput
          style={createMed.inputs}
          input
          placeholder="Condition"
          placeholderTextColor={"grey"}
        ></TextInput>
        <TextInput
          style={createMed.inputs}
          placeholder="Medications"
          placeholderTextColor={"grey"}
        ></TextInput>
        <TouchableHighlight
          style={createMed.dueDate}
          onPress={(e) => setDatePickerDisplay(true)}
        >
          <Text>Done On</Text>
        </TouchableHighlight>
        {datePickerDisplay ? (
          <DateTimePicker value={new Date(2022, 1, 1)} />
        ) : null}
      </View>
      <View style={createMed.actions}>
        <TouchableHighlight>
          <View style={createMed.save}>
            <Text>Save</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={createMed.cancel}>
            <Text>Cancel</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
