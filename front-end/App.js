import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  AnimalInformationPage,
  AnimalsListPage,
  CreateFarmPage,
  CreateMedicalRecordPage,
  CreateReminderPage,
  LandingPage,
  LoginPage,
  SignUpPage,
  RemindersPage,
} from "./src/components/pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SignIn" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="AnimalsListPage" component={AnimalsListPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
