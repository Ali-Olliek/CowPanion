import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../../styles";
export function SecondaryHeader({ title, subtitle }) {
  return (
    <View style={{ flexDirection: "column", paddingTop: 20 }}>
      <Text style={styles.subTitle}>{subtitle}</Text>
      <View style={styles.bottomTitle}>
        <Text style={styles.titles}>{title}</Text>
      </View>
    </View>
  );
}
