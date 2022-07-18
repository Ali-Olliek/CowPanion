import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LandingPage } from "./src/components/pages/LandingPage";
import { SignUpPage } from "./src/components/pages/SignUpPage";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <SignUpPage />
      {/* <LoginPage /> */}
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
