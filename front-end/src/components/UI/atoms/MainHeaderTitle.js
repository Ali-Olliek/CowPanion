import { View, Text } from "react-native";
import { styles } from "../../../styles/AnimalsListStyle";

export function MainHeaderTitle({ title }) {
  return (
    <View style={styles.headertitle}>
      <Text>{title}</Text>
    </View>
  );
}
