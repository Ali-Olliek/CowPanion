// Modules

import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";

//
// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { infoStyles } from "../../styles";
//
// Components
import { MainHeaderTitle } from "../UI/atoms";
import { AnimalActions } from "../UI/molecules/AnimalActions";
import { MedicalRecord } from "../UI/organisms/MedicalRecord";
import { AnimalCard } from "../UI/organisms";

export function AnimalInformationPage({ navigation, route }) {
  const { id } = route.params;
  const { token } = useSelector((state) => state.user.user);
  const [animalData, setAnimalData] = useState(null);
  const [medicalRecord, setMedicalRecord] = useState([]);

  // Create Requests

  const animalInformationUrl = `http://10.0.2.2:8000/api/v1/animal/?animal_id=${id}`;
  const animalMedicalRecordUrl = `http://10.0.2.2:8000/api/v1/getMedicalRecord/?animal_id=${id}`;

  // get Information
  const getAnimalInfo = () => {
    axios({
      method: "GET",
      url: animalInformationUrl,
      data: { animal_id: id },
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setAnimalData(response.data.animal[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // get Medical Records
  const getMedicalRecord = () => {
    axios({
      method: "GET",
      url: animalMedicalRecordUrl,
      data: { animal_id: id },
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setMedicalRecord(response.data.medical_history);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Call on Navigation
  useFocusEffect(
    useCallback(() => {
      getAnimalInfo();
      getMedicalRecord();
    }, [])
  );

  // Main
  return (
    <>
      <View style={listStyles.header}>
        <MainHeaderTitle
          subtitle={"get a closer look"}
          title={`Animal #${id}`}
        />
      </View>
      <View>
        {animalData && <AnimalCard info={animalData} />}
        <AnimalActions id={id} navigation={navigation} />
        <MedicalRecord records={medicalRecord} />
      </View>
    </>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const listStyles = StyleSheet.create({
  header: {
    height: windowHeight * 0.15,
    width: windowWidth,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#273724",
  },
  back: {
    width: 45,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginVertical: 8,
    backgroundColor: "#ACC0B3",
    borderRadius: 8,
  },
});
