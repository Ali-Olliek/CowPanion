// Modules
import { View, TouchableHighlight, Text, Image } from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { infoStyles } from "../../styles";

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
      <View style={styles.header}>
        <MainHeaderTitle title={"Animal Information"} />
      </View>
      <View>
        <TouchableHighlight
          style={infoStyles.backButton}
          onPress={() => navigation.goBack()}
          underlayColor={"white"}
        >
          <Text>back</Text>
        </TouchableHighlight>
        {animalData && <AnimalCard info={animalData} />}
        <AnimalActions id={id} navigation={navigation} />
        <MedicalRecord records={medicalRecord} />
      </View>
    </>
  );
}
