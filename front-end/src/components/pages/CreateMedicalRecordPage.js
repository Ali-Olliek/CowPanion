// Modules
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
// Styles
import { createMed } from "../../styles/createMedicalRecordStyle";
import { styles } from "../../styles/AnimalsListStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import axios from "axios";
import { useSelector } from "react-redux";

export function CreateMedicalRecordPage({
  navigation,
  route,
  setMedicalRecord,
}) {
  // State and Variables
  const { id } = route.params;
  const [datePickerDisplay, setDatePickerDisplay] = useState(false);
  const [date, setDate] = useState(new Date());
  const [condition, setCondition] = useState("");
  const [medications, setMedications] = useState("");
  const { token } = useSelector((state) => state.user.user);
  const [auth, setAuth] = useState(true);
  const [success, setSuccess] = useState(false);

  // Functions

  const showDatePicker = () => {
    setDatePickerDisplay(true);
  };
  const onDateSelected = (event, value) => {
    setDate(value);
    setDatePickerDisplay(false);
  };

  // Create Request

  const addMedicalRecordUrl =
    "http://10.0.2.2:8000/api/v1/updateMedicalRecord/";
  const data = {
    description: condition,
    medication: medications,
    done_at: date,
    animal_id: id,
  };

  const createMedicalRecord = () => {
    axios({
      method: "POST",
      url: addMedicalRecordUrl,
      data: data,
      headers: { "content-type": "multipart/form-data", Authorization: token },
    }).then((response) => {
      if (response.data.code === 201) {
        setSuccess(true);
        navigation.goBack();
      }
      if (response.data.code === 401) {
        setAuth(false);
        setTimeout(() => {
          navigation.navigate("LandingPage");
        }, 2000);
      }
    });
  };

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
                color="green"
                onPress={showDatePicker}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  };

  // Main
  return (
    <View>
      {!auth ? (
        <View style={createMed.Auth}>
          <Image
            style={createMed.image}
            source={require("../../assets/images/401.png")}
          />
          <Text style={createMed.messagePrimary}>
            Only a Certified Veterinarian Can Create Medical Records
          </Text>
          <Text style={createMed.messsageSecondary}>
            You're being redirected
          </Text>
        </View>
      ) : (
        <>
          {success ? <Text>Record Added</Text> : null}
          <View style={styles.header}>
            <MainHeaderTitle title="Create Medical Record" />
          </View>
          <View style={createMed.midSection}>
            <TextInput
              style={createMed.inputs}
              input
              placeholder="Condition"
              placeholderTextColor={"grey"}
              onChangeText={(newCondition) => setCondition(newCondition)}
            ></TextInput>
            <TextInput
              style={createMed.inputs}
              placeholder="Medications"
              placeholderTextColor={"grey"}
              onChangeText={(newMed) => setMedications(newMed)}
            ></TextInput>
            {dateComponent()}
          </View>
          <View style={createMed.actions}>
            <TouchableWithoutFeedback onPress={createMedicalRecord}>
              <View style={createMed.save}>
                <Text>Save</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={createMed.cancel}>
                <Text>Cancel</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </>
      )}
    </View>
  );
}
