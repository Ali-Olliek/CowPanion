// Modules
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { View, Text, TouchableHighlight } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
// Styles
import { styles } from "../../styles/AnimalsListStyle";
// Components
import { MainHeaderTitle } from "../UI/atoms";
import { FixingError } from "../UI/atoms";
import { AnimalRecord, AttributeBoxes } from "../UI/molecules";

export function AnimalsListPage({ navigation }) {
  // States and Variables
  const { token, id, userType } = useSelector((state) => state.user.user);
  const [animals, setAnimals] = useState([]);
  const [sortedAnimals, setSortedAnimals] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [attr, setAttr] = useState("Id");
  const [vetAnimals, setVetAnimals] = useState([]);
  //
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

  useEffect(() => {
    if (userType == 3) {
      getVetAnimals();
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      animals.length === 0 && userType == 2 ? getAnimals() : null; // Stops getting data from server
    }, [])
  );
  //
  // Sorting
  const idDescending = () => {
    setSortedAnimals([...animals].sort((a, b) => b.id - a.id));
  };
  const strDescending = () => {
    setSortedAnimals([...animals].sort((a, b) => (a.name > b.name ? -1 : 1)));
  };
  const ageDescending = () => {
    setSortedAnimals([...animals].sort((a, b) => (b.DOB > a.DOB ? -1 : 1)));
  };
  useEffect(() => {
    attr === "id"
      ? idDescending()
      : attr === "name"
      ? strDescending()
      : ageDescending();
  }, [attr]);

  // Creating Vet Request
  const vetAnimalsUrl = `http://10.0.2.2:8000/api/v1/getAssignedAnimals/?vet_id=${id}`;
  const getVetAnimals = () => {
    axios({
      method: "GET",
      headers: { Authorization: token },
      url: vetAnimalsUrl,
    })
      .then((response) => {
        if (response.data.code === 200) {
          setVetAnimals(response.data.animals);
          setFetchError(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <View>
        <View style={styles.header}>
          <MainHeaderTitle title={"Animals List"} />
        </View>
        <View style={styles.titles}>
          <AttributeBoxes setAttr={setAttr} />
        </View>
        {fetchError ? <FixingError /> : null}
        <View style={styles.list}>
          {animals.length === 0 && fetchError ? (
            <View style={styles.messageContainer}>
              <Text style={styles.messagePrimary}>No Animals</Text>
              <Text style={styles.messageSecondary}>
                Press The Orange Button To Add Animals To Your Farm
              </Text>
            </View>
          ) : (
            <AnimalRecord
              navigation={navigation}
              sorted={sortedAnimals}
              animals={userType == 2 ? animals : vetAnimals}
            />
          )}
        </View>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate("AddAnimal")}
        style={styles.AddAnimal}
      >
        <Text>+</Text>
      </TouchableHighlight>
    </>
  );
}
