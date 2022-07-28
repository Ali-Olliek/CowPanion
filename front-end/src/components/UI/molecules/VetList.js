import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import React from "react";
import { createFarmStyle } from "../../../styles";

export function VetList({ list, setVet }) {
  const [vetSelect, setVetSelect] = useState(false);

  return (
    <View style={createFarmStyle.listContainer}>
      <Text>Choose a veterinarian</Text>
      <FlatList
        style={createFarmStyle.vetList}
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => setVet(item.id)}>
            <View
              style={!vetSelect ? createFarmStyle.vet : createFarmStyle.active}
            >
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
