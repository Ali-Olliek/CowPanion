import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { styles } from "../../../styles";
import { profilePageStyles } from "../../../styles/ProfilePageStyles";

export function ProfileHeader({ subtitle }) {
  return (
    <View style={{ flexDirection: "column", paddingTop: 20 }}>
      <Text style={styles.subTitle}>{subtitle}'s</Text>
      <View style={styles.bottomTitle}>
        <Text style={styles.titles}>Profile</Text>
        <TouchableHighlight>
          <Text style={profilePageStyles.logoutText}>&gt;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
