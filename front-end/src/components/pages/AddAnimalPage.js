import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { SecondaryHeader } from "../UI/atoms/SecondaryHeader";
import React, { useState } from "react";

import { AddAnimalStyle } from "../../styles/AddAnimalStyle";

import { infoStyles, SignUpPageStyle, styles } from "../../styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { inputFields } from "../../styles/InputFields";
import { InputStyles } from "../../styles/InputStyles";
import { Picker } from "@react-native-picker/picker";

export function AddAnimalPage({ navigation }) {
  // States
  const [nameInput, setNameInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [breedInput, setBreedInput] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const [success, setSuccess] = useState(false);
  const { id, token } = useSelector((state) => state.user.user);
  const list = ["Heifer", "Calf", "Lactating", "Dry"];
  const [statusSelect, setSelectStatus] = useState();
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
        setTimeout(() => {
          setSuccess(false);
        }, 500);
      }
    });
  };
  return (
    <View style={AddAnimalStyle.main}>
      <View style={styles.header}>
        <SecondaryHeader
          subtitle={"Welcome to the family"}
          title={"Add An Animal"}
        />
      </View>
      <View style={AddAnimalStyle.container}>
        {success ? (
          <Text style={AddAnimalStyle.success}>Animal Added</Text>
        ) : null}
        <View style={AddAnimalStyle.container}>
          <View>
            <Text style={InputStyles.prompt}>Name</Text>
            <TextInput
              onChangeText={(name) => setNameInput(name)}
              style={InputStyles.LoginInput}
              placeholder="Ex: Betsie"
            ></TextInput>
          </View>
          <View>
            <Text style={InputStyles.prompt}>Year Of Birth</Text>
            <TextInput
              onChangeText={(year) => setYearInput(year)}
              style={InputStyles.LoginInput}
              placeholder="Ex: 2019"
            ></TextInput>
          </View>
          <View>
            <Text style={InputStyles.prompt}>Breed</Text>
            <TextInput
              onChangeText={(breed) => setBreedInput(breed)}
              style={InputStyles.LoginInput}
              placeholder="Ex: Holestien, Swiss Brown, etc..."
            ></TextInput>
          </View>
          <View style={AddAnimalStyle.statusBox}>
            <Text style={AddAnimalStyle.prompt}>Current Status</Text>
          </View>
          <View style={AddAnimalStyle.dropDown}>
            <Picker
              mode="dropdown"
              selectedValue={statusSelect}
              onValueChange={(itemValue, itemIndex) => [
                setStatusInput(itemValue),
                setSelectStatus(itemValue),
              ]}
            >
              <Picker.Item
                style={SignUpPageStyle.label}
                label={"Current Status ..."}
                value={null}
              />
              {list.map((type, index) => {
                return (
                  <Picker.Item key={list[index]} label={type} value={type} />
                );
              })}
            </Picker>
          </View>
          <View style={AddAnimalStyle.nav}>
            <TouchableWithoutFeedback onPress={AddAnimal}>
              <View style={AddAnimalStyle.save}>
                <Text style={AddAnimalStyle.saveText}>Save</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={AddAnimalStyle.cancel}>
                <Text>Cancel</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
}
