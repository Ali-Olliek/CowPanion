// Modules
import {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { SecondaryHeader } from "../UI/atoms/SecondaryHeader";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Picker } from "@react-native-picker/picker";

// Components
import { MainHeaderTitle } from "../UI/atoms";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { infoStyles, SignUpPageStyle } from "../../styles";
import { statusStyles } from "../../styles/StatusStyle";
import { createMed } from "../../styles";
import { InputStyles } from "../../styles/InputStyles";

//
//
export function UpdateStatusPage({ navigation, route }) {
  console.log(route.params.animal);
  //
  // States and Variables
  const { animal } = route.params;
  const [status, setStatus] = useState("");
  const data = { status: status, id: animal.id };
  const { token } = useSelector((state) => state.user.user);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const list = ["Heifer", "Calf", "Lactating", "Dry"];
  const [statusSelect, setSelectStatus] = useState();

  //
  // Create Request
  const changeStatusUrl = "api/v1/animal/update/";
  const changeStatus = () => {
    axios({
      method: "POST",
      url: changeStatusUrl,
      data: data,
      headers: {
        Authorization: token,
        "content-type": "multipart/form-data",
      },
    }).then((response) => {
      if (response.data.code === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigation.goBack();
        }, 1000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1000);
      }
    });
  };

  //
  // Main
  return (
    <>
      <View style={styles.header}>
        <SecondaryHeader
          subtitle={"update animal's status"}
          title={`Animal #${data.id}`}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {success ? (
          <View style={infoStyles.messageContainer}>
            <Text style={[infoStyles.message, infoStyles.success]}>
              Status Updated
            </Text>
          </View>
        ) : null}
        {error ? (
          <View style={infoStyles.messageContainer}>
            <Text style={[infoStyles.message, infoStyles.error]}>
              Update Failed
            </Text>
          </View>
        ) : null}
        <View style={infoStyles.inputs}>
          <Text style={InputStyles.prompt}>NAME</Text>
          <TextInput style={infoStyles.inActiveInput} editable={false}>
            {animal.name}
          </TextInput>
        </View>
        <View style={infoStyles.inputs}>
          <Text style={InputStyles.prompt}>BREED</Text>
          <TextInput style={infoStyles.inActiveInput} editable={false}>
            {animal.breed}
          </TextInput>
        </View>
        <View style={infoStyles.inputs}>
          <Text style={InputStyles.prompt}>Year of Birth</Text>
          <TextInput style={infoStyles.inActiveInput} editable={false}>
            {animal.age}
          </TextInput>
        </View>
        <View style={infoStyles.inputs}>
          <Text style={InputStyles.prompt}>New Status</Text>
          <View style={infoStyles.dropDown}>
            <Picker
              mode="dropdown"
              selectedValue={statusSelect}
              onValueChange={(itemValue) => [
                setStatus(itemValue),
                setSelectStatus(itemValue),
              ]}
            >
              <Picker.Item
                style={SignUpPageStyle.label}
                label={animal.Oldstatus}
                value={null}
              />
              {list.map((type, index) => {
                return (
                  <Picker.Item key={list[index]} label={type} value={type} />
                );
              })}
            </Picker>
          </View>
        </View>

        <View style={createMed.actions}>
          <TouchableWithoutFeedback onPress={changeStatus}>
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
      </KeyboardAvoidingView>
    </>
  );
}
