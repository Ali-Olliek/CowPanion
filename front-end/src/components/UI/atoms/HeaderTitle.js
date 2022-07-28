import { View, Text } from "react-native";
import { headerSectionStyle } from "../../../styles/headerSectionStyle";
import { useSelector } from "react-redux";
export function HeaderTitle() {
  const { name } = useSelector((state) => state.user.user);
  return (
    <View style={headerSectionStyle.titlesContainer}>
      <Text style={headerSectionStyle.title}>Welcome back,</Text>
      <Text style={headerSectionStyle.subtitle}>{name}.</Text>
    </View>
  );
}
