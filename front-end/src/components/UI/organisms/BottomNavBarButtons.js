import { View } from "react-native";
import {
  CameraButton,
  CowsListButton,
  HomeButton,
  ProfileButton,
  TodoListButton,
} from "../atoms";

export function BottomNavBarButtons() {
  return (
    <View>
      <HomeButton />
      <CowsListButton />
      <CameraButton />
      <TodoListButton />
      <ProfileButton />
    </View>
  );
}
