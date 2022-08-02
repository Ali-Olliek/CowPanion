import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "../../../styles/AnimalsListStyle";

export function MainHeaderTitle({ title, subtitle, navigation, nav }) {
  return (
    <View style={{ flexDirection: "column", paddingTop: 20 }}>
      <Text style={styles.subTitle}>{subtitle}</Text>
      <View style={styles.bottomTitle}>
        <Text style={styles.titles}>{title}</Text>
        <TouchableHighlight
          underlayColor={"#307A55"}
          onPress={() => navigation.navigate(nav)}
          style={styles.AddAnimalButton}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
