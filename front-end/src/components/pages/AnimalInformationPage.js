// React
import { View } from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import { AnimalActions } from "../UI/molecules/AnimalActions";
import { MedicalRecord } from "../UI/organisms/MedicalRecord";

export function AnimalInformationPage({ animal }) {
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle title={"Animal Information"} />
      </View>
      <View>
        <AnimalCard />
        <AnimalActions />
        <MedicalRecord />
      </View>
    </>
  );
}
