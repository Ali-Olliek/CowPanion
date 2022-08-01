import {
  View,
  Image,
  Text,
  TouchableHighlight,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import { AuthStyles } from "../../../styles/AuthPagesStyle";
import { useState } from "react";
import {
  PasswordInput,
  EmailInput,
  NameInput,
  PhoneNumberInput,
} from "../atoms";
import { Picker } from "@react-native-picker/picker";
import { SignUpPageStyle } from "../../../styles";
import { createMed } from "../../../styles";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
import { InputStyles } from "../../../styles/InputStyles";

export function SignupInputs({ props }) {
  // States and Variables
  const [farmer, setFarmer] = useState(false);
  const [vet, setVet] = useState(false);
  const list = ["Farmer", "Veterinarian"];
  const [userTypeSelect, setUserTypeSelect] = useState(null);

  // DatePicker
  const [datePickerDisplay, setDatePickerDisplay] = useState(false);

  // Functions and Handlers
  const showDatePicker = () => {
    setDatePickerDisplay(true);
  };
  const onDateSelected = (event, value) => {
    props.setDate(value);
    setDatePickerDisplay(false);
  };

  return (
    <View style={SignUpPageStyle.inputsContainer}>
      <NameInput setNameInput={props.setNameInput} />
      <EmailInput setEmailInput={props.setEmailInput} />
      <PhoneNumberInput setPhoneNumberInput={props.setPhoneNumberInput} />
      <PasswordInput setPasswordInput={props.setPasswordInput} />
      <Text style={InputStyles.prompt}>Date of Birth</Text>
      <View style={InputStyles.inputBox}>
        <View style={SignUpPageStyle.DOB}>
          {datePickerDisplay && (
            <DateTimePickerAndroid
              show
              value={props.date}
              mode={"date"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              dateFormat={"year"}
              onChange={onDateSelected}
            />
          )}

          {!datePickerDisplay && (
            <Pressable style={InputStyles.DOB} onPress={showDatePicker}>
              <Text style={{ color: "grey", fontWeight: "300" }}>
                Date of Birth
              </Text>
            </Pressable>
          )}
        </View>
      </View>
      <View style={SignUpPageStyle.dropDown}>
        <Picker
          mode="dropdown"
          selectedValue={userTypeSelect}
          onValueChange={(itemValue, itemIndex) => [
            props.setUserType(itemValue),
            setUserTypeSelect(itemValue),
          ]}
        >
          <Picker.Item
            style={SignUpPageStyle.label}
            label={"I am a ..."}
            value={null}
          />
          {list.map((type, index) => {
            return (
              <Picker.Item key={list[index]} label={type} value={index + 2} />
            );
          })}
        </Picker>
      </View>
    </View>
  );
}
