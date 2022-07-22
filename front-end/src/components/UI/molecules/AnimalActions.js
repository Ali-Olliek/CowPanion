import { View, Text, TouchableHighlight } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";

export function AnimalActions({ navigation }) {
  const actions = ["Update Status", "New Medical Record"];

  return (
    <View style={infoStyles.actionsContainer}>
      {actions.map((action, index) => {
        return (
          <TouchableHighlight
            onPress={() => navigation.navigate(action)}
            underlayColor={"white"}
          >
            <View key={index} style={infoStyles.actionCard}>
              <Text>{action}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}
