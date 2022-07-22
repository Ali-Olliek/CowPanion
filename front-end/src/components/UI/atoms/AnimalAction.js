import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { infoStyles } from "../../../styles/AnimalInfoStyle";

export function AnimalAction({ action, navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("MedicalRecord")}
    >
      <View style={infoStyles.actionCard}>
        <Text>{action}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
