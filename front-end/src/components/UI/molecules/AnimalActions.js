import { View, Text, TouchableHighlight } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";

export function AnimalActions({ navigation, id }) {
  const actions = ["Update Status", "Create Medical Record"];
  return (
    <View style={infoStyles.actionsContainer}>
      {actions.map((action, index) => {
        return (
          <TouchableHighlight
            key={actions[index]}
            underlayColor={"black"}
            onPress={() =>
              navigation.navigate(action, {
                id: id,
              })
            }
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
