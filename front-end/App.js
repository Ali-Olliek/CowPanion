import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { OnBoardingPage } from "./src/components/pages/OnBoardingPage";
import { configureStore } from "@reduxjs/toolkit";

import {
  AnimalInformationPage,
  AnimalsListPage,
  CreateMedicalRecordPage,
  CreateReminderPage,
  LandingPage,
  LoginPage,
  SignUpPage,
  RemindersPage,
  UpdateStatusPage,
  ProfilePage,
} from "./src/components/pages";

import { store } from "./src/redux/store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SignIn" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="createReminder" component={CreateReminderPage} />
          <Stack.Screen name="Animals" component={AnimalsListPage} />
          <Stack.Screen name="Animal" component={AnimalInformationPage} />
          <Stack.Screen name="Reminders" component={RemindersPage} />
          <Stack.Screen name="OnBoarding" component={OnBoardingPage} />
          <Stack.Screen
            name="New Medical Record"
            component={CreateMedicalRecordPage}
          />
          <Stack.Screen name="userProfile" component={ProfilePage} />
          <Stack.Screen name="Update Status" component={UpdateStatusPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
