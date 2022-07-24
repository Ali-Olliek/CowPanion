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
  const { id, token } = useSelector((state) => state.user.user);

  // Create Request

  const addAnimalUrl = "http://10.0.2.2:8000/api/v1/addAnimal/";
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
      console.log(response.data);
    });
  };
  return (
    <View style={AddAnimalStyle.main}>
      <View style={styles.header}>
        <MainHeaderTitle title={"Add An Animal"} />
      </View>
      <View style={AddAnimalStyle.container}>
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
              onPress={() => setStatusInput("Pregnant")}
              underlayColor={"#c7a09f"}
              style={[statusStyles.PR, statusStyles.circle]}
            >
              <Text>Pregnant</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setStatusInput("Dry")}
              underlayColor={"#8da1b5"}
              style={[statusStyles.D, statusStyles.circle]}
            >
              <Text>Dry</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setStatusInput("Heifer")}
              style={[statusStyles.H, statusStyles.circle]}
            >
              <Text>Heifer</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setStatusInput("Quarantined")}
              underlayColor={"#bf6767"}
              style={[statusStyles.Q, statusStyles.circle]}
            >
              <Text>Quarantined</Text>
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
