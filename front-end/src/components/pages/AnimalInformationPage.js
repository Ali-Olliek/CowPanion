import { View } from "react-native";
import { MainHeaderTitle } from "../UI/atoms";
import { styles } from "../../styles/AnimalsListStyle";
import { AnimalCard } from "../UI/organisms/AnimalCard";
import { BottomNavBarButtons } from "../UI/organisms";
import { infoStyles } from "../../styles/AnimalInfoStyle";
import { AnimalActions } from "../UI/molecules/AnimalActions";

export function AnimalInformationPage() {
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle title={"Animal Information"} />
      </View>
      <View style={infoStyles.infoCard}>
        <AnimalCard />
      </View>
      <View>
        <AnimalActions />
      </View>
      <BottomNavBarButtons />
    </>
  );
}
