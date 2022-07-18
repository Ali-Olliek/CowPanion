import { View } from "react-native";
import { infoStyles } from "../../../styles/AnimalInfoStyle";
import { AnimalAction } from "../atoms/AnimalAction";

export function AnimalActions() {
  const actions = ["Update Status", "Quarantine"];

  const displayActions = actions.map((action) => {
    return <AnimalAction action={action} />;
  });

  return <View style={infoStyles.actionsContainer}>{displayActions}</View>;
}
