//
// Modules
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
//
// Styles
import { styles } from "../../../styles/AnimalsListStyle";
import { statusStyles } from "../../../styles/StatusStyle";

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
                onPress={() => {
                  navigation.navigate("Animal", { id: item.id }); // Passing the id with navigation
                }}
              >
                {item.status === "Lactating" ? (
                  <Text style={[styles.status, statusStyles.Lactating]}>L</Text>
                ) : item.status === "Heifer" ? (
                  <Text style={[styles.status, statusStyles.Heifer]}>H</Text>
                ) : item.status === "Calf" ? (
                  <Text style={[styles.status, statusStyles.Calf]}>C</Text>
                ) : (
                  <Text style={[styles.status, statusStyles.Dry]}>D</Text>
                )}
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
