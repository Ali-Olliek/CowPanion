import { View, Text } from "react-native";

import { useSelector } from "react-redux";
import { profilePageStyles } from "../../../styles/ProfilePageStyles";

export function ProfileCard() {
  const { name, email } = useSelector((state) => state.user.user);

  const deleteData = async () => {
    await AsyncStorage.removeItem("userData");
  };

  return (
    <View style={profilePageStyles.profileCardContainer}>
      <View style={profilePageStyles.profileCard}>
        <View style={profilePageStyles.list}>
          <View style={profilePageStyles.circle}></View>
          <View style={profilePageStyles.info}>
            <Text style={profilePageStyles.name}> {name}</Text>
            <Text style={profilePageStyles.email}> {email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
