import { View, Text, Image, TouchableHighlight } from "react-native";
import { infoStyles } from "../../../styles";

export function ProfileCard() {
  return (
    <View style={infoStyles.infoCard}>
      <View style={infoStyles.attr}>
        <View style={infoStyles.list}>
          <Text>Name</Text>
          <View>
            <TouchableHighlight style={infoStyles.password}>
              <Text>Update Password</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={infoStyles.picture}>
          <Image
            source={require("../../../assets/images/humidity.png")}
          ></Image>
        </View>
      </View>
    </View>
  );
}
