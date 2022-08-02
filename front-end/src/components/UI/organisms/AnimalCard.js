// React
import { View, Text, Image, TouchableHighlight } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";
import { useState } from "react";
import { statusStyles } from "../../../styles/StatusStyle";

export function AnimalCard({ navigation, info, id }) {
  const name = info.fields.name;
  const age = info.fields.DOB;
  const breed = info.fields.breed;
  const status = info.fields.status;
  return (
    <View style={infoStyles.infoCard}>
      <View style={infoStyles.attr}>
        <View style={infoStyles.list}>
          <Text style={infoStyles.name}>{name}</Text>
          <Text style={infoStyles.age}>{age}</Text>
          <Text style={infoStyles.age}>{breed}</Text>

          {info.fields.status === "Lactating" ? (
            <Text style={statusStyles.LactatingSm}>Lactating</Text>
          ) : info.fields.status === "Heifer" ? (
            <Text style={statusStyles.HeiferSm}>Heifer</Text>
          ) : info.fields.status === "Calf" ? (
            <Text style={statusStyles.CalfSm}>Calf</Text>
          ) : (
            <Text style={statusStyles.DrySm}>Dry</Text>
          )}
        </View>
        <Image
          source={{ uri: info.fields.QR_code }}
          style={{ width: 120, height: 120 }}
        ></Image>
        <View style={infoStyles.EditInfoButton}>
          <TouchableHighlight
            underlayColor={"#307A55"}
            onPress={() =>
              navigation.navigate("Update Status", {
                animal: {
                  id: id,
                  name: name,
                  age: age,
                  breed: breed,
                  Oldstatus: status,
                },
              })
            }
          >
            <Text style={infoStyles.EditInfoText}>Edit Info</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
