import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { MainHeaderTitle } from "../UI/atoms";
import { AddAnimalStyle } from "../../styles/AddAnimalStyle";
import { statusStyles } from "../../styles/StatusStyle";
import { createMed } from "../../styles/createMedicalRecordStyle";
import { styles } from "../../styles";
import { useSelector } from "react-redux";
import axios from "axios";

export function AddAnimalPage({ navigation }) {
  // States
  const [nameInput, setNameInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [breedInput, setBreedInput] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const [success, setSuccess] = useState(false);
  const { id, token } = useSelector((state) => state.user.user);

  // Create Request

  const addAnimalUrl = "api/v1/addAnimal/";
  const data = {
    name: nameInput,
    species: "Cow",
    breed: breedInput,
    DOB: yearInput,
    status: statusInput,
    user_id: id,
  };

  const AddAnimal = () => {
    axios({
      method: "POST",
      url: addAnimalUrl,
      data: data,
      headers: {
        Authorization: token,
        "content-type": "multipart/form-data",
      },
    }).then((response) => {
      if (response.data.code === 201) {
        setSuccess(true);
        navigation.goBack();
        setTimeout(() => {
          setSuccess(false);
        }, 500);
      }
    });
  };
  return (
    <View style={AddAnimalStyle.main}>
      <View style={styles.header}>
        <MainHeaderTitle title={"Add An Animal"} />
      </View>
      <View style={AddAnimalStyle.container}>
        {success ? (
          <Text style={AddAnimalStyle.success}>Animal Added</Text>
        ) : null}
        <View style={AddAnimalStyle.container}>
          <TextInput
            onChangeText={(name) => setNameInput(name)}
            style={AddAnimalStyle.inputs}
            placeholder="Name"
          ></TextInput>
          <TextInput
            onChangeText={(year) => setYearInput(year)}
            style={AddAnimalStyle.inputs}
            placeholder="Year of Birth"
          ></TextInput>
          <TextInput
            onChangeText={(breed) => setBreedInput(breed)}
            style={AddAnimalStyle.inputs}
            placeholder="Breed"
          ></TextInput>
          <View style={statusStyles.container}>
            <TouchableHighlight
              onPress={() => setStatusInput("Lactating")}
              underlayColor={"#c7a09f"}
              style={
                statusInput == "Lactating"
                  ? statusStyles.Lactating
                  : statusStyles.originalStatus
              }
            >
              <Text>Lactating</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setStatusInput("Dry")}
              underlayColor={"#8da1b5"}
              style={
                statusInput == "Dry"
                  ? statusStyles.Dry
                  : statusStyles.originalStatus
              }
            >
              <Text>Dry</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setStatusInput("Heifer")}
              style={
                statusInput == "Heifer"
                  ? statusStyles.Heifer
                  : statusStyles.originalStatus
              }
            >
              <Text>Heifer</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setStatusInput("Calf")}
              underlayColor={"#bf6767"}
              style={
                statusInput == "Calf"
                  ? statusStyles.Calf
                  : statusStyles.originalStatus
              }
            >
              <Text>Calf</Text>
            </TouchableHighlight>
          </View>
          <View style={AddAnimalStyle.nav}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={createMed.cancel}>
                <Text>Cancel</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={AddAnimal}>
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
