// Modules
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
import { BarChart } from "./BarGraph";

export function GraphMain({ milkData }) {
  return (
    <View style={styles.container}>
      {milkData && <BarChart milkData={milkData} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
