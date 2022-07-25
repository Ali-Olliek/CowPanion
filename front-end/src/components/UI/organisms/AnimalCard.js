// React
import { View, Text, Image } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";
import { useState } from "react";

export function AnimalCard({ info }) {
  return (
    <View style={infoStyles.infoCard}>
      <View style={infoStyles.attr}>
        <View style={infoStyles.list}>
          <Text>Animal Id: {info.pk}</Text>
          <View style={infoStyles.hr}></View>
          <Text>Name: {info.fields.name}</Text>
          <View style={infoStyles.hr}></View>
          <Text>Status: {info.fields.status}</Text>
          <View style={infoStyles.hr}></View>
          <Text>Date of Birth: {info.fields.DOB}</Text>
          <View style={infoStyles.hr}></View>
        </View>
        <Image
          source={{ uri: info.fields.QR_code }}
          style={{ width: 75, height: 75 }}
        ></Image>
      </View>
    </View>
  );
}
