import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { infoStyles } from "../../../styles/AnimalInfoStyle";
export function MedicalRecord({ records }) {
  //
  // States and Variables
  const [clicked, setClicked] = useState("");
  const dates = [];
  for (let record in records) {
    let date = new Date(records[record].fields.done_at);
    let formattedDate = date.toLocaleDateString();
    dates.push(formattedDate);
  }

  //
  // Main
  return (
    <View>
      {records.length === 0 ? (
        <View style={infoStyles.medicalCard}>
          <Text style={infoStyles.message}>No Medical Records Available</Text>
        </View>
      ) : (
        <View style={infoStyles.medicalCard}>
          <Text style={{ color: "#fff" }}>Medical Records</Text>
          <FlatList
            data={Object.keys(records)}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setClicked(toString(index))}
                style={[!clicked ? infoStyles.card : infoStyles.enlarge]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Text>{records[item].fields.procedure_description}</Text>
                  <Text>{dates[index]}</Text>
                </View>
                {clicked ? (
                  <View style={{ width: 200 }}>
                    <Text style={{ justifyContent: "flex-start" }}>
                      {records[item].fields.medication}
                    </Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}
