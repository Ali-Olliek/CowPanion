import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LandingPage } from "./src/components/pages/LandingPage";
import { SignUpPage } from "./src/components/pages/SignUpPage";
import { AttributeBoxes } from "./src/components/UI/molecules/AttributeBoxes";
import { AnimalRecord } from "./src/components/UI/molecules/AnimalRecord";
import { AnimalsListPage } from "./src/components/pages/AnimalsListPage";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/* <SignUpPage /> */}
      {/* <LoginPage /> */}
      {/* <LandingPage /> */}
      {/* <AttributeBoxes /> */}
      {/* <AnimalRecord /> */}
      <AnimalsListPage />
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
