// Modules
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";
// Axios Config
axios.defaults.baseURL = "http://10.0.2.2:8000/";

// Pages and Components
import { BottomNavBarButtons } from "./src/components/UI/organisms/BottomNavBarButtons";
import { MainHeaderTitle } from "./src/components/UI/atoms";
import {
  AnimalInformationPage,
  AnimalsListPage,
  CreateMedicalRecordPage,
  CreateReminderPage,
  LoginPage,
  SignUpPage,
  RemindersPage,
  UpdateStatusPage,
  ProfilePage,
  MainPage,
  AddAnimalPage,
  CreateFarmPage,
  OnBoardingPage,
  CameraPage,
} from "./src/components/pages";

import { store } from "./src/redux/store";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const Stack = createNativeStackNavigator();
  // Fetch Data From Local Storage
  const [userData, setUserData] = useState("");

  const retrieveData = async () => {
    try {
      await AsyncStorage.getItem("userType").then((value) => {
        if (value !== null) {
          setUserData(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const RootNav = () => {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="SignIn" component={LoginPage} />
            <Stack.Screen
              options={{
                headerLeft: () => (
                  <Button
                    title="Info"
                    color="#00cc00"
                    onPress={() => navigation.goBack()}
                  />
                ),
              }}
              name="SignUp"
              component={SignUpPage}
            />
            <Stack.Screen name="LandingPage" component={BottomNavBarButtons} />
            <Stack.Screen
              name="createReminder"
              component={CreateReminderPage}
            />
            <Stack.Screen name="Animals" component={AnimalsListPage} />
            <Stack.Screen name="createFarm" component={CreateFarmPage} />
            <Stack.Screen name="Animal" component={AnimalInformationPage} />
            <Stack.Screen name="Reminders" component={RemindersPage} />
            <Stack.Screen name="OnBoarding" component={OnBoardingPage} />
            <Stack.Screen name="AddAnimal" component={AddAnimalPage} />
            <Stack.Screen
              name="Create Medical Record"
              component={CreateMedicalRecordPage}
            />
            <Stack.Screen
              name="userProfile"
              props={setUserData}
              component={ProfilePage}
            />
            <Stack.Screen name="Update Status" component={UpdateStatusPage} />
            <Stack.Screen name="HeaderNav" component={MainHeaderTitle} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  };

  // MAIN
  return (
    <Provider store={store}>
      <RootNav />
    </Provider>
  );
}
