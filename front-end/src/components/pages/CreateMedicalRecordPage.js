// Modules
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { SecondaryHeader } from "../UI/atoms/SecondaryHeader";
import React, { useState } from "react";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
// Styles
import { createMed } from "../../styles/createMedicalRecordStyle";
import { styles } from "../../styles/AnimalsListStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import axios from "axios";
import { useSelector } from "react-redux";
import { SignUpPageStyle } from "../../styles";
import { InputStyles } from "../../styles/InputStyles";

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

  const addMedicalRecordUrl = "api/v1/updateMedicalRecord/";
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
            <SecondaryHeader
              title={`Animal #${id}`}
              subtitle={"Create Medical Record"}
            />
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
                  <Text style={{ color: "grey", fontWeight: "300" }}>
                    Date: {String(date.toDateString())}
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
          <View style={createMed.actions}>
            <TouchableWithoutFeedback onPress={createMedicalRecord}>
              <View style={createMed.save}>
                <Text style={createMed.saveText}>SAVE</Text>
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
