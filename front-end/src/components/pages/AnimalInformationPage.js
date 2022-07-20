// React
import { View } from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { infoStyles } from "../../styles/AnimalInfoStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import { BottomNavBarButtons, AnimalCard } from "../UI/organisms";
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
