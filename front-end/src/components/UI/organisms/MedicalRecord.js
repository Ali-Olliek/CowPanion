import { View, Text, FlatList } from "react-native";
import React from "react";
import { infoStyles } from "../../../styles/AnimalInfoStyle";
export function MedicalRecord({ records }) {
  return (
    <>
      {records.length === 0 ? (
        <View style={infoStyles.medicalCard}>
          <Text style={infoStyles.message}>No Medical Records Available</Text>
        </View>
      ) : (
        <View style={infoStyles.medicalCard}>
          <Text>Medical Records</Text>
          <FlatList
            data={Object.keys(records)}
            renderItem={({ item }) => (
              <View style={infoStyles.card}>
                <Text>{item.condition}</Text>
                <Text>{item.medication}</Text>
                <Text>{item.dateDone}</Text>
              </View>
            )}
          />
        </View>
      )}
    </>
  );
}
