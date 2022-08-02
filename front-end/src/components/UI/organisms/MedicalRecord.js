import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { infoStyles } from "../../../styles/AnimalInfoStyle";
export function MedicalRecord({ id, records, navigation }) {
  //
  // States and Variables
  const [clicked, setClicked] = useState(false);
  const dates = [];
  for (let record in records) {
    let date = new Date(records[record].fields.done_at);
    let formattedDate = date.toLocaleDateString();
    dates.push(formattedDate);
  }

  const handleClicked = () => {
    setClicked((current) => !current);
  };

  //
  // Main
  return (
    <View>
      {records.length === 0 ? (
        <View style={infoStyles.noMedical}>
          <View style={infoStyles.noRecordContainer}>
            <Text style={infoStyles.medicalRecordText}>Medical Records</Text>
            <TouchableHighlight
              underlayColor={"#fff"}
              onPress={() =>
                navigation.navigate("Create Medical Record", { id: id })
              }
            >
              <Text style={infoStyles.addMed}>+ Add</Text>
            </TouchableHighlight>
          </View>
          <Text style={infoStyles.message}>No Medical Records Available</Text>
        </View>
      ) : (
        <View style={infoStyles.medicalCard}>
          <View style={infoStyles.topSecMedicalCard}>
            <Text style={infoStyles.medicalRecordText}>Medical Records</Text>
            <TouchableHighlight
              underlayColor={"#fff"}
              onPress={() =>
                navigation.navigate("Create Medical Record", { id: id })
              }
            >
              <Text style={infoStyles.addMed}>+ Add</Text>
            </TouchableHighlight>
          </View>
          <FlatList
            data={Object.keys(records)}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={handleClicked}
                style={[!clicked ? infoStyles.card : infoStyles.enlarge]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <View>
                    <Text style={infoStyles.desc}>
                      {records[item].fields.procedure_description}
                    </Text>
                    <Text style={infoStyles.date}>{dates[index]}</Text>
                  </View>
                  <TouchableHighlight
                    underlayColor={"#fff"}
                    onPress={handleClicked}
                  >
                    <Text>...</Text>
                  </TouchableHighlight>
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
