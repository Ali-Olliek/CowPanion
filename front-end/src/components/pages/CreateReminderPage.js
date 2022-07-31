// Modules
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  Button,
  TextInput,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { createMed } from "../../styles/createMedicalRecordStyle";
import { createReminderStyle } from "../../styles/createReminderStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";

export function CreateReminderPage({ navigation }) {
  //
  // States and Variables
  const [date, setDate] = useState(new Date());
  const [datePickerDisplay, setDatePickerDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { token, id } = useSelector((state) => state.user.user);
  //
  // Functions and handlers
  const showDatePicker = () => {
    setDatePickerDisplay(true);
  };
  const onDateSelected = (event, value) => {
    setDate(value);
    setDatePickerDisplay(false);
  };
  //
  // Create Request
  const createReminderUrl = "api/v1/createReminder/";
  const data = {
    user_id: id,
    task_title: title,
    task_description: description,
    due_time: date,
  };
  const createReminder = () => {
    axios({
      method: "POST",
      url: createReminderUrl,
      headers: { "content-type": "multipart/form-data", Authorization: token },
      data: data,
    }).then((response) => {
      navigation.goBack();
      console.log(response.data);
    });
  };

  //
  // Date Picker
  const dateComponent = () => {
    return (
      <SafeAreaView>
        <View style={createMed.MainContainer}>
          <Text style={createMed.text}>{date.toDateString()}</Text>

          {datePickerDisplay && (
            <DateTimePickerAndroid
              value={date}
              mode={"date"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              dateFormat={"day month year"}
              onChange={onDateSelected}
            />
          )}

          {!datePickerDisplay && (
            <View style={createMed.button}>
              <Button
                title="Select Date"
                color="#2A432A"
                onPress={showDatePicker}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  };
  //
  //Main
  return (
    <View>
      <View style={styles.header}>
        <MainHeaderTitle title="Create Reminder" />
      </View>
      <View style={createReminderStyle.midSection}>
        <TextInput
          onChangeText={(newTitle) => setTitle(newTitle)}
          style={createReminderStyle.inputs}
          placeholder="Reminder Title"
          placeholderTextColor={"grey"}
        ></TextInput>
        <TextInput
          onChangeText={(newDesc) => setDescription(newDesc)}
          style={createReminderStyle.inputs}
          placeholder="Reminder Description"
          placeholderTextColor={"grey"}
        ></TextInput>
        {dateComponent()}
      </View>
      <View style={createReminderStyle.actions}>
        <TouchableHighlight
          underlayColor={"#D46C4E"}
          onPress={createReminder}
          style={createReminderStyle.save}
        >
          <Text>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"white"}
          style={createReminderStyle.cancel}
          onPress={() => navigation.goBack()}
        >
          <Text>Cancel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
