// React
import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { MainHeaderTitle } from "../UI/atoms";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { infoStyles } from "../../styles";
import { statusStyles } from "../../styles/StatusStyle";
export function UpdateStatusPage({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle title={"Animal Information"} />
      </View>
      <TouchableHighlight
        style={infoStyles.backButton}
        onPress={() => navigation.goBack()}
        underlayColor={"white"}
      >
        <Text>back</Text>
      </TouchableHighlight>
      <View style={statusStyles.container}>
        <View style={[statusStyles.PR, statusStyles.circle]}>
          <Text>PR</Text>
        </View>
        <View style={[statusStyles.D, statusStyles.circle]}>
          <Text>D</Text>
        </View>
        <View style={[statusStyles.H, statusStyles.circle]}>
          <Text>H</Text>
        </View>
        <View style={[statusStyles.Q, statusStyles.circle]}>
          <Text>Q</Text>
        </View>
      </View>
    </>
  );
}
