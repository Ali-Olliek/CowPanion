// React
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// Pages
import {
  AnimalsListPage,
  RemindersPage,
  ProfilePage,
  MainPage,
  CameraPage,
} from "../../pages";

export function BottomNavBarButtons() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      activeColor="#F17754"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: "#307A55" }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
        name={"Home"}
        component={MainPage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cow" size={26} color={color} />
          ),
        }}
        name={"AnimalsList"}
        component={AnimalsListPage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="camera" size={24} color={color} />
          ),
        }}
        name={"Camera"}
        component={CameraPage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
        }}
        name={"Reminders"}
        component={RemindersPage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
        name={"Profile"}
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
}
