import { View, Text, FlatList } from "react-native";
import { styles } from "../../../styles/AnimalsListStyle";

export function AnimalRecord({ animals }) {
  return (
    <FlatList
      data={Object.keys(animals)}
      renderItem={({ item }) => (
        <View>
          <View style={styles.recordContainer}>
            <Text style={styles.status}>{animals[item].Status}</Text>
            <Text style={styles.animalAttr}>{animals[item].ID}</Text>
            <Text style={styles.animalAttr}>{animals[item].Name}</Text>
            <Text style={styles.animalAttr}>{animals[item].Age}</Text>
          </View>
          <View style={styles.hr}></View>
        </View>
      )}
    />
  );
}
