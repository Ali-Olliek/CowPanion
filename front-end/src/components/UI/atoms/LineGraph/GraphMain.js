import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { BarChart } from "./LineGraph";

export function GraphMain() {
  const data = [
    { label: "Jan", value: 200 },
    { label: "Feb", value: 312 },
    { label: "Mar", value: 424 },
    { label: "Apr", value: 745 },
    { label: "May", value: 89 },
    { label: "Jun", value: 434 },
    { label: "Jul", value: 650 },
    { label: "Aug", value: 980 },
    { label: "Sep", value: 123 },
    { label: "Oct", value: 186 },
    { label: "Nov", value: 689 },
    { label: "Dec", value: 643 },
  ];
  return (
    <View style={styles.container}>
      <BarChart data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
});
