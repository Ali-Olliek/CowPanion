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
import { Ionicons } from "@expo/vector-icons";

export function AnimalsListPage({ navigation }) {
  //
  // States and Variables
  const { token, id, userType } = useSelector((state) => state.user.user);
  const [animals, setAnimals] = useState([]);
  const [sortedAnimals, setSortedAnimals] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [attr, setAttr] = useState("Id");
  const [vetAnimals, setVetAnimals] = useState([]);
  //
  // Get animals on navigation
  useEffect(() => {
    getVetAnimals();
  }, [userType]);

  useFocusEffect(
    useCallback(() => {
      if (userType == 2) {
        getAnimals();
      }
    }, [])
  );
  //
  // Constructing Request
  const animalsListUrl = `api/v1/animals/?user_id=${id}`;
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

  //
  // Sorting
  const idDescending = () => {
    setSortedAnimals([...animals].sort((a, b) => b.id - a.id));
  };
  const idAscending = () => {
    setSortedAnimals([...animals].sort((a, b) => a.id - b.id));
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
  const vetAnimalsUrl = `api/v1/getAssignedAnimals/?vet_id=${id}`;
  const getVetAnimals = () => {
    axios({
      method: "GET",
      headers: { Authorization: token },
      url: vetAnimalsUrl,
    })
      .then((response) => {
        if (response.data.code === 200) {
          setVetAnimals(response.data.animals);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <MainHeaderTitle
            nav={"AddAnimal"}
            navigation={navigation}
            title={userType == 2 ? "Animals" : "List of Patients"}
            subtitle={
              userType == 2
                ? "All your farm animals listed"
                : "Animals from farms you're assigned to supervise"
            }
          />
        </View>
        <View style={styles.titles}>
          <AttributeBoxes setAttr={setAttr} />
        </View>
        {fetchError ? <FixingError /> : null}
        <View style={styles.list}>
          {userType == 3 && vetAnimals.length == 0 ? (
            <>
              <View style={styles.messageContainer}>
                <Ionicons name="add-outline" size={64} color="#2E302F" />
                <Text style={styles.messagePrimary}>No Animals to Display</Text>
                <Text style={styles.messageSecondary}>
                  Animals will display here once someone assign you to be their
                  farm's veterinarian
                </Text>
              </View>
            </>
          ) : (
            <AnimalRecord navigation={navigation} animals={vetAnimals} />
          )}
          {userType == 2 && animals.length == 0 ? (
            <>
              <View style={styles.messageContainer}>
                <Ionicons name="add-outline" size={64} color="#2E302F" />
                <Text style={styles.messagePrimary}>No Animals</Text>
                <Text style={styles.messageSecondary}>
                  Press The Plus Button To Add Animals
                </Text>
              </View>
            </>
          ) : (
            <AnimalRecord navigation={navigation} animals={animals} />
          )}
        </View>
      </View>
    </>
  );
}
