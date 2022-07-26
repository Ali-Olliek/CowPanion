import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingPage } from "./src/components/pages/OnBoardingPage";
import { useSelector, Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  MainPage,
  AddAnimalPage,
  CreateFarmPage,
} from "./src/components/pages";

import { store } from "./src/redux/store";
import { useState } from "react";

export default function App() {
  const Stack = createNativeStackNavigator();
  // Fetch Data From Local Storage
  const [userData, setUserData] = useState("");
  // const getUserData = async () => {
  //   data = await AsyncStorage.getItem("userData");
  //   setUserData(data);
  // };
  // getUserData();

  // const { isLogged } = useSelector((state) => console.log(state));
  const RootNav = () => {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignUpPage} />
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen
              name="createReminder"
              component={CreateReminderPage}
            />
            <Stack.Screen name="Animals" component={AnimalsListPage} />
            <Stack.Screen name="Animal" component={AnimalInformationPage} />
            <Stack.Screen name="Reminders" component={RemindersPage} />
            <Stack.Screen name="OnBoarding" component={OnBoardingPage} />
            <Stack.Screen name="AddAnimal" component={AddAnimalPage} />
            <Stack.Screen
              name="New Medical Record"
              component={CreateMedicalRecordPage}
            />
            <Stack.Screen
              name="userProfile"
              props={setUserData}
              component={ProfilePage}
            />
            <Stack.Screen name="Update Status" component={UpdateStatusPage} />
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
