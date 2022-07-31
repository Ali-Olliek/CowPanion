// Modules
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  Dimensions,
} from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { createFarmStyle } from "../../styles/createFarmStyle";

//Components
import { Map } from "../UI/organisms";
import { MainHeaderTitle } from "../UI/atoms";
import { VetList } from "../UI/molecules/VetList";
import { style } from "d3";

// Generate Password For Farm and Send it with the post request
export function CreateFarmPage({ navigation }) {
  //
  // States and variables
  const [name, setName] = useState("");
  const [vets, setVets] = useState([]);
  const [container, setContainer] = useState("");
  const [coordinate, setCoordinate] = useState();
  const [vetId, setVetId] = useState(null);

  const { id, token } = useSelector((state) => state.user.user);
  const farm_password = Math.floor(Math.random() * 100);

  //
  // Create Request to Create a Farm
  const createFarmUrl = "api/v1/createFarm/";
  const data = {
    name: name,
    location: JSON.stringify(coordinate),
    milk_container_volume: container,
    farm_password: farm_password,
    user_id: id,
    vet_id: vetId,
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

  useEffect(() => {
    getVets();
  }, []);

  // Create Request To Fetch Vets
  const getVetsUrl = "api/v1/getVets";
  const getVets = () => {
    axios({
      method: "GET",
      url: getVetsUrl,
      headers: { Authorization: token },
    })
      .then((response) => {
        if (response.data.code === 200) {
          setVets(response.data.vet_list);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <View style={styles.createFarmHeader}>
        <MainHeaderTitle title={"Create Farm"} subtitle={"and start!"} />
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={require("../../assets/images/Create.png")}
        />
      </View>
      <View style={createFarmStyle.inputsContainer}>
        <View style={createFarmStyle.data}>
          <TextInput
            onChangeText={(farmName) => setName(farmName)}
            style={name ? createFarmStyle.inputs : createFarmStyle.placeholder}
            placeholder="Farm Name"
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            onChangeText={(milkContainer) => setContainer(milkContainer)}
            style={
              container ? createFarmStyle.inputs : createFarmStyle.placeholder
            }
            placeholder="Milk Container Volume (in cm3)"
            placeholderTextColor={"grey"}
          ></TextInput>
          <VetList setVet={setVetId} list={vets} />
        </View>
        <View
          style={{
            height: 0.5 * Dimensions.get("screen").height,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map setCoordinate={setCoordinate} />
          <TouchableHighlight onPress={createFarm}>
            <View style={createFarmStyle.GO}>
              <Text>GO</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
}
