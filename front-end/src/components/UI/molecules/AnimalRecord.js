//
// Modules
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";
//
// Styles
import { styles } from "../../../styles/AnimalsListStyle";
import { statusStyles } from "../../../styles/StatusStyle";

export function AnimalRecord({ animals, navigation, sorted }) {
  const { userType } = useSelector((state) => state.user.user);

  const DisplayVetAnimals = () => {
    return (
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
                <Text style={statusStyles.LactatingSm}>L</Text>
              ) : item.status === "Heifer" ? (
                <Text style={statusStyles.HeiferSm}>H</Text>
              ) : item.status === "Calf" ? (
                <Text style={statusStyles.CalfSm}>C</Text>
              ) : (
                <Text style={statusStyles.DrySm}>D</Text>
              )}
              <Text style={styles.animalAttr}>{item.id}</Text>
              <Text style={styles.animalName}>{item.name}</Text>
              <Text style={styles.animalAttr}>{item.DOB}</Text>
            </TouchableOpacity>
            <View style={styles.hr}></View>
          </>
        )}
      />
    );
  };

  const DisplayFarmerAnimals = () => {
    return (
      <FlatList
        data={sorted ? sorted : animals}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              style={styles.recordContainer}
              onPress={() => {
                navigation.navigate("Animal", { id: item.id }); // Passing the id with navigation
              }}
            >
              {item.status === "Lactating" ? (
                <Text style={statusStyles.LactatingSm}>L</Text>
              ) : item.status === "Heifer" ? (
                <Text style={statusStyles.HeiferSm}>H</Text>
              ) : item.status === "Calf" ? (
                <Text style={statusStyles.CalfSm}>C</Text>
              ) : (
                <Text style={statusStyles.DrySm}>D</Text>
              )}
              <Text style={styles.animalAttr}>{item.id}</Text>
              <Text style={styles.animalAttr}>{item.name}</Text>
              <Text style={styles.animalAttr}>{item.DOB}</Text>
            </TouchableOpacity>
            <View style={styles.hr}></View>
          </>
        )}
      />
    );
  };
  return <>{userType == 2 ? DisplayFarmerAnimals() : DisplayVetAnimals()}</>;
}
