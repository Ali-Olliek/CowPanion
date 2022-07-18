import { View, Text, FlatList } from "react-native";
import { styles } from "../../../styles/AnimalsListStyle";

export function AnimalRecord() {
  const animals = [
    {
      Status: "PR",
      ID: "6",
      Name: "Betsy",
      Age: "4",
    },
    {
      Status: "PR",
      ID: "2",
      Name: "Kiky",
      Age: "2",
    },
  ];

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
