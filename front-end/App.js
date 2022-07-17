import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  BottomNavBarButtons,
  FirstPageHeader,
} from "./src/components/UI/organisms";
import { GeneralStatsCard } from "./src/components/UI/atoms/GeneralStatsCard";
export default function App() {
  return (
    <View style={styles.container}>
      <FirstPageHeader />
      <StatusBar style="auto" />
      <GeneralStatsCard />
      <BottomNavBarButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
