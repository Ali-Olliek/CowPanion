// React
import { View } from "react-native";
import {
  CameraButton,
  CowsListButton,
  HomeButton,
  ProfileButton,
  TodoListButton,
} from "../atoms";

import { bottomNavBarStyle } from "front-end/src/styles/bottomNavBarStyle.js";

export function BottomNavBarButtons() {
  return (
    <View style={bottomNavBarStyle.container}>
      <HomeButton />
      <CowsListButton />
      <CameraButton />
      <TodoListButton />
      <ProfileButton />
    </View>
  );
}
