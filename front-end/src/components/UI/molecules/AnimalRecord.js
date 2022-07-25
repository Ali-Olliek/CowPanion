import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles } from "../../../styles/AnimalsListStyle";

export function AnimalRecord({ animals, navigation }) {
  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={animals}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                style={styles.recordContainer}
                onPress={() => navigation.navigate("Animal", { id: item.id })}
              >
                <Text style={styles.status}>{item.status}</Text>
                <Text style={styles.animalAttr}>{item.id}</Text>
                <Text style={styles.animalAttr}>{item.name}</Text>
                <Text style={styles.animalAttr}>{item.DOB}</Text>
              </TouchableOpacity>
              <View style={styles.hr}></View>
            </>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
