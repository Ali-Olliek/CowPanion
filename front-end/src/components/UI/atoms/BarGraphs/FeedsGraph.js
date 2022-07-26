// Modules
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
import { FeedsChart } from "./FeedsChart";

export function FeedsGraph({ feedData }) {
  return (
    <View style={styles.container}>
      {feedData && <FeedsChart feedData={feedData} />}
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
