// React
import { View, TouchableHighlight, Text } from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { infoStyles, Todos } from "../../styles";
// Components
import { MainHeaderTitle } from "../UI/atoms";
import { AnimalActions } from "../UI/molecules/AnimalActions";
import { MedicalRecord } from "../UI/organisms/MedicalRecord";
import { AnimalCard } from "../UI/organisms";

export function AnimalInformationPage({ animal, navigation }) {
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle title={"Animal Information"} />
      </View>
      <View>
        <TouchableHighlight
          style={infoStyles.backButton}
          onPress={() => navigation.navigate("Home")}
          underlayColor={"white"}
        >
          <Text>back</Text>
        </TouchableHighlight>
        <AnimalCard />
        <AnimalActions />
        <MedicalRecord />
      </View>
    </>
  );
}
