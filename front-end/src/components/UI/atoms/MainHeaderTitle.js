import { View, Text } from "react-native";
import { styles } from "../../../styles/AnimalsListStyle";

export function MainHeaderTitle({ title, subtitle }) {
  return (
    <View>
      <Text style={styles.titles}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
}
