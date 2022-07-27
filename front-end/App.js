// Modules
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Pages and Components
import { BottomNavBarButtons } from "./src/components/UI/organisms/BottomNavBarButtons";
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
} from "./src/components/pages";

import { store } from "./src/redux/store";
import { useState } from "react";
import user from "./src/redux/features/user";

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
            <Stack.Screen name="SignUp" component={SignUpPage} />
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
// const RootNav = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         {userData == null ? (
//           <UnAuthNav />
//         ) : userData == 2 ? (
//           <FarmerNav />
//         ) : (
//           <VetNav />
//         )}
//       </NavigationContainer>
//     </Provider>
//   );
// };

// function VetNav() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Animal" component={AnimalInformationPage} />
//       <Stack.Screen
//         name="New Medical Record"
//         component={CreateMedicalRecordPage}
//       />
//     </Stack.Navigator>
//   );
// }

// function FarmerNav() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="LandingPage" component={BottomNavBarButtons} />
//       <Stack.Screen name="createReminder" component={CreateReminderPage} />
//       <Stack.Screen name="Animals" component={AnimalsListPage} />
//       <Stack.Screen name="createFarm" component={CreateFarmPage} />
//       <Stack.Screen name="Animal" component={AnimalInformationPage} />
//       <Stack.Screen name="Reminders" component={RemindersPage} />
//       <Stack.Screen name="OnBoarding" component={OnBoardingPage} />
//       <Stack.Screen name="AddAnimal" component={AddAnimalPage} />
//       <Stack.Screen
//         name="New Medical Record"
//         component={CreateMedicalRecordPage}
//       />
//       <Stack.Screen
//         name="userProfile"
//         props={setUserData}
//         component={ProfilePage}
//       />
//       <Stack.Screen name="Update Status" component={UpdateStatusPage} />
//     </Stack.Navigator>
//   );
// }

// function UnAuthNav() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="SignIn" component={LoginPage} />
//       <Stack.Screen name="SignUp" component={SignUpPage} />\
//     </Stack.Navigator>
//   );
// }
