import { View, Image, Text } from "react-native";
import React from "react";
import { UtilityStyles } from "../../../styles/UtilityStyles";
export function FixingError() {
  return (
    <View style={UtilityStyles.Error}>
      <Text>Something Went Wronggg</Text>
      <Image
        style={{ width: 220, height: 220 }}
        source={require("../../../assets/images/Error.png")}
      ></Image>
    </View>
  );
}
