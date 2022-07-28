// React
import { View, Text, Image } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";
import { useState } from "react";

export function AnimalCard({ info }) {
  return (
    <View style={infoStyles.infoCard}>
      <View style={infoStyles.attr}>
        <View style={infoStyles.circle2}></View>
        <View style={infoStyles.circle}></View>
        <View style={infoStyles.list}>
          <Text>Name: {info.fields.name}</Text>

          <Text>Status: {info.fields.status}</Text>

          <Text>Year of Birth: {info.fields.DOB}</Text>
        </View>

        <Image
          source={{ uri: info.fields.QR_code }}
          style={{ width: 100, height: 100 }}
        ></Image>
      </View>
    </View>
  );
}
