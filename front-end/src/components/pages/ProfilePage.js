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
import { FeedsGraph } from "../UI/atoms/BarGraphs/FeedsGraph";
import { GraphMain } from "../UI/atoms/BarGraphs/GraphMain";
import { SecondaryHeader } from "../UI/atoms/SecondaryHeader";
import { ProfileHeader } from "../UI/atoms/ProfileHeader";
import { profilePageStyles } from "../../styles/ProfilePageStyles";
import { InputStyles } from "../../styles/InputStyles";

//
//
export function ProfilePage({ setUserData }) {
  //
  // States and Variables
  const [milkData, setMilkData] = useState(null);
  const [feedData, setFeedData] = useState(null);
  const { id, token, name } = useSelector((state) => state.user.user);

  //
  // Creating Request to get Milk Data
  const getMilkDataUrl = `api/v1/getMilkProfiles/?user_id=${id}`;
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
  // Create Request to get Feeds Data
  const getFeedsUrl = "api/v1/getFeeds/";
  const getFeeds = () => {
    axios({
      method: "GET",
      url: getFeedsUrl,
      headers: { Authorization: token },
    }).then((response) => {
      setFeedData(response.data.feeds);
    });
  };
  //
  // Call on Navigation
  useFocusEffect(
    useCallback(() => {
      getData(); // only call the function if no data was fetched yet
      getFeeds();
    }, [])
  );
  return (
    <>
      <View style={styles.header}>
        <ProfileHeader title={"Profile"} subtitle={`${name}`} />
      </View>
      <View style={profilePageStyles.main}>
        <View style={{ marginVertical: 20 }}>
          <ProfileCard />
        </View>
        <View>
          <Text style={InputStyles.prompt}>Weekly Milk Data</Text>
          {milkData && <GraphMain milkData={milkData} />}
        </View>
        <View>
          <Text style={InputStyles.prompt}>Top 5 Protein Sources</Text>
          {feedData && <FeedsGraph feedData={feedData} />}
        </View>
      </View>
    </>
  );
}
