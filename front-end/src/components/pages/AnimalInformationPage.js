// React
import { FlatList, View, Text } from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { infoStyles } from "../../styles/AnimalInfoStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import { BottomNavBarButtons, AnimalCard } from "../UI/organisms";
import { AnimalActions } from "../UI/molecules/AnimalActions";
import { MedicalRecord } from "../UI/organisms/MedicalRecord";

export function AnimalInformationPage() {
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
      <BottomNavBarButtons />
    </>
  );
}
