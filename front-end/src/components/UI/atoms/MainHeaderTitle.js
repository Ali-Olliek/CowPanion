import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "../../../styles/AnimalsListStyle";

export function MainHeaderTitle({ title, subtitle, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Text style={styles.titles}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate("AddAnimal")}
        style={styles.AddAnimalButton}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableHighlight>
    </View>
  );
}
