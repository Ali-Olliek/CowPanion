import { View, Text } from "react-native";
import { headerSectionStyle } from "../../../styles/headerSectionStyle";
import { useFonts } from "expo-font";

export function HeaderTitle() {
  // Declare Fonts
  const [fontsLoaded] = useFonts({
    RobotoBold: require("../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    RobotoThin: require("../../../assets/fonts/Roboto/Roboto-Thin.ttf"),
    RobotoNormal: require("../../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    PoppinsBold: require("../../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsNormal: require("../../../assets/fonts/Poppins/Poppins-Medium.ttf"),
    PoppinsThin: require("../../../assets/fonts/Poppins/Poppins-Thin.ttf"),
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
