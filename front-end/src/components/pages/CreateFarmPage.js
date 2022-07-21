import { View, Text, TextInput, TouchableHighlight } from "react-native";
import React from "react";
import { MainHeaderTitle } from "../UI/atoms";
import { styles } from "../../styles/AnimalsListStyle";
import { createFarmStyle } from "../../styles/createFarmStyle";

// Generate Password For Farm and Send it with the post request

export function CreateFarmPage() {
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle title={"Create Farm"} />
      </View>
      <View style={createFarmStyle.midSec}>
        <TextInput
          style={createFarmStyle.inputs}
          placeholder="Farm Name"
          placeholderTextColor={"grey"}
        ></TextInput>
        <TextInput
          style={createFarmStyle.inputs}
          placeholder="Milk Container Volume (in cm3)"
          placeholderTextColor={"grey"}
        ></TextInput>
        <TouchableHighlight>
          <View style={createFarmStyle.GO}>
            <Text>GO</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}
