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
              <Text style={styles.animalID}>{item.id}</Text>
              <Text style={styles.animalDOB}>{item.DOB}</Text>
              <Text style={styles.animalName}>{item.name}</Text>
              {item.status === "Lactating" ? (
                <Text style={statusStyles.LactatingSm}>L</Text>
              ) : item.status === "Heifer" ? (
                <Text style={statusStyles.HeiferSm}>H</Text>
              ) : item.status === "Calf" ? (
                <Text style={statusStyles.CalfSm}>C</Text>
              ) : (
                <Text style={statusStyles.DrySm}>D</Text>
              )}
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
        ListFooterComponent={<View style={{ height: 20 }} />}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              style={styles.recordContainer}
              onPress={() => {
                navigation.navigate("Animal", { id: item.id }); // Passing the id with navigation
              }}
            >
              <Text style={styles.animalID}>{item.id}</Text>
              <Text style={styles.animalDOB}>{item.DOB}</Text>
              <Text style={styles.animalName}>{item.name}</Text>
              {item.status === "Lactating" ? (
                <Text style={statusStyles.LactatingSm}>Lactating</Text>
              ) : item.status === "Heifer" ? (
                <Text style={statusStyles.HeiferSm}>Heifer</Text>
              ) : item.status === "Calf" ? (
                <Text style={statusStyles.CalfSm}>Calf</Text>
              ) : (
                <Text style={statusStyles.DrySm}>Dry</Text>
              )}
            </TouchableOpacity>
            <View style={styles.hr}></View>
          </>
        )}
      />
    );
  };
  return <>{userType == 2 ? DisplayFarmerAnimals() : DisplayVetAnimals()}</>;
}
