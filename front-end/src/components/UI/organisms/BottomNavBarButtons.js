// React
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// Pages
import {
  AnimalsListPage,
  CreateFarmPage,
  RemindersPage,
  ProfilePage,
  MainPage,
} from "../../pages";

export function BottomNavBarButtons() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      activeColor="#D46C4E"
      inactiveColor="#000000"
      barStyle={{ backgroundColor: "#ACC0B3" }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name={"Home"}
        component={MainPage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Animals",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cow" size={26} color={color} />
          ),
        }}
        name={"AnimalsList"}
        component={AnimalsListPage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Reminders",
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
        }}
        name={"Reminders"}
        component={RemindersPage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Reminders",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
        name={"Profile"}
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
}
