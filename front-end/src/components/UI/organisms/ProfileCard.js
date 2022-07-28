import { View, Text, Image, TouchableHighlight } from "react-native";
import { infoStyles } from "../../../styles";
import { useSelector } from "react-redux";

export function ProfileCard() {
  const { name } = useSelector((state) => state.user.user);
  const deleteData = async () => {
    await AsyncStorage.removeItem("userData");
  };
  return (
    <View style={infoStyles.profileCardContainer}>
      <View style={infoStyles.profileCard}>
        <View style={infoStyles.list}>
          <Text>Name: {name}</Text>
          <View>
            <TouchableHighlight style={infoStyles.password}>
              <Text>Update Password</Text>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight style={infoStyles.password}>
              <Text>Sign Out</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}
