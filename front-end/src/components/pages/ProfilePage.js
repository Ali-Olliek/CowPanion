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
import { MilkChart } from "../UI/organisms/milkChart";
import { LineGraph } from "../UI/atoms/LineGraph/LineGraph";
import { GraphMain } from "../UI/atoms/LineGraph/GraphMain";
//
//
export function ProfilePage({ setUserData }) {
  //
  // States and Variables
  const [milkData, setMilkData] = useState(null);
  const { id, token } = useSelector((state) => state.user.user);
  const [milkQuantity, setMilkQuantity] = useState([]);
  const [dates, setDates] = useState([]);
  //
  // Set Data as Key Value Pair of Date and Quantity
  // const sanitizeData = async () => {
  //   if (!milkData) {
  //     return;
  //   } else {
  //     for (let i = 0; i <= milkData.length - 1; i++) {
  //       let data = {
  //         day: milkData[i],
  //         quantity: milkData[i],
  //       };
  //       setMilkQuantity((attr) => ({
  //         ...attr,
  //         [milkData.fields.day]: milkData.fields.quantity,
  //       }));
  //     }
  //   }
  // };
  // console.log("here", milkQuantity);
  // useEffect(() => {
  //   setTimeout(() => {
  //     sanitizeData();
  //   }, 100);
  // }, [milkData]);

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
        <ProfileCard setUserData={setUserData} />
      </View>
      <View>
        <GraphMain />
      </View>
    </>
  );
}
