// Modules
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
import { FeedsChart } from "./FeedsChart";

export function FeedsGraph({ feedData }) {
  return <>{feedData && <FeedsChart feedData={feedData} />}</>;
}
