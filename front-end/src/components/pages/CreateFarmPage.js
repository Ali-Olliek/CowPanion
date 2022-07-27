// Modules
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, TextInput, TouchableHighlight } from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { createFarmStyle } from "../../styles/createFarmStyle";

//Components
import { Map } from "../UI/organisms";
import { MainHeaderTitle } from "../UI/atoms";
// Generate Password For Farm and Send it with the post request

export function CreateFarmPage({ navigation }) {
  //
  // States and variables
  const [name, setName] = useState("");
  const [container, setContainer] = useState("");
  const [coordinate, setCoordinate] = useState();
  const { id, token } = useSelector((state) => state.user.user);
  const farm_password = Math.floor(Math.random() * 100);

  //
  // Create Request
  const createFarmUrl = "http://10.0.2.2:8000/api/v1/createFarm/";
  const data = {
    name: name,
    location: JSON.stringify(coordinate),
    milk_container_volume: container,
    farm_password: farm_password,
    user_id: id,
  };

  const createFarm = () => {
    axios({
      method: "POST",
      url: createFarmUrl,
      data: data,
      headers: { Authorization: token, "content-type": "multipart/form-data" },
    })
      .then((response) => {
        if (response.data.code === 201) {
          navigation.navigate("LandingPage");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle title={"Create Farm"} />
      </View>
      <View style={createFarmStyle.midSec}>
        <View style={createFarmStyle.inputsContainer}>
          <TextInput
            onChangeText={(farmName) => setName(farmName)}
            style={createFarmStyle.inputs}
            placeholder="Farm Name"
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            onChangeText={(milkContainer) => setContainer(milkContainer)}
            style={createFarmStyle.inputs}
            placeholder="Milk Container Volume (in cm3)"
            placeholderTextColor={"grey"}
          ></TextInput>
        </View>
        <Map setCoordinate={setCoordinate} />
        <TouchableHighlight onPress={createFarm}>
          <View style={createFarmStyle.GO}>
            <Text>GO</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}
