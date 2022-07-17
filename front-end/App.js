import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  BottomNavBarButtons,
  FirstPageHeader,
} from "./src/components/UI/organisms";

export default function App() {
  return (
    <View style={styles.container}>
      <FirstPageHeader />
      <StatusBar style="auto" />
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
