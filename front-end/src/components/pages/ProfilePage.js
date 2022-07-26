// Modules
import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
// Styles
import { styles } from "../../styles/AnimalsListStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import { ProfileCard } from "../UI/organisms/ProfileCard";

import { GraphMain } from "../UI/atoms/LineGraph/GraphMain";
//
//
export function ProfilePage({ setUserData }) {
  //
  // States and Variables
  const [milkData, setMilkData] = useState(null);
  const { id, token } = useSelector((state) => state.user.user);

  //
  // Creating Requestt
  const getMilkDataUrl = `http://10.0.2.2:8000/api/v1/getMilkProfiles/?user_id=${id}`;
  const getData = () => {
    axios({
      method: "GET",
      url: getMilkDataUrl,
      headers: { Authorization: token },
    })
      .then((response) => {
        if (response.data.code === 200) {
          if (!response.data.milk_profiles) {
            setMilkData("No data");
          } else {
            setMilkData(response.data.milk_profiles);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //
  // Call on Navigation
  useFocusEffect(
    useCallback(() => {
      getData(); // only call the function if no data was fetched yet
    }, [])
  );
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle title={"Profile"} />
      </View>
      <View>
        <View>
          <ProfileCard />
        </View>
        <View style={{ alignItems: "flex-start", paddingHorizontal: 20 }}>
          <Text>Your Weekly Milk Data</Text>
          {milkData && <GraphMain milkData={milkData} />}
        </View>
      </View>
    </>
  );
}
