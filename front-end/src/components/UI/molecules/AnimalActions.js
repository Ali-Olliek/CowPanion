import { View, Text, TouchableHighlight } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";

export function AnimalActions({ navigation, id }) {
  const actions = ["Update Status", "New Medical Record"];
  return (
    <View style={infoStyles.actionsContainer}>
      {actions.map((action, index) => {
        return (
          <TouchableHighlight
            key={actions[index]}
            onPress={() =>
              navigation.navigate(action, {
                id: id,
              })
            }
            underlayColor={"white"}
          >
            <View key={actions[index]} style={infoStyles.actionCard}>
              <Text>{action}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}
