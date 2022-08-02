// Modules
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  Button,
  TextInput,
  Pressable,
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
import { InputStyles } from "../../styles/InputStyles";
import { SignUpPageStyle } from "../../styles";
import { SecondaryHeader } from "../UI/atoms/SecondaryHeader";

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
  //Main
  return (
    <View>
      <View style={styles.header}>
        <SecondaryHeader
          subtitle={"Never forget a thing"}
          title="Create Reminder"
        />
      </View>
      <View style={createReminderStyle.midSection}>
        <View style={createReminderStyle.inputsBox}>
          <Text style={createReminderStyle.prompt}>Title</Text>
          <TextInput
            onChangeText={(newTitle) => setTitle(newTitle)}
            style={createReminderStyle.inputs}
            placeholder="Ex: Cleaning"
            placeholderTextColor={"grey"}
          ></TextInput>
        </View>
        <View>
          <Text style={createReminderStyle.prompt}>Description</Text>
          <TextInput
            onChangeText={(newDesc) => setDescription(newDesc)}
            style={createReminderStyle.inputs}
            placeholder="Ex: Disinfect Milkers"
            placeholderTextColor={"grey"}
          ></TextInput>
        </View>
        <View style={createReminderStyle.inputsBox}>
          <Text style={createReminderStyle.prompt}>Due Date</Text>
          <View style={SignUpPageStyle.DOB}>
            {datePickerDisplay && (
              <DateTimePickerAndroid
                show
                value={date}
                mode={"date"}
                display={Platform.OS === "ios" ? "spinner" : "default"}
                dateFormat={"year"}
                onChange={onDateSelected}
              />
            )}

            {!datePickerDisplay && (
              <Pressable style={InputStyles.DOB} onPress={showDatePicker}>
                <Text style={{ color: "grey", fontWeight: "400" }}>
                  {String(date.toDateString())}
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
      <View>
        <View style={createReminderStyle.actions}>
          <TouchableHighlight
            underlayColor={"#D46C4E"}
            onPress={createReminder}
            style={createReminderStyle.save}
          >
            <Text style={createReminderStyle.saveText}>SAVE</Text>
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
    </View>
  );
}
