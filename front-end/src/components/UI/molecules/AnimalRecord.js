import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "../../../styles/AnimalsListStyle";

export function AnimalRecord({ animals, navigation }) {
  return (
    <FlatList
      data={Object.keys(animals)}
      renderItem={({ item }) => (
        <>
          <TouchableOpacity
            style={styles.recordContainer}
            onPress={() => navigation.navigate("Animal")}
          >
            <Text style={styles.status}>{animals[item].Status}</Text>
            <Text style={styles.animalAttr}>{animals[item].ID}</Text>
            <Text style={styles.animalAttr}>{animals[item].Name}</Text>
            <Text style={styles.animalAttr}>{animals[item].Age}</Text>
          </TouchableOpacity>
          <View style={styles.hr}></View>
        </>
      )}
    />
  );
}
