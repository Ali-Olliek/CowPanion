import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { headerSectionStyle } from "../../../styles/headerSectionStyle";

export function HeaderTitle() {
  // Declare Fonts
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("../../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    RobotoBold: require("../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Text style={headerSectionStyle.title}>Welcome, User</Text>
    </View>
  );
}
