// Modules
import { View, Text, StyleSheet, Dimensions } from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";

//
// Styles

//
// Components

import { MedicalRecord } from "../UI/organisms/MedicalRecord";
import { AnimalCard } from "../UI/organisms";
import { SecondaryHeader } from "../UI/atoms/SecondaryHeader";

export function AnimalInformationPage({ navigation, route }) {
  const { id, name, age, breed, status } = route.params;
  const { token } = useSelector((state) => state.user.user);
  const [animalData, setAnimalData] = useState(null);
  const [medicalRecord, setMedicalRecord] = useState([]);

  // Create Requests

  const animalInformationUrl = `api/v1/animal/?animal_id=${id}`;
  const animalMedicalRecordUrl = `api/v1/getMedicalRecord/?animal_id=${id}`;

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
        <SecondaryHeader
          subtitle={"get a closer look"}
          title={`Animal #${id}`}
        />
      </View>
      {animalData ? (
        <View>
          {animalData && (
            <AnimalCard id={id} navigation={navigation} info={animalData} />
          )}
          <MedicalRecord
            id={id}
            navigation={navigation}
            records={medicalRecord}
          />
        </View>
      ) : (
        <Text>Loading Data</Text>
      )}
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
    backgroundColor: "#307A55",
  },
});
