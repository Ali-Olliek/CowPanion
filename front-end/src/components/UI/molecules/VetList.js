import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import React from "react";
import { createFarmStyle } from "../../../styles";
import { Picker } from "@react-native-picker/picker";
export function VetList({ list, setVet }) {
  const [vetSelect, setVetSelect] = useState(null);

  return (
    <Picker
      mode="dropdown"
      selectedValue={vetSelect}
      onValueChange={(itemValue, itemIndex) => [
        setVetSelect(itemValue),
        setVet(itemValue.id),
      ]}
    >
      <Picker.Item label={"Choose a Veterinarian"} value={null} />
      {list.map((vet, index) => {
        return <Picker.Item key={list[index]} label={vet.name} value={vet} />;
      })}
    </Picker>
  );
}
