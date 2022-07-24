// Modules
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, TouchableHighlight } from "react-native";
// Styles
import { styles } from "../../styles/AnimalsListStyle";
// Components
import { MainHeaderTitle } from "../UI/atoms";
import { FixingError } from "../UI/atoms";
import { AnimalRecord, AttributeBoxes } from "../UI/molecules";

export function AnimalsListPage({ navigation }) {
  const { token, id } = useSelector((state) => state.user.user);
  const [animals, setAnimals] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  // Constructing Request
  const animalsListUrl = `http://10.0.2.2:8000/api/v1/animals/?user_id=${id}`;
  const getAnimals = () => {
    axios({
      method: "GET",
      url: animalsListUrl,
      data: { user_id: id },
      headers: {
        Authorization: token,
        "content-type": "multipart/form-data",
      },
    }).then((response) => {
      if (response.data.code === 200) {
        setAnimals(response.data.animals);
      } else {
        setFetchError(true);
        setTimeout(() => {
          setFetchError(false);
        }, 1500);
      }
    });
  };
  getAnimals();
  return (
    <>
      <View>
        <View style={styles.header}>
          <MainHeaderTitle title={"Animals List"} />
        </View>
        <View style={styles.titles}>
          <AttributeBoxes />
        </View>
        {fetchError ? <FixingError /> : null}
        <View style={styles.list}>
          {animals.length === 0 && !fetchError ? (
            <View style={styles.messageContainer}>
              <Text style={styles.messagePrimary}>No Animals</Text>
              <Text style={styles.messageSecondary}>
                Press The Orange Button To Add Animals To Your Farm
              </Text>
            </View>
          ) : (
            <AnimalRecord navigation={navigation} animals={animals} />
          )}
        </View>
      </View>
      <View style={styles.AddAnimal}>
        <Text>+</Text>
      </View>
    </>
  );
}
