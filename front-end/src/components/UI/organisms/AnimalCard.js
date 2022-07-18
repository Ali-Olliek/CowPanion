import { View, Text, Image } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";

export function AnimalCard() {
  return (
    <View style={infoStyles.attr}>
      <View style={infoStyles.list}>
        <Text>ID</Text>
        <View style={infoStyles.hr}></View>
        <Text>Name</Text>
        <View style={infoStyles.hr}></View>
        <Text>Status</Text>
        <View style={infoStyles.hr}></View>
        <Text>Age</Text>
        <View style={infoStyles.hr}></View>
      </View>
      <View style={infoStyles.picture}>
        <Image source={require("../../../assets/images/humidity.png")}></Image>
      </View>
    </View>
  );
}
