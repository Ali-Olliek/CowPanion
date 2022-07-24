import { View, Text } from "react-native";
import React from "react";
import { MainHeaderTitle } from "../UI/atoms";
import { styles } from "../../styles/AnimalsListStyle";
import { ProfileCard } from "../UI/organisms/ProfileCard";

export function ProfilePage({ setUserData }) {
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle title={"Profile"} />
      </View>
      <View>
        <ProfileCard setUserData={setUserData} />
      </View>
    </>
  );
}
