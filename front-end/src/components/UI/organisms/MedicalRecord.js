import { View, Text, FlatList } from "react-native";
import React from "react";
import { infoStyles } from "../../../styles/AnimalInfoStyle";
export function MedicalRecord() {
  const medicalRecords = [
    {
      condition: "Mitosis",
      medication: "Aspartame",
      dateDone: "2/7/2019",
    },
    {
      condition: "FMD",
      medication: "foot cream",
      dateDone: "20/8/2019",
    },
    {
      condition: "FMD",
      medication: "foot cream",
      dateDone: "20/8/2019",
    },
  ];

  return (
    <View style={infoStyles.medicalCard}>
      <Text>Medical Records</Text>
      <FlatList
        data={Object.keys(medicalRecords)}
        renderItem={({ item }) => (
          <View style={infoStyles.card}>
            <Text>{medicalRecords[item].condition}</Text>
            <Text>{medicalRecords[item].medication}</Text>
            <Text>{medicalRecords[item].dateDone}</Text>
          </View>
        )}
      />
    </View>
  );
}
