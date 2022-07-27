import { View, Text, Image, TouchableHighlight } from "react-native";
import { infoStyles } from "../../../styles";
import { useSelector } from "react-redux";

export function ProfileCard() {
  const { name } = useSelector((state) => state.user.user);
  const deleteData = async () => {
    await AsyncStorage.removeItem("userData");
  };
  return (
    <View style={infoStyles.infoCard}>
      <View style={infoStyles.attr}>
        <View style={infoStyles.list}>
          <Text>Name: {name}</Text>
          <View>
            <TouchableHighlight style={infoStyles.password}>
              <Text>Update Password</Text>
            </TouchableHighlight>
          </View>
        </View>
        <TouchableHighlight onPress={deleteData}>
          <View>
            <Text>LOGOUT</Text>
          </View>
        </TouchableHighlight>
        <View style={infoStyles.picture}>
          <Image
            source={require("../../../assets/images/humidity.png")}
          ></Image>
        </View>
      </View>
    </View>
  );
}
