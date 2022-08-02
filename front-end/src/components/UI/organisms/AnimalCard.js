// React
import { View, Text, Image, TouchableHighlight } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";
import { useState } from "react";
import { statusStyles } from "../../../styles/StatusStyle";

export function AnimalCard({ navigation, info, id }) {
  return (
    <View style={infoStyles.infoCard}>
      <View style={infoStyles.attr}>
        <View style={infoStyles.list}>
          <Text style={infoStyles.name}>{info.fields.name}</Text>
          <Text style={infoStyles.age}>{info.fields.DOB}</Text>

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
                id: id,
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
