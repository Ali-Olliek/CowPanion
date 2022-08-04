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
import { useSelector } from "react-redux";
export function BottomNavBarButtons() {
  const Tab = createMaterialBottomTabNavigator();
  const { id, userType } = useSelector((state) => state.user.user);

  const farmerBottomNav = () => {
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
  };

  const vetBottomNav = () => {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="AnimalsList"
        activeColor="#F17754"
        inactiveColor="#fff"
        barStyle={{ backgroundColor: "#307A55" }}
      >
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
  };

  return (
    <>{userType && <>{userType == 2 ? farmerBottomNav() : vetBottomNav()}</>}</>
  );
}
