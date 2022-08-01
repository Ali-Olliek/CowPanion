import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import React from "react";
import { createFarmStyle } from "../../../styles";
import { Picker } from "@react-native-picker/picker";
import { InputStyles } from "../../../styles/InputStyles";
export function VetList({ list, setVet }) {
  const [vetSelect, setVetSelect] = useState(null);

  return (
    <>
      <Text style={InputStyles.prompt}>Choose a Veterinarian</Text>
      <View style={createFarmStyle.dropDown}>
        <Picker
          mode="dropdown"
          selectedValue={vetSelect}
          onValueChange={(itemValue, itemIndex) => [
            setVetSelect(itemValue),
            setVet(itemValue.id),
          ]}
        >
          <Picker.Item
            style={{ color: "grey", fontSize: 14 }}
            label={"Choose a Veterinarian"}
            value={null}
          />
          {list.map((vet, index) => {
            return (
              <Picker.Item key={list[index]} label={vet.name} value={vet} />
            );
          })}
        </Picker>
      </View>
    </>
  );
}
