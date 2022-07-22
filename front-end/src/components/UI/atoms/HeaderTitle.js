import { View, Text } from "react-native";
import { headerSectionStyle } from "../../../styles/headerSectionStyle";

export function HeaderTitle() {
  return (
    <View>
      <Text style={headerSectionStyle.title}>Welcome, User</Text>
    </View>
  );
}
