// React
import { View, Text, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { createReminderStyle } from "../../styles/createReminderStyle";

// Components
import { CheckCategory } from "../UI/molecules/CheckCategory";
import { MainHeaderTitle } from "../UI/atoms";

export function CreateReminderPage({ navigation }) {
  const [datePickerDisplay, setDatePickerDisplay] = useState(false);
  return (
    <View>
      <View style={styles.header}>
        <MainHeaderTitle title="Create Reminder" />
      </View>
      <View style={createReminderStyle.midSection}>
        <TextInput
          style={createReminderStyle.inputs}
          input
          placeholder="Reminder Title"
          placeholderTextColor={"grey"}
        ></TextInput>
        <TextInput
          style={createReminderStyle.inputs}
          placeholder="Reminder Description"
          placeholderTextColor={"grey"}
        ></TextInput>
        <CheckCategory />
        <TouchableHighlight
          style={createReminderStyle.dueDate}
          onPress={(e) => setDatePickerDisplay(true)}
        >
          <Text>Due Date</Text>
        </TouchableHighlight>
        {datePickerDisplay ? (
          <DateTimePicker value={new Date(2022, 1, 1)} />
        ) : null}
      </View>
      <View style={createReminderStyle.actions}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Reminders")}
          style={createReminderStyle.save}
        >
          <Text>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={createReminderStyle.cancel}
          onPress={() => navigation.navigate("Reminders")}
        >
          <Text>Cancel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
