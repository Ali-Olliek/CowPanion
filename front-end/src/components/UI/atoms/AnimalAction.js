import { View, Text } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";

export function AnimalAction({ action }) {
  return (
    <View style={infoStyles.actionCard}>
      <Text>{action}</Text>
    </View>
  );
}
